"""Guarded full Duo34 release for the ninth story and Piper audio.

Uploads a complete verified build, archives the previous public directory and
analytics catalog, then switches the new release into place on `new`.
"""
import hashlib
import pathlib
import shlex
import subprocess

ROOT = pathlib.Path(__file__).resolve().parents[1]
DIST = ROOT / 'dist'
PUBLIC = '/home/tolik/web/anatolt.ru/public_html/t/duo34'
PRIVATE = '/home/tolik/web/anatolt.ru/private/duo34-analytics'
STAGE = '/home/tolik/web/anatolt.ru/public_html/t/.duo34-size-story-piper-20260917.stage'
CATALOG_STAGE = PRIVATE + '/catalog.size-story-piper-20260917.stage'
ARCHIVE = PRIVATE + '/archive/size-story-piper-20260917'
EXPECTED_REVISION = '203b7ec+stories+narrator+hash-links+five-languages+multilingual-tts+language-pairs+russian-tts-20260916\n'
EXPECTED = {
    'stories-new.js': '19d9631cd225451f2a8068dd35bd905b0974532b3a0f7b7dcdaae3e34368c62b',
    'stories.js': '5a30d17b7d85925eaefdd900ab13f616b2dc051e7228e114f920af46b6082e58',
    'story-ui.js': '2f354c0077a6d40965a7a6c0a405e25d0b37843ed46e2b5dc78631bd79cc3876',
    'story-languages.js': '86bdb9ea74cd29701875217787afa993369834bd5346efab1202cbb565bb70ba',
    'audio-manifest.js': '0ee12192fb171b6a880003d1fe3e28e11f5c1bb96968bd38a8be598bf5c6fada',
    'REVISION': '087957ee452f5d0e35fe9c5a78ab3acd27c2f1959bcf80f02532589e11906e4f'
}
EXPECTED_CATALOG = '3f9f9dfa22d904f9e69a330a0bd992cc88e5c5d1f3345b0771cc48a15eefc46e'


def run(args, *, input_text=None):
    return subprocess.run(args, cwd=ROOT, input=input_text, text=True, check=True, capture_output=True).stdout


def remote(command, *, input_text=None):
    return run(['ssh', 'new', command], input_text=input_text)


def sha(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


if (DIST / 'REVISION').read_text() != (
    '203b7ec+stories+narrator+hash-links+five-languages+multilingual-tts+'
    'language-pairs+russian-tts+size-story-20260917\n'
):
    raise RuntimeError('Unexpected local revision')

checks = ' && '.join(
    f'test "$(sha256sum {shlex.quote(PUBLIC + "/" + name)} | cut -d" " -f1)" = {digest}'
    for name, digest in EXPECTED.items()
)
remote(
    'set -e; '
    f'test "$(cat {shlex.quote(PUBLIC + "/REVISION")})" = {shlex.quote(EXPECTED_REVISION.strip())}; '
    f'{checks}; '
    f'test "$(sha256sum {shlex.quote(PRIVATE + "/catalog.json")} | cut -d" " -f1)" = {EXPECTED_CATALOG}; '
    f'test ! -e {shlex.quote(STAGE)}; test ! -e {shlex.quote(CATALOG_STAGE)}; '
    f'test ! -e {shlex.quote(ARCHIVE)}'
)

run(['rsync', '-a', str(DIST) + '/', f'new:{STAGE}/'])
run(['scp', str(ROOT / 'server/catalog.json'), f'new:{CATALOG_STAGE}'])

manifest_lines = []
for path in sorted(DIST.rglob('*')):
    if path.is_file():
        manifest_lines.append(f'{sha(path)}  {path.relative_to(DIST).as_posix()}')
manifest = '\n'.join(manifest_lines) + '\n'
remote(f'cd {shlex.quote(STAGE)} && sha256sum -c -', input_text=manifest)

remote(
    'set -e; '
    f'find {shlex.quote(STAGE)} -type d -exec chmod 755 {{}} +; '
    f'find {shlex.quote(STAGE)} -type f -exec chmod 644 {{}} +; '
    f'chown -R tolik:tolik {shlex.quote(STAGE)}; '
    f'chown tolik:tolik {shlex.quote(CATALOG_STAGE)}; chmod 644 {shlex.quote(CATALOG_STAGE)}; '
    f'mkdir -p {shlex.quote(ARCHIVE)}; '
    f'mv {shlex.quote(PRIVATE + "/catalog.json")} {shlex.quote(ARCHIVE + "/catalog.json")}; '
    f'mv {shlex.quote(CATALOG_STAGE)} {shlex.quote(PRIVATE + "/catalog.json")}; '
    f'mv {shlex.quote(PUBLIC)} {shlex.quote(ARCHIVE + "/public")}; '
    f'if ! mv {shlex.quote(STAGE)} {shlex.quote(PUBLIC)}; then '
    f'  mv {shlex.quote(ARCHIVE + "/public")} {shlex.quote(PUBLIC)}; '
    f'  mv {shlex.quote(PRIVATE + "/catalog.json")} {shlex.quote(CATALOG_STAGE + ".failed")}; '
    f'  mv {shlex.quote(ARCHIVE + "/catalog.json")} {shlex.quote(PRIVATE + "/catalog.json")}; '
    '  exit 1; '
    f'fi; chown -R tolik:tolik {shlex.quote(ARCHIVE)}'
)

remote(f'cd {shlex.quote(PUBLIC)} && sha256sum -c -', input_text=manifest)
if remote(f'cat {shlex.quote(PRIVATE + "/catalog.json")}') != (ROOT / 'server/catalog.json').read_text():
    raise RuntimeError('Production catalog mismatch')
print(f'Deployed {len(manifest_lines)} verified files; rollback archive: {ARCHIVE}')
