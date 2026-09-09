<?php
declare(strict_types=1);
function analytics_dir(): string { return PHP_SAPI === 'cli' && getenv('DUO34_TEST_DIR') ? getenv('DUO34_TEST_DIR') : '/home/tolik/web/anatolt.ru/private/duo34-analytics'; }
function catalog(): array { return json_decode(file_get_contents(__DIR__.'/catalog.json'), true, 512, JSON_THROW_ON_ERROR); }
function valid_uuid($s): bool { return is_string($s) && preg_match('/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/D', $s) === 1; }
function validate_batch(array $input): array {
 if (!valid_uuid($input['visitor'] ?? null) || !is_array($input['events'] ?? null) || count($input['events'])<1 || count($input['events'])>32) throw new InvalidArgumentException('Invalid batch');
 $catalog=catalog(); $events=[];
 foreach($input['events'] as $e){
  if(!is_array($e)||!valid_uuid($e['event']??null)||!in_array($e['type']??null,['visit','start','finish','legacy'],true))throw new InvalidArgumentException('Invalid event');
  $clean=['event'=>$e['event'],'type'=>$e['type']];
  if($e['type']!=='visit'){
   if(!is_string($e['kind']??null)||!is_string($e['id']??null))throw new InvalidArgumentException('Invalid item');
   $key=$e['kind'].':'.$e['id'];if(!isset($catalog[$key]))throw new InvalidArgumentException('Unknown item');
   $clean['key']=$key;
   if(in_array($e['type'],['start','finish'],true)){
    if(!valid_uuid($e['attempt']??null))throw new InvalidArgumentException('Invalid attempt');
    $clean['attempt']=$e['attempt'];
   }
   if(in_array($e['type'],['finish','legacy'],true)){
    if(!is_int($e['score']??null)||$e['score']<0||$e['score']>$catalog[$key]['total'])throw new InvalidArgumentException('Invalid score');
    $clean['score']=$e['score'];
   }
   if($e['type']==='start')$clean['resumed']=($e['resumed']??false)===true;
  }
  $events[]=$clean;
 }
 return $events;
}
function collect(array $input): void {
 $events=validate_batch($input);$dir=analytics_dir().'/visitors';
 if(!is_dir($dir)&&!mkdir($dir,0700,true)&&!is_dir($dir))throw new RuntimeException('Storage unavailable');
 $path=$dir.'/'.$input['visitor'].'.json';$f=fopen($path.'.lock','c+');if(!$f)throw new RuntimeException('Storage unavailable');
 try{
  if(!flock($f,LOCK_EX))throw new RuntimeException('Lock failed');
  $raw=is_file($path)?file_get_contents($path):'';$d=$raw?json_decode($raw,true,512,JSON_THROW_ON_ERROR):['first'=>gmdate('c'),'last'=>gmdate('c'),'seen'=>[],'attempts'=>[],'legacy'=>[],'visits'=>0];
  if(strlen($raw)>4*1024*1024)throw new RuntimeException('Visitor storage limit');
  $now=gmdate('c');
  foreach($events as $e){
   if(isset($d['seen'][$e['event']]))continue;
   if($e['type']==='visit')$d['visits']++;
   elseif($e['type']==='legacy')$d['legacy'][$e['key']]??=['score'=>$e['score'],'imported'=>$now];
   else{
    $id=$e['attempt'];$a=$d['attempts'][$id]??['key'=>$e['key']];
    if($a['key']!==$e['key'])throw new InvalidArgumentException('Attempt mismatch');
    if($e['type']==='start'){$a['started']??=$now;$a['resumed']??=$e['resumed'];}
    else{$a['finished']??=$now;$a['score']??=$e['score'];}
    $d['attempts'][$id]=$a;
   }
   $d['seen'][$e['event']]=true;$d['last']=$now;
  }
  // Session and legacy keys retain permanent deduplication; recent visit retries are bounded.
  if(count($d['seen'])>4000)$d['seen']=array_slice($d['seen'],-4000,null,true);
  $json=json_encode($d,JSON_THROW_ON_ERROR|JSON_UNESCAPED_UNICODE);
  $tmp=$path.'.tmp';if(file_put_contents($tmp,$json)!==strlen($json)||!rename($tmp,$path))throw new RuntimeException('Write failed');chmod($path,0600);
 }finally{flock($f,LOCK_UN);fclose($f);}
}
function summary(): array {
 $rows=[];foreach(catalog() as $key=>$c)$rows[$key]=$c+['starts'=>0,'finishes'=>0,'learners'=>0,'legacy'=>0,'known'=>0,'resumed'=>0,'matched'=>0];
 $users=[];$visits=0;
 foreach(glob(analytics_dir().'/visitors/*.json')?:[] as $path){
  $f=fopen($path,'r');if(!$f)continue;flock($f,LOCK_SH);$d=json_decode(stream_get_contents($f),true);flock($f,LOCK_UN);fclose($f);if(!$d)continue;
  $done=[];$legacy=[];$starts=0;$finishes=0;
  foreach($d['attempts'] as $a){if(!isset($rows[$a['key']]))continue;$r=&$rows[$a['key']];
   if(isset($a['started'])){$r['starts']++;$starts++;if($a['resumed']??false)$r['resumed']++;}
   if(isset($a['finished'])){$r['finishes']++;$finishes++;$done[$a['key']]=true;if(isset($a['started']))$r['matched']++;}unset($r);
  }
  foreach($d['legacy'] as $key=>$v){if(isset($rows[$key])){$rows[$key]['legacy']++;$legacy[$key]=true;}}
  foreach($done as $key=>$v)$rows[$key]['learners']++;
  foreach($done+$legacy as $key=>$v)$rows[$key]['known']++;
  $known=$done+$legacy;
  $users[]=['id'=>basename($path,'.json'),'last'=>$d['last'],'starts'=>$starts,'finishes'=>$finishes,'lessons'=>count(array_filter(array_keys($known),fn($k)=>str_starts_with($k,'lesson:'))),'stories'=>count(array_filter(array_keys($known),fn($k)=>str_starts_with($k,'story:'))),'legacy'=>count($legacy)];$visits+=$d['visits'];
 }
 usort($users,fn($a,$b)=>strcmp($b['last'],$a['last']));return ['rows'=>$rows,'users'=>$users,'visits'=>$visits];
}
