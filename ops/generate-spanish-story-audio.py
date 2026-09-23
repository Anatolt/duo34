"""Generate missing Spanish audio for the six localized Duo34 stories.

Uses the pinned two-speaker es_ES-sharvard-medium Piper model on de. Existing
matching clips stay untouched; generated MP3 files are content-addressed.
"""
import base64
import hashlib
import json
import pathlib
import subprocess

ROOT = pathlib.Path(__file__).resolve().parents[1]
REMOTE_BASE = '/root/duo34-voice-20260906'
PIPER_VERSION = '1.8.0'
MODEL = 'es_ES-sharvard-medium'
MODEL_HASHES = {
    'sha256': '40febfb1679c69a4505ff311dc136e121e3419a13a290ef264fdf43ddedd0fb1',
    'config_sha256': '7438c9b699c72b0c3388dae1b68d3f364dc66a2150fe554a1c11f03372957b2c',
}
STORY_IDS = {
    'return-hoodie', 'dad', 'change-mind', 'compliment', 'netflix', 'translator'
}
MALE = {'max', 'dad', 'son', 'chad'}


def load_node(expression):
    return json.loads(subprocess.check_output(
        ['node', '--input-type=module', '-e', expression], cwd=ROOT
    ))


manifest = load_node("import m from './audio-manifest.js'; console.log(JSON.stringify(m))")
stories = load_node("import {stories} from './stories.js'; console.log(JSON.stringify(stories))")
jobs = []
for story in stories:
    if story['id'] not in STORY_IDS:
        continue
    for index, item in enumerate(story['nodes']):
        text = (item['i18n']['options']['es'][item['correct']]
                if item['type'] == 'choice' else item['i18n']['line']['es'])
        who = 'narrator' if item['type'] == 'scene' else item['who']
        key = f"es:{story['id']}:{index}"
        current = manifest['clips'].get(key)
        if current and current.get('text') == text and current.get('who') == who:
            continue
        male = who in MALE
        speaker_id = 0 if male else 1
        speaker_name = 'M' if male else 'F'
        digest = hashlib.sha256(json.dumps({
            'text': text, 'who': who, 'language': 'es', 'model': MODEL,
            'speaker_id': speaker_id, 'piper': PIPER_VERSION,
        }, sort_keys=True, ensure_ascii=False).encode()).hexdigest()
        jobs.append({
            'hash': digest, 'key': key, 'text': text, 'who': who,
            'story': story['id'], 'index': index, 'speaker_id': speaker_id,
            'voice': f'{MODEL}:{speaker_name}',
        })

if not jobs:
    print('All six Spanish stories already have matching audio.')
    raise SystemExit(0)

request = {
    'directory': REMOTE_BASE,
    'models': {MODEL: MODEL_HASHES},
    'jobs': [
        {'hash': job['hash'], 'text': job['text'], 'model': MODEL,
         'speaker_id': job['speaker_id']}
        for job in jobs
    ],
}
raw = subprocess.check_output(
    ['ssh', 'de', f'{REMOTE_BASE}/piper18/bin/python '
     f'{REMOTE_BASE}/piper-multilingual-worker.py'],
    input=json.dumps(request, ensure_ascii=False).encode(),
)
results = {item['hash']: item for item in json.loads(raw)}
if len(results) != len(jobs):
    raise RuntimeError('Incomplete Piper response')

audio_dir = ROOT / 'audio'
audio_dir.mkdir(exist_ok=True)
clips = dict(manifest['clips'])
for job in jobs:
    result = results[job['hash']]
    data = base64.b64decode(result['data'])
    if hashlib.sha256(data).hexdigest() != result['sha256']:
        raise RuntimeError('Generated clip checksum mismatch')
    source = f"audio/{result['sha256']}.mp3"
    path = ROOT / source
    if path.exists():
        if path.read_bytes() != data:
            raise RuntimeError(f'Refusing to overwrite different audio: {path}')
    else:
        path.write_bytes(data)
    clips[job['key']] = {
        'text': job['text'], 'who': job['who'], 'lang': 'es',
        'provider': 'Piper', 'voice': job['voice'],
        'model': f'piper-tts-{PIPER_VERSION}', 'src': source,
        'duration': result['duration'], 'sha256': result['sha256'],
    }

manifest['provider'] = 'Piper + OpenAI'
previous = manifest['config'].get('piperMultilingual', {})
manifest['config']['piperMultilingual'] = {
    **previous,
    'version': PIPER_VERSION,
    'models': {**previous.get('models', {}), MODEL: MODEL_HASHES},
    'stories': sorted({*previous.get('stories', []), *STORY_IDS}),
    'languages': sorted({*previous.get('languages', []), 'es'}),
}
manifest['clips'] = clips
(ROOT / 'audio-manifest.js').write_text(
    '// English and Japanese plus selected localized audio use Piper; earlier multilingual clips retain OpenAI TTS metadata.\n'
    'export default ' + json.dumps(manifest, ensure_ascii=False, indent=2) + ';\n'
)
print(f'Integrated {len(jobs)} Spanish Piper clips for six stories.')
