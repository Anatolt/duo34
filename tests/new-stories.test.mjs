import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {stories} from '../stories.js';
import {storyData} from '../content.generated.js';
import {roadmap} from '../story-ui.js';
import {availableStories} from '../story-languages.js';
import {revealedClip} from '../story-audio.js';
import audio from '../audio-manifest.js';

test('New stories lead; legacy content and bookmark indices are unchanged',()=>{
  assert.deepEqual(stories.slice(0,4).map(s=>s.id),['hot-mic','dad-dating','return-hoodie','size-isnt-the-point']);
  assert.deepEqual(stories.slice(4),storyData.stories);
  assert.equal(new Set(stories.map(s=>s.id)).size,stories.length);
  const html=roadmap({storyCompleted:{dad:4},storyProgress:{dad:{index:3}}});
  assert.ok(html.includes('1 / 9 прочитано'));
  assert.ok(!html.includes('undefined'));
  assert.ok(html.indexOf('data-id="hot-mic"')<html.indexOf('data-id="dad"'));
  const zhUk=roadmap({storyCompleted:{},storyProgress:{}},{source:'zh',target:'uk'});
  assert.deepEqual(availableStories(stories,'zh','uk').map(s=>s.id),['hot-mic','dad-dating']);
  assert.ok(zhUk.includes('中文'));
  assert.ok(zhUk.includes('Українська'));
  assert.ok(!zhUk.includes('data-id="return-hoodie"'));
});
test('New choices have aligned translations and revealed audio; unanswered choices stay silent',()=>{
  const catalog=JSON.parse(readFileSync(new URL('../server/catalog.json',import.meta.url)));
  for(const s of stories.slice(0,4)){
    assert.deepEqual(catalog[`story:${s.id}`],{title:s.title,total:4});
    for(const [index,n] of s.nodes.entries()){
      if(n.type==='scene'){assert.ok(n.en&&n.ru);continue;}
      if(n.type==='choice'){
        assert.equal(n.optionsRu.length,n.options.length);
        assert.equal(n.ru,n.optionsRu[n.correct]);assert.ok(n.promptRu);
        assert.equal(revealedClip(s,{index,answers:{}},audio),null);
      }
      const clip=revealedClip(s,{index,answers:{[index]:n.correct}},audio);
      assert.ok(clip.src,`${s.id}:${index}`);
      const data=readFileSync(new URL('../'+clip.src,import.meta.url));
      assert.equal(createHash('sha256').update(data).digest('hex'),audio.clips[clip.key].sha256);
      assert.ok(audio.clips[clip.key].duration>0.15);
    }
  }
});
test('Size story is complete in Russian, English, and Spanish only',()=>{
  const story=stories.find(s=>s.id==='size-isnt-the-point');
  assert.ok(story);
  assert.equal(story.i18n.es,true);
  assert.equal(story.i18n.zh,undefined);
  assert.equal(story.i18n.uk,undefined);
  assert.equal(story.nodes.filter(n=>n.type==='choice').length,4);
  assert.deepEqual(availableStories(stories,'es','ru').map(s=>s.id),stories.map(s=>s.id));
  assert.ok(story.ending.en.includes('lived happily'));
  assert.ok(story.ending.ru.includes('жили долго, счастливо'));
});
