import {writeFile} from 'node:fs/promises';
import {stories} from '../stories.js';
import {endingText,optionText,promptText,textFor} from '../story-languages.js';

const endpoint='https://translate.googleapis.com/translate_a/single';
const cache=new Map();

async function translate(text,attempt=0){
 if(cache.has(text))return cache.get(text);
 const url=new URL(endpoint);
 for(const [key,value] of Object.entries({client:'gtx',sl:'en',tl:'ja',dt:'t',q:text}))url.searchParams.set(key,value);
 try{
  const response=await fetch(url,{headers:{'user-agent':'Duo34 locale preparation/1.0'}});
  if(!response.ok)throw new Error(`HTTP ${response.status}`);
  const body=await response.json(),translated=body[0].map(part=>part[0]).join('').trim();
  if(!translated)throw new Error('Empty translation');
  cache.set(text,translated);
  return translated;
 }catch(error){
  if(attempt>=4)throw new Error(`Could not translate ${JSON.stringify(text)}: ${error.message}`);
  await new Promise(resolve=>setTimeout(resolve,500*2**attempt));
  return translate(text,attempt+1);
 }
}

async function mapLimit(items,limit,fn){
 const result=new Array(items.length);let cursor=0;
 await Promise.all(Array.from({length:Math.min(limit,items.length)},async()=>{
  while(cursor<items.length){const index=cursor++;result[index]=await fn(items[index],index);}
 }));
 return result;
}

const records=[];
for(const story of stories){
 for(const field of ['title','subtitle','place','topic'])records.push({story:story.id,kind:'story',field,text:textFor(story,field,'en')});
 records.push({story:story.id,kind:'story',field:'ending',text:endingText(story,'en')});
 for(const [index,node] of story.nodes.entries()){
  if(node.type==='scene'||node.type==='line')records.push({story:story.id,kind:'node',index,field:'line',text:textFor(node,'line','en')});
  if(node.type==='choice'){
   records.push({story:story.id,kind:'node',index,field:'prompt',text:promptText(node,'en')});
   for(let option=0;option<node.options.length;option++)records.push({story:story.id,kind:'option',index,option,text:optionText(node,option,'en')});
  }
 }
}
if(records.some(record=>!record.text))throw new Error('English source locale is incomplete');

const translated=await mapLimit(records,8,async record=>({...record,translation:await translate(record.text)}));
const output={};
for(const record of translated){
 const story=output[record.story]??={story:{},nodes:{}};
 if(record.kind==='story')story.story[record.field]=record.translation;
 else{
  const node=story.nodes[record.index]??={};
  if(record.kind==='option')(node.options??=[])[record.option]=record.translation;
  else node[record.field]=record.translation;
 }
}
const target=new URL('../story-content-ja.generated.js',import.meta.url);
await writeFile(target,`// Generated from the explicit English locale by ops/generate-ja-locales.mjs.\n// Review and edit this static data before publishing; runtime translation is never used.\nexport const japaneseStoryLocales=${JSON.stringify(output,null,2)};\n`);
console.log(`Generated ${records.length} Japanese locale strings across ${stories.length} stories.`);
