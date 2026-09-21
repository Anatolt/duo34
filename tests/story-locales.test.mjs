import {test} from 'node:test';
import assert from 'node:assert/strict';
import {stories,storyById} from '../stories.js';
import {availableStories,endingText,normalizeStoryLangs,optionText,promptText,storySupports,textFor,validateStoryLocale} from '../story-languages.js';
import {parseRoute,storyHref} from '../story-routes.js';
import {supportsStoryAudio} from '../story-audio.js';
import {storyScreen} from '../story-ui.js';

const added=['return-hoodie','dad','change-mind','compliment','netflix','translator'];
const spanishText=(story)=>[
  ...['title','subtitle','place','topic','ending'].map(field=>[field,field==='ending'?endingText(story,'es'):textFor(story,field,'es'),field==='ending'?endingText(story,'en'):textFor(story,field,'en')]),
  ...story.nodes.flatMap((node,index)=>node.type==='choice'
    ? [[`${index}.prompt`,promptText(node,'es'),promptText(node,'en')],...node.options.map((_,answer)=>[`${index}.option.${answer}`,optionText(node,answer,'es'),optionText(node,answer,'en')])]
    : [[`${index}.line`,textFor(node,'line','es'),textFor(node,'line','en')]])
];

test('all nine stories are complete and directly routable in both Spanish-English directions',()=>{
  const ids=stories.map(story=>story.id);
  for(const [source,target] of [['es','en'],['en','es']]){
    assert.deepEqual(availableStories(stories,source,target).map(story=>story.id),ids);
    for(const id of ids){
      const route=parseRoute(storyHref(id,{source,target}),storyById);
      assert.equal(route.view,'story',`${id} ${source}/${target}`);
      assert.equal(route.id,id);
      assert.deepEqual(route.langs,{source,target});
      assert.deepEqual(validateStoryLocale(storyById[id],source),[]);
      assert.deepEqual(validateStoryLocale(storyById[id],target),[]);
    }
  }
});

test('six new Spanish locales contain Spanish text in every required field',()=>{
  for(const id of added){
    const story=storyById[id];
    assert.equal(storySupports(story,'es'),true,id);
    assert.deepEqual(validateStoryLocale(story,'es'),[],id);
    for(const [field,es,en] of spanishText(story)){
      assert.ok(es?.trim(),`${id}:${field} is empty`);
      assert.doesNotMatch(es,/[\u0400-\u04ff\u3400-\u9fff]/u,`${id}:${field} uses another script`);
      if(field!=='place')assert.notEqual(es,en,`${id}:${field} silently retained English`);
    }
    for(const [index,node] of story.nodes.entries())if(node.type==='choice'){
      assert.equal(node.i18n.options.es.length,node.options.length,`${id}:${index}`);
      assert.equal(new Set(node.i18n.options.es).size,node.options.length,`${id}:${index}`);
      assert.ok(node.i18n.note.es?.trim(),`${id}:${index} explanation is empty`);
    }
  }
});

test('Spanish story availability does not change independent interface or explanation languages',()=>{
  const langs=normalizeStoryLangs({study:'es',translation:'en',ui:'uk',pedagogy:'ja'});
  assert.deepEqual(langs,{study:'es',translation:'en',ui:'uk',pedagogy:'ja'});
  assert.equal(availableStories(stories,langs.study,langs.translation).length,9);
});

test('unvoiced new Spanish stories remain readable without unusable audio controls',()=>{
  for(const id of added){
    const story=storyById[id];
    assert.equal(supportsStoryAudio(story,'es'),false,id);
    const html=storyScreen({storyProgress:{[id]:{index:1,answers:{}}}},id,{source:'es',target:'en',ui:'es',pedagogy:'es'});
    assert.match(html,/data-study-lang="es"/);
    assert.doesNotMatch(html,/class="audio-controls"/);
    assert.doesNotMatch(html,/data-clip-key="es:/);
  }
});
