<?php
declare(strict_types=1);
header('Cache-Control: no-store');header('Content-Type: application/json');header('X-Content-Type-Options: nosniff');
if($_SERVER['REQUEST_METHOD']!=='POST'){http_response_code(405);header('Allow: POST');exit('{"error":"method"}');}
if(isset($_SERVER['HTTP_ORIGIN'])&&!in_array($_SERVER['HTTP_ORIGIN'],['https://anatolt.ru','https://www.anatolt.ru'],true)){http_response_code(403);exit('{"error":"origin"}');}
if(!str_starts_with(strtolower($_SERVER['CONTENT_TYPE']??''),'application/json')){http_response_code(415);exit('{"error":"content type"}');}
$raw=file_get_contents('php://input',false,null,0,32769);if(strlen($raw)>32768){http_response_code(413);exit('{"error":"size"}');}
try{
 require '/home/tolik/web/anatolt.ru/private/duo34-analytics/common.php';
 $input=json_decode($raw,true,32,JSON_THROW_ON_ERROR);if(!is_array($input))throw new InvalidArgumentException('Invalid input');collect($input);echo '{"ok":true}';
}catch(InvalidArgumentException|JsonException $e){http_response_code(400);echo '{"error":"invalid event"}';}
catch(Throwable $e){error_log('Duo34 analytics storage failure');http_response_code(503);echo '{"error":"temporarily unavailable"}';}
