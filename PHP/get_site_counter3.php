<?php

ini_set('memory_limit', '-1');

require 'myfunctions.php';


////////////////////////////////////////////////////////////////////////////////////////?


$Site = $_GET['site'];
$SiteO = $Site;
$Pos = strpos($Site,"https://");
if ($Pos == 0) {
 $Site = "https://" . $Site;
} 

$my_file = "hitcounter.txt";

// Opens hitcounter.txt to read the number of hits and IPs.
$url = $Site . "/" . $my_file;
$file  = fopen($url, 'r');
$hc = fgets($file, 100);
$myArray = explode('|', $hc);
$count = $myArray[0];
$IPs = $myArray[1];
fclose($file);


// Check For Direct Visit
if (!isset($_SERVER['HTTP_REFERER'])) {
    echo "<script>console.log('Error');</script>";
    exit;
}
else {
    // Update the count.
    $count = abs(intval($count)) + 1;
    $FileContent = $count . "|" . $IPs;
}

send_files_content_to_remote_servers ($Site, $my_file, $FileContent, $IPs, "No");

$myHC = '{ "hc":"' . $count . '"}';
echo "getHC(" . $myHC . ");";

?>
