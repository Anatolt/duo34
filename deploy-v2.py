from pathlib import Path
import hashlib,os
base=Path('/var/www/duo34')
release=base/'releases/20260905-v2'
hashes={'index.html': 'c885b4f8c92557ddfa43293bdda5a14b0aa4ba7f17e2cd18865514fc4e505d24', 'stories.js': 'cca9fc4ef39a3cd5fd9cafc2e42b243a6fa5d3936f07da36dd25d58dc1eaea10', 'icon.svg': 'e3d3c36c58defaee6891701e0fdb4c6f861465a543c5f4d952f68bb0fff7444f', 'course.js': 'fa51f27d43967102aa82b862440699d7d2a2f996a4de315d9d52106836fe63df', 'story-ui.js': 'dfe07440b34a67aa32bc0899e8ed81517d2b2ee7d46f988e8c46104e46121f90', 'style.css': '9cf327b38c906e017391655c6c02dd4dcad2a8b81f3e5a72fa2fe48447f2f1dc', 'engine.js': '5a3f9fc533fd82994369b381832e65b8076419595c855413c29e2d9ceb21ae53', 'app.js': '067e5a5edb559c33ee5cf2da1d81c7e1ae4dc0e9292252fed2cf455181ef100a', 'story-engine.js': 'a4ff569d0935311a1f4d8d01978c0a379ebc3c86bd3e1df31b036868e9cfbaf9'}
for name,expected in hashes.items():
 assert hashlib.sha256((release/name).read_bytes()).hexdigest()==expected, name
current=base/'current'
assert os.readlink(current)=='releases/20260905-v1', 'Live version changed, inspect before switch'
pending=base/'current-v2-pending'
assert not pending.exists() and not pending.is_symlink()
pending.symlink_to('releases/20260905-v2')
os.replace(pending,current)
print('Verified all 9 files; current switched to '+os.readlink(current))
