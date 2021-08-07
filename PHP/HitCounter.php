<?php
//header("Access-Control-Allow-Origin: *");
if (!isset($_SERVER['HTTP_REFERER'])) {
    // Page Not Found
    echo "<script>console.log('Hit Counter Error...');</script>";
    exit;
}
// Add correct path to your countlog.txt file.
$path = 'countlog.txt';

// Opens countlog.txt to read the number of hits.
$file  = fopen($path, 'r');
$count = fgets($file, 1000);
fclose($file);

// Update the count.
$count = number_format(abs(intval(str_replace(',', '', $count))) + 1);

// Output the updated count.
//echo "You are Visitor: {$count}\n";
$hc = "{$count}";
$myHC = '{ "hc":"' . $hc . '"}';
echo "getHC(" . $myHC . ");";

// Opens countlog.txt to change new hit number.
$file = fopen($path, 'w');
fwrite($file, $count);
fclose($file);
?>
