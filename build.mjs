import {stories} from './stories.js';
import {mkdir,copyFile,readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {lessons,allQuestions} from './course.js';
import audio from './audio-manifest.js';
import {optionText,storyLanguages,storySupports,textFor,validateStoryLocale} from './story-languages.js';
import {spokenStoryLanguages,supportsStoryAudio} from './story-audio.js';
if(lessons.length!==9||allQuestions.length!==72)throw Error('Incomplete course');
if(stories.length!==9||stories.some(s=>s.nodes.filter(n=>n.type==='choice').length!==4))throw Error('Incomplete stories');
for(const story of stories)for(const {code} of storyLanguages){
  if(!storySupports(story,code))continue;
  const missing=validateStoryLocale(story,code);
  if(missing.length)throw Error(`Incomplete ${code} locale for ${story.id}: ${missing.join(', ')}`);
}
// Check the complete playable bundle, not just the JavaScript manifest.
const sources=new Set();
for(const s of stories)for(const lang of spokenStoryLanguages){
  if(!supportsStoryAudio(s,lang))continue;
  for(const [i,n] of s.nodes.entries()){
    const text=n.type==='choice'?optionText(n,n.correct,lang):textFor(n,'line',lang);
    if(!text)throw Error(`Missing ${lang} text: ${s.id}:${i}`);
    const key=lang==='en'?`${s.id}:${i}`:`${lang}:${s.id}:${i}`;
    const clip=audio.clips[key];
    const who=n.type==='scene'?'narrator':n.who;
    if(!clip&&n.type==='scene')continue;
    if(!clip||clip.text!==text||clip.who!==who)throw Error(`Missing or stale audio: ${key}`);
    const data=await readFile(clip.src);
    if(createHash('sha256').update(data).digest('hex')!==clip.sha256)throw Error(`Audio checksum mismatch: ${clip.src}`);
    sources.add(clip.src);
  }
}
await mkdir('dist/audio',{recursive:true});
for(const f of ['index.html','style.css','app.js','engine.js','course.js','icon.svg','stories.js','story-content-locales.js','story-content-es.js','story-content-ja.generated.js','story-routes.js','stories-new.js','story-engine.js','story-ui.js','story-languages.js','choice-ui.js','story-audio.js','audio-manifest.js','content.generated.js','progress.html','analytics.js','analytics.php','stats.php','REVISION',...sources])await copyFile(f,`dist/${f}`);
console.log(`Built ${stories.length} stories / ${stories.reduce((n,s)=>n+s.nodes.filter(x=>x.type==='choice').length,0)} dialogue choices + 9 training lessons; ${sources.size} audio files verified.`);
