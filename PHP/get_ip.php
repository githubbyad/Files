<?php
$ip = file_get_contents('https://api.ipify.org');
$myJSON = '{ "ip":"' . $ip . '"}';
echo "myFunc(" . $myJSON . ");";
?>
