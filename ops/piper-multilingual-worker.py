"""Checksum-guarded multilingual Piper worker for the Duo34 synthesis host.

JSON request is read from stdin; verified MP3 results are returned as JSON on
stdout. The worker has no network or service side effects.
"""
import base64
import hashlib
import json
import pathlib
import re
import subprocess
import sys
import time
import wave

from piper import PiperVoice, SynthesisConfig

BASE = pathlib.Path('/root/duo34-voice-20260906').resolve()
MODELS = BASE / 'models-v2'
OUTPUT = BASE / 'generated-multilingual'
ARCHIVE = BASE / 'archive'

request = json.load(sys.stdin)
if pathlib.Path(request['directory']).resolve() != BASE:
    raise ValueError('Unexpected synthesis directory')

models = request['models']
loaded = {}
for name, expected in models.items():
    if not re.fullmatch(r'[a-zA-Z0-9_-]+', name):
        raise ValueError('Invalid model name')
    model = MODELS / f'{name}.onnx'
    config = MODELS / f'{name}.onnx.json'
    for path, field in ((model, 'sha256'), (config, 'config_sha256')):
        actual = hashlib.sha256(path.read_bytes()).hexdigest()
        if actual != expected[field]:
            raise RuntimeError(f'Model checksum mismatch: {path}')
    loaded[name] = PiperVoice.load(model, config)

OUTPUT.mkdir(parents=True, exist_ok=True)
results = []
for job in request['jobs']:
    if not re.fullmatch(r'[a-f0-9]{64}', job['hash']):
        raise ValueError('Invalid clip hash')
    if job['model'] not in loaded or not isinstance(job['text'], str) or not 0 < len(job['text']) <= 4096:
        raise ValueError('Invalid synthesis job')
    wav_path = OUTPUT / f"{job['hash']}.wav"
    if wav_path.exists():
        archive = ARCHIVE / f"multilingual-{time.time_ns()}"
        archive.mkdir(parents=True)
        wav_path.rename(archive / wav_path.name)
    speaker_id = job.get('speaker_id')
    if speaker_id is not None and not isinstance(speaker_id, int):
        raise ValueError('Invalid speaker id')
    with wave.open(str(wav_path), 'wb') as wav_file:
        loaded[job['model']].synthesize_wav(
            job['text'], wav_file, SynthesisConfig(speaker_id=speaker_id)
        )
    with wave.open(str(wav_path)) as audio:
        duration = audio.getnframes() / audio.getframerate()
        if duration < 0.15 or duration > 120:
            raise ValueError('Invalid duration')
    mp3 = subprocess.run(
        ['ffmpeg', '-v', 'error', '-i', str(wav_path), '-codec:a', 'libmp3lame',
         '-b:a', '64k', '-f', 'mp3', 'pipe:1'],
        capture_output=True, check=True
    ).stdout
    results.append({
        'hash': job['hash'],
        'duration': duration,
        'sha256': hashlib.sha256(mp3).hexdigest(),
        'data': base64.b64encode(mp3).decode()
    })

json.dump(results, sys.stdout)
