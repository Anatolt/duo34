import test from 'node:test';
import assert from 'node:assert/strict';
import {storyById} from '../stories.js';
import {explanationSegments,noteText} from '../story-languages.js';
import {storyScreen} from '../story-ui.js';

test('Spanish-to-Russian explanation explicitly separates pedagogy from the studied quote',()=>{
 const node=storyById['hot-mic'].nodes[12];
 const segments=explanationSegments(node,'es','ru');
 assert.deepEqual(segments.map(x=>[x.role,x.lang]),[
  ['pedagogy','ru'],['study-quote','es'],['pedagogy','ru'],['pedagogy-gloss','ru'],['pedagogy','ru']
 ]);
 assert.equal(segments[1].text,'Dijiste que estaba diciendo puras mierdas.');
 assert.doesNotMatch(noteText(node,'es','ru'),/full of shit/);
});

test('The rendered explanation labels the intentional Spanish quote separately',()=>{
 const state={storyProgress:{'hot-mic':{index:12,answers:{12:0}}}};
 const html=storyScreen(state,'hot-mic',{study:'es',translation:'ru',ui:'ru',pedagogy:'ru'});
 assert.match(html,/data-language-role="pedagogy"/);
 assert.match(html,/lang="es" data-language-role="study-quote">Dijiste que estaba diciendo puras mierdas\./);
 const pedagogy=html.match(/<p class="pedagogy"[\s\S]*?<\/p>/)?.[0]||'';
 assert.doesNotMatch(pedagogy,/full of shit/);
});

test('Changing pedagogy language does not change study or translation content',()=>{
 const node=storyById['dad-dating'].nodes[9];
 const uk=explanationSegments(node,'zh','uk');
 const en=explanationSegments(node,'zh','en');
 assert.equal(uk[1].text,en[1].text);
 assert.equal(uk[1].lang,'zh');
 assert.equal(uk[0].lang,'uk');
 assert.equal(en[0].lang,'en');
 assert.equal(uk.find(x=>x.role==='pedagogy-gloss').text,'Ні, я вільний.');
});
