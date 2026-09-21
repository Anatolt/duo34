import test from 'node:test';
import assert from 'node:assert/strict';
import {storyById} from '../stories.js';

function localizedStrings(story,lang){
  const values=[];
  for(const field of ['title','enTitle','subtitle','place','topic','ending']){
    const value=story.i18n?.[field]?.[lang];
    if(typeof value==='string')values.push(value);
  }
  for(const node of story.nodes){
    for(const field of ['line','prompt','options','note']){
      const value=node.i18n?.[field]?.[lang];
      if(typeof value==='string')values.push(value);
      if(Array.isArray(value))values.push(...value);
    }
  }
  return values;
}

test('hot-mic teaches localized vulgar equivalents instead of English leftovers',()=>{
  const story=storyById['hot-mic'];
  assert.equal(story.nodes[10].i18n.line.es,'Oímos: “Está diciendo puras mierdas”. Luego te congelaste.');
  assert.equal(story.nodes[10].i18n.line.zh,'我们听到“他满嘴喷粪”。然后你卡住了。');
  assert.equal(story.nodes[10].i18n.line.uk,'Ми почули: «Він несе хуйню». Потім ти завис.');

  assert.match(story.nodes[15].i18n.line.es,/lamerle el culo/);
  assert.match(story.nodes[15].i18n.line.zh,/舔他屁股/);
  assert.match(story.nodes[15].i18n.line.uk,/лизати йому сраку/);
  assert.match(story.nodes[17].i18n.options.zh[2],/舔您的屁股/);
  assert.match(story.nodes[17].i18n.options.uk[2],/полизав вам сраку/);
});

test('existing ES ZH UK lessons do not leak the audited English teaching phrases',()=>{
  const leaked=/full of shit|kiss(?: someone| his| your)? ass|suck up|daddy|are you seeing anyone|looking for something serious|sounds good|how about eleven|come from penetration|go down on|sixty-nine|i liked it more too/i;
  for(const [storyId,languages] of [
    ['hot-mic',['es','zh','uk']],
    ['dad-dating',['es','zh','uk']],
    ['size-isnt-the-point',['es']]
  ]){
    const story=storyById[storyId];
    for(const lang of languages){
      const text=localizedStrings(story,lang).join('\n');
      assert.doesNotMatch(text,leaked,`${storyId}:${lang}`);
    }
  }
});

test('Spanish intimacy lesson uses natural Spanish expressions',()=>{
  const story=storyById['size-isnt-the-point'];
  assert.match(story.i18n.topic.es,/correrse/);
  assert.equal(story.nodes[6].i18n.line.es,'Te lo estoy diciendo ahora. Me encanta cuando me comes el coño.');
  assert.match(story.nodes[8].i18n.prompt.es,/comerle el coño/);
  assert.match(story.nodes[17].i18n.prompt.es,/sesenta y nueve/);
});
