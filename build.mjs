import {mkdir,copyFile} from 'node:fs/promises';
import {lessons,allQuestions} from './course.js';
if(lessons.length!==9||allQuestions.length!==72)throw Error('Incomplete course');
await mkdir('dist',{recursive:true});
for(const f of ['index.html','style.css','app.js','engine.js','course.js','icon.svg'])await copyFile(f,`dist/${f}`);
console.log('Built 9 lessons / 72 questions / 36 expressions.');
