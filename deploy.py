from pathlib import Path
import hashlib, shutil, subprocess, os
base=Path('/var/www/duo34')
cfg=Path('/etc/nginx/conf.d/telega_codex_bot.conf')
text=cfg.read_text()
expected='7473b26e21a8ce12836db9087631f1ed18beaa30db4217a78e8e357e3c3a8367'
assert hashlib.sha256(text.encode()).hexdigest()==expected, 'Nginx changed: inspect before applying'
assert 'location ^~ /duo34/' not in text
for name in ['index.html','app.js','engine.js','course.js','style.css','icon.svg']:
 assert (base/'releases/20260905-v1'/name).stat().st_size>0
archive=base/'archive';archive.mkdir(exist_ok=True)
shutil.copy2(cfg,archive/'nginx-before-20260905-v1.conf')
link=base/'current'
assert not link.exists() and not link.is_symlink(), 'Existing deployment: inspect first'
link.symlink_to('releases/20260905-v1')
block='''
    # Duo34: standalone public language trainer, no server-side user data.
    location = /duo34 { return 301 /duo34/; }
    location ^~ /duo34/ {
        auth_basic off;
        alias /var/www/duo34/current/;
        index index.html;
        autoindex off;
        add_header Cache-Control "no-cache" always;
        add_header X-Content-Type-Options "nosniff" always;
        add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    }
'''
needle='    server_name de.hohohosting.ru;'
new=text.replace(needle,needle+'\n'+block,1)
cfg.write_text(new)
test=subprocess.run(['nginx','-t'],capture_output=True,text=True)
print(test.stderr)
if test.returncode:
 shutil.copy2(cfg,archive/'nginx-rejected-20260905-v1.conf')
 shutil.copy2(archive/'nginx-before-20260905-v1.conf',cfg)
 raise SystemExit('Config rejected and restored')
subprocess.run(['systemctl','reload','nginx'],check=True)
print('Deployed /duo34/; existing locations preserved.')
