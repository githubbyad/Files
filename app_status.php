<?php
header("Access-Control-Allow-Origin: *");
ini_set("default_socket_timeout", "05");
set_time_limit(5);
error_reporting(0);

$sites = array("bulletlink.one", "bulletlink.systems", "bulletlink.com", "cnn.com", "facebook.com", "bulletlink.xyz");

shuffle($sites);
foreach ($sites as $value) {
    $path = 'https://' . $value . '/status.htm';
    $f = fopen($path, "r");
    $r = fread($f, 10);
    fclose($f);
    if (strlen($r) > 1) {
        echo 'https://' . $value . '/';
        exit();
    }
}
?>
