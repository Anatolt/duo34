import test from 'node:test';
import assert from 'node:assert/strict';
import {storyById} from '../stories.js';
import {explanationSegments,textFor} from '../story-languages.js';
import {storyScreen,storyUiText} from '../story-ui.js';

test('Español to English hot-mic uses English story chrome and explanations',()=>{
 const story=storyById['hot-mic'];
 const state={storyProgress:{'hot-mic':{index:4,answers:{4:0}}}};
 const html=storyScreen(state,'hot-mic',{source:'es',target:'en',ui:'en',pedagogy:'en'});

 for(const text of [
  'Still on the Call','Work call, 09:07','Study','Translation','Interface','Explanations','Autoplay is on',
  'YOUR LINE · ZOYA','Not quite. Here is how the scene continues:',
  'Why this works:','Tu micrófono sigue encendido.','Continue'
 ])assert.ok(html.includes(text),text);

 for(const text of [
  'Микрофон, сука','Рабочий созвон','Читать','Перевод: English',
  'Автоозвучка включена','ТВОЯ РЕПЛИКА','Не совсем. Вот как продолжается сцена:',
  'микрофон включён','Продолжить'
 ])assert.ok(!html.includes(text),text);

 assert.equal(textFor(story,'title','en'),'Still on the Call');
 assert.deepEqual(explanationSegments(story.nodes[4],'es','en').map(x=>x.role),['pedagogy','study-quote','pedagogy','pedagogy-gloss','pedagogy']);
 assert.equal(explanationSegments(story.nodes[4],'es','en')[1].text,'Tu micrófono sigue encendido.');
 assert.equal(storyUiText('en').autoOff,'Autoplay is off');
});
