import urllib.request,urllib.error,base64,pathlib
base='https://anatolt.ru/t/duo34/'
def check(path,code,headers={},data=None):
 try:r=urllib.request.urlopen(urllib.request.Request(base+path,headers=headers,data=data))
 except urllib.error.HTTPError as e:r=e
 print(path,r.status);assert r.status==code;return r.read()
check('stats.php',401);check('analytics.php',405)
check('stats.php',401,{'Authorization':'Basic YWRtaW46d3Jvbmc='})
check('analytics.php',403,{'Origin':'https://evil.example','Content-Type':'application/json'},b'{}')
check('analytics.php',400,{'Content-Type':'application/json'},b'{}')
p=pathlib.Path('.analytics-access.txt').read_text().split('Password: ')[1].strip()
auth='Basic '+base64.b64encode(('admin:'+p).encode()).decode()
body=check('stats.php',200,{'Authorization':auth}).decode();assert 'Аналитика Duo34' in body
for f in ['app.js','analytics.js']:assert check(f,200)==pathlib.Path(f).read_bytes()
print('PASS: live auth, origin, validation, JS byte identity')
