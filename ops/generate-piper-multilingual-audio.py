"""Generate every Japanese Duo34 story clip with Piper 1.8 on Denver/de.

The remote worker verifies exact model hashes before synthesis. Existing clips
are preserved byte-for-byte; a different file at a target hash is rejected.
"""
import base64
import hashlib
import json
import pathlib
import subprocess

ROOT = pathlib.Path(__file__).resolve().parents[1]
REMOTE_BASE = '/root/duo34-voice-20260906'
PIPER_VERSION = '1.8.0'
LANGUAGE = 'ja'
MODEL = 'ja_JA-hi_fi_captain-medium'

MODELS = {
    MODEL: {
        'sha256': '5eafa1610fc7a0ff2e7fde9cbe0972d876266e23d8db331727eb2466f19460eb',
        'config_sha256': '542eb0b6389cd89ca02ae662700e1dec49ebf1b612821c4ed2e1d1ca4e0d257c'
    }
}
MALE = {'max', 'dad', 'son', 'chad'}


def node(expression):
    return json.loads(subprocess.check_output(
        ['node', '--input-type=module', '-e', expression], cwd=ROOT
    ))


manifest = node("import m from './audio-manifest.js'; console.log(JSON.stringify(m))")
stories = node("import {stories} from './stories.js'; console.log(JSON.stringify(stories))")

jobs = []
for story in stories:
    for index, item in enumerate(story['nodes']):
        if item['type'] == 'choice':
            text = item['i18n']['options'][LANGUAGE][item['correct']]
        else:
            text = item['i18n']['line'][LANGUAGE]
        who = 'narrator' if item['type'] == 'scene' else item['who']
        speaker_id = 1 if who in MALE else 0
        voice = f'{MODEL}:{"M" if speaker_id == 1 else "F"}'
        digest = hashlib.sha256(json.dumps({
            'text': text, 'who': who, 'language': LANGUAGE, 'model': MODEL,
            'speaker_id': speaker_id, 'piper': PIPER_VERSION
        }, sort_keys=True, ensure_ascii=False).encode()).hexdigest()
        jobs.append({
            'hash': digest, 'text': text, 'who': who, 'language': LANGUAGE,
            'story': story['id'], 'index': index, 'model': MODEL, 'speaker_id': speaker_id,
            'voice': voice
        })

request = {
    'directory': REMOTE_BASE,
    'models': MODELS,
    'jobs': [{key: value for key, value in job.items() if key in ('hash', 'text', 'model', 'speaker_id')} for job in jobs]
}
raw = subprocess.check_output(
    ['ssh', 'de', f'{REMOTE_BASE}/piper18/bin/python {REMOTE_BASE}/piper-multilingual-worker.py'],
    input=json.dumps(request, ensure_ascii=False).encode()
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
    key = f"{job['language']}:{job['story']}:{job['index']}"
    clips[key] = {
        'text': job['text'], 'who': job['who'], 'lang': job['language'],
        'provider': 'Piper', 'voice': job['voice'],
        'model': f'piper-tts-{PIPER_VERSION}', 'src': source,
        'duration': result['duration'], 'sha256': result['sha256']
    }

manifest['provider'] = 'Piper + OpenAI'
previous = manifest['config'].get('piperMultilingual', {})
manifest['config']['piperMultilingual'] = {
    **previous,
    'version': PIPER_VERSION,
    'models': {**previous.get('models', {}), **MODELS},
    'stories': sorted({*previous.get('stories', []), *(story['id'] for story in stories)}),
    'languages': sorted({*previous.get('languages', []), LANGUAGE})
}
manifest['clips'] = clips
(ROOT / 'audio-manifest.js').write_text(
    '// English and Japanese plus selected localized audio use Piper; earlier multilingual clips retain OpenAI TTS metadata.\n'
    'export default ' + json.dumps(manifest, ensure_ascii=False, indent=2) + ';\n'
)
print(f'Integrated {len(jobs)} Japanese Piper clips across {len(stories)} stories.')
