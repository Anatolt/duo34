import test from 'node:test';
import assert from 'node:assert/strict';
import {stories,storyById} from '../stories.js';
import {availableStories,endingText,explanationSegments,optionText,promptText,storyLanguages,storySupports,textFor,validateStoryLocale} from '../story-languages.js';
import {parseRoute,storyHref} from '../story-routes.js';
import {roadmap,storyScreen,storyUiText} from '../story-ui.js';

test('English and Japanese are explicit and complete for all nine stories',()=>{
 for(const story of stories)for(const lang of ['en','ja']){
  assert.equal(story.i18n[lang],true,`${story.id}:${lang}:advertised`);
  assert.deepEqual(validateStoryLocale(story,lang),[],`${story.id}:${lang}`);
  for(const field of ['title','subtitle','place','topic','ending'])assert.ok(story.i18n[field]?.[lang],`${story.id}:${field}:${lang}`);
  assert.equal(endingText(story,lang),story.i18n.ending[lang]);
  for(const [index,node] of story.nodes.entries()){
   if(node.type==='scene'||node.type==='line')assert.equal(textFor(node,'line',lang),node.i18n.line[lang],`${story.id}:${index}:line:${lang}`);
   if(node.type==='choice'){
    assert.equal(promptText(node,lang),node.i18n.prompt[lang],`${story.id}:${index}:prompt:${lang}`);
    assert.deepEqual(node.options.map((_x,option)=>optionText(node,option,lang)),node.i18n.options[lang],`${story.id}:${index}:options:${lang}`);
   }
  }
 }
});

test('Missing exact locale data removes support and never falls back to another language',()=>{
 const story=structuredClone(storyById['hot-mic']);
 delete story.nodes[1].i18n.line.ja;
 assert.equal(textFor(story.nodes[1],'line','ja'),'');
 assert.equal(storySupports(story,'ja'),false);
 assert.deepEqual(availableStories([story],'ja','en'),[]);
 assert.ok(textFor(story.nodes[1],'line','en'));
 assert.ok(textFor(story.nodes[1],'line','ru'));
});

test('Every valid directed language pair has a route and every invalid pair is rejected',()=>{
 for(const story of stories)for(const source of storyLanguages)for(const target of storyLanguages){
  const hash=storyHref(story.id,{source:source.code,target:target.code});
  const valid=source.code!==target.code&&storySupports(story,source.code)&&storySupports(story,target.code);
  const parsed=parseRoute(hash,storyById);
  if(valid)assert.deepEqual(parsed,{view:'story',id:story.id,langs:{source:source.code,target:target.code},hash,explicitPair:true},hash);
  else assert.equal(parsed.view,'stories',hash);
 }
});

test('Language names are text-only and Japanese UI and pedagogy do not fall back to Russian',()=>{
 const flag=/[\u{1F1E6}-\u{1F1FF}]{2}|🏳|🏴/u;
 for(const language of storyLanguages){assert.ok(language.label);assert.ok(language.native);assert.doesNotMatch(language.label+language.native,flag);}
 const ui=storyUiText('ja');assert.equal(ui.translation,'翻訳');assert.equal(ui.explanations,'解説');
 const html=roadmap({storyCompleted:{},storyProgress:{}},{study:'en',translation:'ja',ui:'ja',pedagogy:'ja'});
 for(const text of ['学習テキスト','翻訳','インターフェース','解説','日本語'])assert.ok(html.includes(text),text);
 for(const text of ['Изучаемый текст','Перевод','Интерфейс','Пояснения'])assert.ok(!html.includes(text),text);
 const story=storyById['hot-mic'],screen=storyScreen({storyProgress:{[story.id]:{index:4,answers:{4:1}}}},story.id,{study:'en',translation:'ja',ui:'ja',pedagogy:'ja'});
 assert.ok(screen.includes('なぜこの表現が合うのか：'));
 assert.ok(screen.includes('この台詞は状況に合っています。'));
 const segments=explanationSegments(story.nodes[4],'en','ja');
 assert.deepEqual(segments.map(x=>x.lang),['ja','en','ja','ja','ja']);
});
