<?php
//header("Access-Control-Allow-Origin: *");
if (!isset($_SERVER['HTTP_REFERER'])) {
    // Page Not Found
    echo "<script>console.log('Hit Counter Error...');</script>";
    exit;
}
// Add correct path to your hitcounter.txt file.
$path = 'hitcounter.txt';

// Opens hitcounter.txt to read the number of hits.
$file  = fopen($path, 'r');
$count = fgets($file, 1000);
fclose($file);

// Update the count.
$count = abs(intval($count)) + 1;

// Output the updated count.
$hc = "{$count}";
$myHC = '{ "hc":"' . $hc . '"}';
echo "getHC(" . $myHC . ");";

// Opens hitcounter.txt to change new hit number.
$file = fopen($path, 'w');
fwrite($file, $count);
fclose($file);
?>
