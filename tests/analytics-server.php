<?php
require __DIR__.'/../common.php';
function check($v,$message){if(!$v)throw new Exception($message);}
$visitor='00000000-0000-4000-8000-000000000001';$attempt='00000000-0000-4000-8000-000000000002';
$key=array_key_first(catalog());[$kind,$id]=explode(':',$key,2);
function event($n,$type,$extra=[]){return ['event'=>sprintf('00000000-0000-4000-8000-%012d',$n),'type'=>$type]+$extra;}
$base=['kind'=>$kind,'id'=>$id,'attempt'=>$attempt];
$batch=['visitor'=>$visitor,'events'=>[event(3,'visit'),event(4,'start',$base),event(5,'finish',$base+['score'=>2]),event(6,'legacy',['kind'=>$kind,'id'=>$id,'score'=>1])]];
collect($batch);collect($batch);$s=summary();check(count($s['users'])===1,'one visitor');check($s['visits']===1,'dedup visits');check($s['rows'][$key]['finishes']===1,'dedup finish');check($s['rows'][$key]['known']===1,'union legacy and observed');check($s['users'][0]['lessons']===1,'per-user lessons');
collect(['visitor'=>$visitor,'events'=>[event(7,'finish',$base+['score'=>2])]]);check(summary()['rows'][$key]['finishes']===1,'attempt dedup');
try{collect(['visitor'=>'../../attack','events'=>$batch['events']]);throw new Exception('accepted traversal');}catch(InvalidArgumentException $e){}
try{collect(['visitor'=>$visitor,'events'=>[event(8,'finish',$base+['score'=>999])]]);throw new Exception('accepted score');}catch(InvalidArgumentException $e){}
try{collect(['visitor'=>$visitor,'events'=>[event(9,'start',['kind'=>'story','id'=>'bad','attempt'=>$attempt])]]);throw new Exception('accepted unknown id');}catch(InvalidArgumentException $e){}
echo "PASS: dedup, repeat attempts, legacy union, per-user counts, invalid input\n";
