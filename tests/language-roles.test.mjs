import test from 'node:test';
import assert from 'node:assert/strict';
import {stories,storyById} from '../stories.js';
import {explanationSegments,normalizeStoryLangs,optionText,promptText,storyLanguages,storySupports,textFor,validateStoryLocale} from '../story-languages.js';
import {roadmap,storyScreen} from '../story-ui.js';

test('Every advertised story locale is complete without cross-language fallback',()=>{
 for(const story of stories)for(const {code} of storyLanguages){
  if(storySupports(story,code))assert.deepEqual(validateStoryLocale(story,code),[],`${story.id}:${code}`);
 }
 const missing={i18n:{line:{ru:'не тот язык'}}};
 assert.equal(textFor(missing,'line','en'),'');
 assert.equal(promptText({promptRu:'не тот язык'},'en'),'');
 assert.equal(optionText({optionsRu:['не тот язык']},0,'en'),'');
});

test('Removing one exact locale value fails validation instead of falling back',()=>{
 const original=storyById['hot-mic'],story=structuredClone(original);
 delete story.nodes[1].i18n.line.uk;
 assert.ok(validateStoryLocale(story,'uk').includes('1.line'));
 assert.equal(textFor(story.nodes[1],'line','uk'),'');
});

test('Legacy source/target preferences migrate into four independent roles',()=>{
 assert.deepEqual(normalizeStoryLangs(),{study:'ru',translation:'en',ui:'ru',pedagogy:'ru'});
 assert.deepEqual(normalizeStoryLangs({study:'en',translation:'ru',ui:'es',pedagogy:'zh'}),{study:'en',translation:'ru',ui:'es',pedagogy:'zh'});
 assert.deepEqual(normalizeStoryLangs({source:'zh',target:'uk'}),{study:'zh',translation:'uk',ui:'ru',pedagogy:'ru'});
 assert.deepEqual(normalizeStoryLangs({study:'zh',translation:'uk',ui:'es',pedagogy:'en'}),{study:'zh',translation:'uk',ui:'es',pedagogy:'en'});
});

test('Chinese study with Ukrainian translation has Ukrainian UI and no Russian fallback',()=>{
 const story=storyById['dad-dating'];
 const state={storyProgress:{[story.id]:{index:4,answers:{4:2}}}};
 const html=storyScreen(state,story.id,{study:'zh',translation:'uk',ui:'uk',pedagogy:'uk'});
 for(const text of ['Навчальний текст','Переклад','Інтерфейс','Пояснення','Так. Сцена триває.','Продовжити','Чому це підходить:'])assert.ok(html.includes(text),text);
 for(const text of ['Читать','Перевод','Интерфейс','Пояснения','Да. Сцена продолжается.','Продолжить','Почему это подходит:'])assert.ok(!html.includes(text),text);
 assert.match(html,/lang="zh" data-language-role="study-quote">这里听起来可能带有性暗示，不只是父亲。/);
 assert.match(html,/data-study-lang="zh" data-translation-lang="uk" data-ui-lang="uk" data-pedagogy-lang="uk"/);
});

test('All four roles can be selected independently',()=>{
 const story=storyById['hot-mic'];
 const state={storyProgress:{[story.id]:{index:4,answers:{4:1}}}};
 const html=storyScreen(state,story.id,{study:'zh',translation:'uk',ui:'es',pedagogy:'en'});
 assert.ok(html.includes('TU FRASE'));
 assert.ok(html.includes('Why this works:'));
 assert.match(html,/lang="zh" data-language-role="study-quote">你的麦克风还开着。/);
 assert.match(html,/lang="uk" data-language-role="translation">Твій мікрофон усе ще ввімкнений\./);
});

test('Roadmap UI locale is independent from content pair',()=>{
 const html=roadmap({storyCompleted:{},storyProgress:{}},{study:'zh',translation:'uk',ui:'es',pedagogy:'en'});
 assert.ok(html.includes('Texto de estudio'));
 assert.ok(html.includes('Traducción'));
 assert.ok(!html.includes('Конец выбранной дорожки'));
});

test('Every available choice produces a role-safe structured explanation',()=>{
 for(const story of stories)for(const study of storyLanguages.map(x=>x.code))for(const pedagogy of storyLanguages.map(x=>x.code)){
  if(!storySupports(story,study))continue;
  for(const node of story.nodes.filter(x=>x.type==='choice')){
   const segments=explanationSegments(node,study,pedagogy);
   const gloss=optionText(node,node.correct,pedagogy);
   assert.deepEqual(segments.map(x=>x.lang),gloss&&pedagogy!==study?[pedagogy,study,pedagogy,pedagogy,pedagogy]:[pedagogy,study,pedagogy]);
   assert.deepEqual(segments.map(x=>x.role),gloss&&pedagogy!==study?['pedagogy','study-quote','pedagogy','pedagogy-gloss','pedagogy']:['pedagogy','study-quote','pedagogy']);
   assert.ok(segments.every(x=>x.text));
  }
 }
});
