import {stories,storyById} from './stories.js';
export function hydrateStories(raw){
 const storyProgress={},storyCompleted={};
 for(const s of stories){
  const total=s.nodes.filter(n=>n.type==='choice').length,score=raw?.storyCompleted?.[s.id];
  if(Number.isInteger(score)&&score>=0&&score<=total)storyCompleted[s.id]=score;
  const p=raw?.storyProgress?.[s.id];
  if(!p||!Number.isInteger(p.index)||p.index<0||p.index>=s.nodes.length)continue;
  const answers={};let valid=true;
  for(let i=0;i<=p.index;i++){const n=s.nodes[i];if(n.type!=='choice')continue;const a=p.answers?.[i];if(a===undefined&&i===p.index)continue;if(!Number.isInteger(a)||a<0||a>=n.options.length){valid=false;break;}answers[i]=a;}
  if(valid)storyProgress[s.id]={index:p.index,answers};
 }
 return {storyProgress,storyCompleted};
}
export function beginStory(state,id){if(!storyById[id])return false;state.storyProgress??={};state.storyCompleted??={};state.storyProgress[id]??={index:0,answers:{}};return true;}
export function answerStory(state,id,value){const p=state.storyProgress?.[id],n=storyById[id]?.nodes[p?.index];if(!p||n?.type!=='choice'||p.answers[p.index]!==undefined||!Number.isInteger(value)||!n.options[value])return null;p.answers[p.index]=value;return value===n.correct;}
export function advanceStory(state,id,date=new Date()){
 const s=storyById[id],p=state.storyProgress?.[id];if(!s||!p)return null;
 if(s.nodes[p.index].type==='choice'&&p.answers[p.index]===undefined)return null;
 if(p.index<s.nodes.length-1){p.index++;return null;}
 const checks=s.nodes.map((n,i)=>({n,i})).filter(({n})=>n.type==='choice');
 const score=checks.filter(({n,i})=>p.answers[i]===n.correct).length;
 const xp=score*5+(state.storyCompleted[id]===undefined?20:0);
 state.xp+=xp;state.storyCompleted[id]=Math.max(score,state.storyCompleted[id]??0);
 const day=`${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
 if(!state.days.includes(day))state.days.push(day);
 delete state.storyProgress[id];
 return {id,score,total:checks.length,xp};
}
