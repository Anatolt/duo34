"""One-time, checksum-guarded rollout; run after tests/build and registry approval."""
import base64,json,pathlib,subprocess
ROOT=pathlib.Path(__file__).resolve().parents[1]
PUBLIC='/home/tolik/web/anatolt.ru/public_html/t/duo34'
PRIVATE='/home/tolik/web/anatolt.ru/private/duo34-analytics'
ARCHIVE=PRIVATE+'/archive/narrator-20260911'
def encode(data):return base64.b64encode(data).decode()
def old(name):return (ROOT/'archive/narrator-20260911'/name).read_bytes()
manifest=json.loads(subprocess.check_output(['node','--input-type=module','-e',"import m from './audio-manifest.js'; console.log(JSON.stringify(m))"],cwd=ROOT))
newclips={c['src']:c for key,c in manifest['clips'].items() if c['who']=='narrator'}
files=[]
for src,clip in newclips.items():files.append({'path':PUBLIC+'/'+src,'old':None,'data':encode((ROOT/src).read_bytes()),'sha256':clip['sha256']})
# Publish clips and their manifest before narrator controls.
for name in ['audio-manifest.js','story-audio.js','story-ui.js','app.js']:
    files.append({'path':PUBLIC+'/'+name,'old':encode(old(name)),'data':encode((ROOT/'dist'/name).read_bytes())})
files.append({'path':PUBLIC+'/REVISION','old':encode(old('REVISION')),'data':encode((ROOT/'REVISION').read_bytes())})
worker=r'''
import base64,hashlib,json,os,pathlib,pwd,shutil,sys
request=json.load(sys.stdin);files=request['files'];archive=pathlib.Path(request['archive'])
assert not archive.exists(), 'Deployment already attempted; inspect archive before resuming'
for f in files:
 p=pathlib.Path(f['path']);f['bytes']=base64.b64decode(f['data'])
 if f['old'] is None:assert not p.exists(), 'New path already exists: '+str(p)
 else:assert p.read_bytes()==base64.b64decode(f['old']), 'Production changed: '+str(p)
 if 'sha256' in f:assert hashlib.sha256(f['bytes']).hexdigest()==f['sha256']
archive.mkdir(parents=True)
owner=pwd.getpwnam('tolik')
for f in files:
 p=pathlib.Path(f['path'])
 if f['old'] is not None:shutil.copy2(p,archive/p.name)
try:
 for f in files:
  p=pathlib.Path(f['path']);temp=p.with_name(p.name+'.narrator-20260911')
  with temp.open('xb') as output:output.write(f['bytes'])
  os.chown(temp,owner.pw_uid,owner.pw_gid);temp.chmod(0o644)
  assert temp.read_bytes()==f['bytes']
  temp.replace(p)
 for f in files:assert pathlib.Path(f['path']).read_bytes()==f['bytes']
except Exception:
 for f in files:
  p=pathlib.Path(f['path'])
  if f['old'] is not None:
   shutil.copy2(archive/p.name,p);os.chown(p,owner.pw_uid,owner.pw_gid)
 raise
print('Published and verified',len(files),'files. Backup:',archive)
'''
import shlex
subprocess.run(['ssh','de','ssh new '+shlex.quote('python3 -c '+shlex.quote(worker))],input=json.dumps({'archive':ARCHIVE,'files':files}).encode(),check=True)
