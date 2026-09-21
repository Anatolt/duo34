"""Checksum-guarded production rollout for the Spanish-to-Russian note fix."""
import base64
import json
import pathlib
import shlex
import subprocess

ROOT = pathlib.Path(__file__).resolve().parents[1]
PUBLIC = pathlib.PurePosixPath('/home/tolik/web/anatolt.ru/public_html/t/duo34')
ARCHIVE = '/home/tolik/web/anatolt.ru/private/duo34-analytics/archive/es-ru-notes-20260917'
EXPECTED = {
    'story-languages.js': '6a55f43f9b3c7a4b945ec341eba4074df106ba5019237c7efb1a2915f17b5e05',
    'story-ui.js': 'c6d2d421447e17d1675f2770ac8105f716806b1f7eaae889533d2953151e27ac',
    'stories-new.js': '191ce354766e18b7d6780e3ba9390cfe1659c7c671a1adbed9515c9f7773d330',
}

files = [
    {
        'path': str(PUBLIC / name),
        'old_sha256': old_sha256,
        'data': base64.b64encode((ROOT / 'dist' / name).read_bytes()).decode(),
    }
    for name, old_sha256 in EXPECTED.items()
]

worker = r'''
import base64, hashlib, json, os, pathlib, pwd, shutil, sys

request = json.load(sys.stdin)
files = request['files']
archive = pathlib.Path(request['archive'])
assert not archive.exists(), 'Deployment already attempted; inspect archive before resuming'
for item in files:
    path = pathlib.Path(item['path'])
    item['bytes'] = base64.b64decode(item['data'])
    actual = hashlib.sha256(path.read_bytes()).hexdigest()
    assert actual == item['old_sha256'], f'Production changed: {path} ({actual})'

archive.mkdir(parents=True)
owner = pwd.getpwnam('tolik')
for item in files:
    path = pathlib.Path(item['path'])
    shutil.copy2(path, archive / path.name)

try:
    for item in files:
        path = pathlib.Path(item['path'])
        temp = path.with_name(path.name + '.es-ru-notes-20260917')
        with temp.open('xb') as output:
            output.write(item['bytes'])
        os.chown(temp, owner.pw_uid, owner.pw_gid)
        temp.chmod(0o644)
        assert temp.read_bytes() == item['bytes']
        temp.replace(path)
    for item in files:
        assert pathlib.Path(item['path']).read_bytes() == item['bytes']
except Exception:
    for item in files:
        path = pathlib.Path(item['path'])
        shutil.copy2(archive / path.name, path)
        os.chown(path, owner.pw_uid, owner.pw_gid)
    raise

print('Published and verified', len(files), 'files. Backup:', archive)
'''

subprocess.run(
    ['ssh', 'new', 'python3 -c ' + shlex.quote(worker)],
    input=json.dumps({'archive': ARCHIVE, 'files': files}).encode(),
    check=True,
)
