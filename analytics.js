// Learning always works even when storage or the analytics endpoint is unavailable.
export function createAnalytics({storage,send,uuid,now=()=>Date.now(),schedule=setTimeout}={}) {
 const key='duo34-analytics-v1';
 let data; try { data=JSON.parse(storage.getItem(key)); } catch {}
 if(!data||data.version!==1||!Array.isArray(data.queue)) data={version:1,visitor:uuid(),queue:[],attempts:{},imported:{}};
 data.attempts??={};data.imported??={};
 let busy=false,timer=null;
 const persist=()=>{try{storage.setItem(key,JSON.stringify(data));}catch{}};
 const queue=event=>{data.queue.push({...event,event:uuid()});persist();};
 async function flush(){
  if(busy||!data.queue.length)return;
  busy=true; const batch=data.queue.slice(0,32);
  try{if(await send({visitor:data.visitor,events:batch})){const ids=new Set(batch.map(e=>e.event));data.queue=data.queue.filter(e=>!ids.has(e.event));persist();}}catch{}finally{busy=false;if(data.queue.length&&!timer)timer=schedule(()=>{timer=null;void flush();},10000);}
 }
 function begin(kind,id,resumed=false){
  const key=kind+':'+id;
  if(!data.attempts[key]){const attempt=uuid();data.attempts[key]=attempt;queue({type:'start',kind,id,attempt,resumed});}
  void flush();
 }
 function finish(kind,id,score){
  const key=kind+':'+id;
  // A session that started before analytics still gets a matched resumed start.
  if(!data.attempts[key])begin(kind,id,true);
  queue({type:'finish',kind,id,attempt:data.attempts[key],score});delete data.attempts[key];persist();void flush();
 }
 function init(state){
  for(const [kind,completed] of [['lesson',state.completed],['story',state.storyCompleted]])for(const id of Object.keys(completed||{})){
   const key=kind+':'+id;if(!data.imported[key]){data.imported[key]=true;queue({type:'legacy',kind,id,score:completed[id]});}
  }
  // Mark future completions as observed so reloads do not reclassify them as legacy.
  queue({type:'visit'}); void flush();
 }
 function completed(kind,id,score){data.imported[kind+':'+id]=true;finish(kind,id,score);}
 persist();return {init,begin,finish:completed,flush};
}
export function browserAnalytics(state){
 try{
  const analytics=createAnalytics({storage:localStorage,uuid:()=>crypto.randomUUID(),send:async payload=>(await fetch('./analytics.php',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload),keepalive:true})).ok});
  analytics.init(state);window.addEventListener('online',analytics.flush);document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')analytics.flush();});return analytics;
 }catch{return {begin(){},finish(){},flush(){}};}
}
