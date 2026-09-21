"""Regenerate the reviewed ES/ZH/UK story lines with pinned Piper voices.

This is intentionally scoped to the localization audit of 2026-09-19. The
remote worker verifies model hashes, while the local integration keeps audio
content-addressed and refuses to overwrite different bytes.
"""
import base64
import hashlib
import json
import pathlib
import subprocess

ROOT = pathlib.Path(__file__).resolve().parents[1]
REMOTE_BASE = '/root/duo34-voice-20260906'
PIPER_VERSION = '1.8.0'

MODELS = {
    'es_ES-sharvard-medium': {
        'sha256': '40febfb1679c69a4505ff311dc136e121e3419a13a290ef264fdf43ddedd0fb1',
        'config_sha256': '7438c9b699c72b0c3388dae1b68d3f364dc66a2150fe554a1c11f03372957b2c',
    },
    'zh_CN-huayan-medium': {
        'sha256': '9929917bf8cabb26fd528ea44d3a6699c11e87317a14765312420be230be0f3d',
        'config_sha256': 'd521dc45504a8ccc99e325822b35946dd701840bfb07e3dbb31a40929ed6a82b',
    },
    'uk_UA-ukrainian_tts-medium': {
        'sha256': '7920419ac5f6fd8b6450520f24b52ed5a319cb53dd018fbcd71c9e079cbac84f',
        'config_sha256': '4e96e72917ca9b94edc77d6ccfee03a73f450ba2fc1ca93c2e562bc014e5aa55',
    },
}

LANGUAGES = {
    'es': {'model': 'es_ES-sharvard-medium', 'female': 1, 'male': 0, 'female_name': 'F', 'male_name': 'M'},
    'zh': {'model': 'zh_CN-huayan-medium', 'female': 0, 'male': 0, 'female_name': 'F', 'male_name': 'M'},
    'uk': {'model': 'uk_UA-ukrainian_tts-medium', 'female': 2, 'male': 1, 'female_name': 'tetiana', 'male_name': 'mykyta'},
}

REVIEWED_NODES = {
    ('es', 'hot-mic'): (1, 7, 10, 12, 15, 19),
    ('zh', 'hot-mic'): (1, 7, 10, 12, 15, 19),
    ('uk', 'hot-mic'): (1, 7, 10, 12, 15, 19),
    ('es', 'dad-dating'): (1, 2, 7, 10, 20),
    ('zh', 'dad-dating'): (1, 2, 7, 10, 20),
    ('uk', 'dad-dating'): (1, 2, 7, 10, 20),
    ('es', 'size-isnt-the-point'): (6, 7, 8),
}

MALE = {'max', 'dad', 'son', 'chad'}


def load_node(expression):
    return json.loads(subprocess.check_output(
        ['node', '--input-type=module', '-e', expression], cwd=ROOT
    ))


manifest = load_node("import m from './audio-manifest.js'; console.log(JSON.stringify(m))")
stories = {
    story['id']: story
    for story in load_node("import {stories} from './stories.js'; console.log(JSON.stringify(stories))")
}

jobs = []
for (language, story_id), indexes in REVIEWED_NODES.items():
    story = stories[story_id]
    language_config = LANGUAGES[language]
    for index in indexes:
        item = story['nodes'][index]
        text = (item['i18n']['options'][language][item['correct']]
                if item['type'] == 'choice' else item['i18n']['line'][language])
        speech_text = text
        if language == 'uk':
            # This voice's phoneme map contains lowercase Ukrainian letters only.
            speech_text = (text.lower()
                           .replace('helen, 49', 'гелен, сорок дев\'ять')
                           .replace('’', "'")
                           .replace('«', '')
                           .replace('»', ''))
        who = 'narrator' if item['type'] == 'scene' else item['who']
        male = who in MALE
        speaker_id = language_config['male' if male else 'female']
        speaker_name = language_config['male_name' if male else 'female_name']
        model = language_config['model']
        digest = hashlib.sha256(json.dumps({
            'text': text, 'speech_text': speech_text, 'who': who,
            'language': language, 'model': model,
            'speaker_id': speaker_id, 'piper': PIPER_VERSION,
        }, sort_keys=True, ensure_ascii=False).encode()).hexdigest()
        jobs.append({
            'hash': digest, 'text': text, 'speech_text': speech_text,
            'who': who, 'language': language,
            'story': story_id, 'index': index, 'model': model,
            'speaker_id': speaker_id, 'voice': f'{model}:{speaker_name}',
        })

request = {
    'directory': REMOTE_BASE,
    'models': MODELS,
    'jobs': [
        {
            'hash': job['hash'], 'text': job['speech_text'],
            'model': job['model'], 'speaker_id': job['speaker_id'],
        }
        for job in jobs
    ],
}
raw = subprocess.check_output(
    ['ssh', 'de', f'{REMOTE_BASE}/piper18/bin/python {REMOTE_BASE}/piper-multilingual-worker.py'],
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
    key = f"{job['language']}:{job['story']}:{job['index']}"
    clips[key] = {
        'text': job['text'], 'who': job['who'], 'lang': job['language'],
        'provider': 'Piper', 'voice': job['voice'],
        'model': f'piper-tts-{PIPER_VERSION}', 'src': source,
        'duration': result['duration'], 'sha256': result['sha256'],
    }

manifest['provider'] = 'Piper + OpenAI'
previous = manifest['config'].get('piperMultilingual', {})
manifest['config']['piperMultilingual'] = {
    **previous,
    'version': PIPER_VERSION,
    'models': {**previous.get('models', {}), **MODELS},
    'stories': sorted({*previous.get('stories', []), *(story for _, story in REVIEWED_NODES)}),
    'languages': sorted({*previous.get('languages', []), *(language for language, _ in REVIEWED_NODES)}),
}
manifest['clips'] = clips
(ROOT / 'audio-manifest.js').write_text(
    '// English and Japanese plus selected localized audio use Piper; earlier multilingual clips retain OpenAI TTS metadata.\n'
    'export default ' + json.dumps(manifest, ensure_ascii=False, indent=2) + ';\n'
)
print(f'Integrated {len(jobs)} reviewed ES/ZH/UK Piper clips.')
