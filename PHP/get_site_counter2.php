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

// Opens hitcounter.txt to read the number of hits.
$url = $Site . "/" . $my_file;
$file  = fopen($url, 'r');
$hc = fgets($file, 100);
$myArray = explode('|', $hc);
$count = $myArray[0];
$IPs = $myArray[1];
fclose($file);

// Reset the count
if (isset($_GET['reset'])) {
    $count = $_GET['reset'];
    $FileContent = $count . "|" . $IPs;
    echo "<br><br><center><h2><font face=verdana color='green'><b>Hit Counter Reset Successfully.<br><br></b></font></h2><CENTER><form method='post' action='/' id=form2 name=form2><input style='cursor: pointer;background: green;border-width: 0;color: white;padding: 0 20px;line-height: 30px;font-weight: bold;border-radius: 5px;box-shadow: 0 4px 5px rgba(0,0,0,0.3);' type='submit' value='    OK    ' id='submit2' name='submit2'> </form></CENTER><style>body {color: white;}</style>";
} 
else {
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
}


send_files_content_to_remote_servers ($Site, $my_file, $FileContent, $IPs, "No");

$myHC = '{ "hc":"' . $count . '"}';
echo "getHC(" . $myHC . ");";

?>
