import {stories} from './stories.js';
import {mkdir,copyFile} from 'node:fs/promises';
import {lessons,allQuestions} from './course.js';
if(lessons.length!==9||allQuestions.length!==72)throw Error('Incomplete course');
if(stories.length!==5||stories.some(s=>s.nodes.filter(n=>n.type==='choice').length!==4))throw Error('Incomplete stories');
await mkdir('dist',{recursive:true});
for(const f of ['index.html','style.css','app.js','engine.js','course.js','icon.svg','stories.js','story-engine.js','story-ui.js','choice-ui.js','story-audio.js','audio-manifest.js','content.generated.js','progress.html','analytics.js','analytics.php','stats.php'])await copyFile(f,`dist/${f}`);
console.log('Built 5 stories / 20 dialogue choices + 9 training lessons.');
