import test from 'node:test';
import assert from 'node:assert/strict';
import {stories} from '../stories.js';
import {storyScreen} from '../story-ui.js';
import {revealedClip,StoryAudio} from '../story-audio.js';
import manifest from '../audio-manifest.js';

test('Every English scene is explicit; existing narrator clips keep a distinct voice',()=>{
  assert.ok(!Object.entries(manifest.config.voices).some(([who,voice])=>who!=='narrator'&&voice===manifest.config.voices.narrator));
  let count=0,voiced=0;
  for(const story of stories)for(const [index,node] of story.nodes.entries()){
    if(node.type!=='scene')continue;
    const progress={index,answers:{}};
    const clip=revealedClip(story,progress,manifest);
    count++;assert.equal(clip.text,node.i18n.line.en);assert.equal(clip.who,'narrator');
    if(clip.src){voiced++;assert.equal(manifest.clips[clip.key].voice,manifest.config.voices.narrator);}
    assert.equal(revealedClip(story,{index:index-1,answers:{}},manifest,index),null);
    const html=storyScreen({storyProgress:{[story.id]:progress}},story.id,{study:'en',translation:'ru',ui:'ru',pedagogy:'ru'});
    assert.ok(html.includes(`data-clip-key="${story.id}:${index}" aria-label="Прослушать рассказчика"`));
  }
  assert.equal(count,23);assert.equal(voiced,17);
});
test('Narration auto-plays, stops on transition, and replays with auto playback disabled',async()=>{
  let played=0,paused=0;
  const audio={pause(){paused++;},removeAttribute(){},load(){},play(){played++;return Promise.resolve();}};
  const player=new StoryAudio({audio});
  const story=stories.find(s=>s.id==='dad-dating');
  const clip=revealedClip(story,{index:17,answers:{}},manifest);
  player.show(clip);await Promise.resolve();assert.equal(player.status,'playing');assert.equal(played,1);
  const staleEnd=audio.onended;
  player.show(revealedClip(story,{index:18,answers:{}},manifest));
  assert.equal(player.status,'idle');assert.ok(paused>=2);staleEnd();assert.equal(player.status,'idle');
  player.toggle();assert.equal(player.enabled,false);
  player.show(clip);assert.equal(played,1);
  player.replay(clip);await Promise.resolve();assert.equal(played,2);assert.equal(player.status,'playing');
  player.replay(clip);assert.equal(player.status,'idle');
});
