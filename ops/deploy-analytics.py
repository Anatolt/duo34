"""Run from repo; deploy only analytics + app and the scoped nginx includes on new."""
import pathlib,subprocess,shlex,hashlib,json
PUBLIC='/home/tolik/web/anatolt.ru/public_html/t/duo34'
PRIVATE='/home/tolik/web/anatolt.ru/private/duo34-analytics'
CONF='/home/tolik/conf/web/anatolt.ru'
def run(command,data=None):
 r=subprocess.run(['ssh','de','ssh new '+shlex.quote(command)],input=data,capture_output=True,check=True)
 return r.stdout
def put(path,data):run('cat > '+shlex.quote(path),data)
# Refuse to overwrite any change made since the reviewed live baseline.
original=subprocess.check_output(['git','show','c6023dd:app.js'])
assert run('sha256sum '+PUBLIC+'/app.js').decode().split()[0]==hashlib.sha256(original).hexdigest(),'Live app changed; stop and reconcile'
archive=PRIVATE+'/archive/pre-analytics-20260909'
run('test ! -e '+archive+' && mkdir -p '+archive)
for name in ['app.js','index.html','REVISION']:
 run('cp -p '+PUBLIC+'/'+name+' '+archive+'/'+name)
for name in ['nginx.ssl.conf_duo34','nginx.conf_duo34']:
 run('cp -p '+CONF+'/'+name+' '+archive+'/'+name)
ssl=run('cat '+CONF+'/nginx.ssl.conf_duo34').decode()
for name in ['analytics','stats']:
 ssl+='''\nlocation = /t/duo34/{ENDPOINT}.php {
    client_max_body_size 32k;
    include /etc/nginx/fastcgi_params;
    fastcgi_param SCRIPT_FILENAME /home/tolik/web/anatolt.ru/public_html/t/duo34/{ENDPOINT}.php;
    fastcgi_param HTTPS on;
    fastcgi_param HTTP_AUTHORIZATION $http_authorization;
    fastcgi_pass unix:/run/php/php8.3-fpm-anatolt.ru.sock;
}
'''.replace('{ENDPOINT}',name)
put(CONF+'/nginx.ssl.conf_duo34',ssl.encode())
put(CONF+'/nginx.conf_duo34',b'location = /t/duo34 { return 301 https://anatolt.ru/t/duo34/; }\nlocation ^~ /t/duo34/ { return 301 https://anatolt.ru$request_uri; }\n')
try:print(run('nginx -t').decode());run('systemctl reload nginx')
except:
 for name in ['nginx.ssl.conf_duo34','nginx.conf_duo34']:run('cp -p '+archive+'/'+name+' '+CONF+'/'+name)
 raise
# PHP files only enter the public tree once exact executable routes are active.
for name in ['analytics.php','stats.php','analytics.js','app.js','REVISION']:
 put(PRIVATE+'/'+name+'.deploy',pathlib.Path(name).read_bytes())
 run('chown tolik:tolik '+PRIVATE+'/'+name+'.deploy && chmod 644 '+PRIVATE+'/'+name+'.deploy && mv '+PRIVATE+'/'+name+'.deploy '+PUBLIC+'/'+name)
print('Scoped deployment complete; baseline archived at '+archive)
