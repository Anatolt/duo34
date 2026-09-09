import {courseData} from './content.generated.js';
export const {units,lessons}=courseData;
export const words=lessons.flatMap(l=>l.words);
export const questions=Object.fromEntries(lessons.map(l=>[l.id,l.words.flatMap(w=>[
 {id:w.id+'-meaning',wordId:w.id,type:'meaning',prompt:'What does this mean?',promptRu:'Что это значит?',choiceLabels:Object.fromEntries([w.meaning,...w.wrongMeanings].map((c,i)=>[c,{en:w.meaningOptionsEn[i],ru:c}])),phrase:w.phrase,choices:[w.meaning,...w.wrongMeanings],correct:w.meaning,explanation:w.explanation},
 {id:w.id+'-context',wordId:w.id,type:'context',prompt:w.situationEn,promptRu:w.situation,choiceLabels:Object.fromEntries([w.answer,...w.wrongAnswers].map((c,i)=>[c,{en:w.contextOptionsEn[i],ru:w.contextOptionsRu[i]}])),phrase:'',choices:[w.answer,...w.wrongAnswers],correct:w.answer,explanation:w.explanation}
])]));
export const allQuestions=Object.values(questions).flat();
