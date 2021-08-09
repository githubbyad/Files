<?php

ini_set('memory_limit', '-1');

////////////////////////////////////////////////////////////////////////////////////////?

function send_files_content_to_remote_servers ($my_site, $my_file, $file_content, $IPx, $show_msg)

{

    $file_name = $my_file; 

    $data = array('file_name' => $file_name, 'file_content' => $file_content);

    $options = array(
        'http' => array(
            'header'  => "Content-type: application/x-www-form-urlencoded",
            'method'  => 'POST',
            'content' => http_build_query($data)
        )
    );


    $ExitCounter = 0;
 
    while ( strlen($IPx) > 0 and $ExitCounter == 0 ) {

     $Pos = strpos($IPx, ",");

     if ($Pos > 0) {
       $IP = substr($IPx, 0, $Pos);
       $IPx = substr($IPx, $Pos+1);

     } else {
       $ExitCounter = 1;
       $IP = $IPx;
       $IPx = "";
     }

     $url = 'http://' . $IP . '/system_create_file.php?sn=' . $my_site;
     $context = stream_context_create($options);

     $result = file_get_contents($url, false, $context);

     if ($show_msg == "Yes") {

        if ($result === FALSE) {
          echo "Error uploading files. IP: " . $IP;
        }else{
          echo ('SUCCESS');
        }
   
     }

    }

}

////////////////////////////////////////////////////////////////////////////////////////?



$Site = $_GET['site'];
$Pos = strpos($Site,"https://");
if ($Pos == 0) {
 $Site = "https://" . $Site;
} 

$IPs = "74.208.24.167,74.208.160.205";

$my_file = "hitcounter.txt";

// Opens countlog.txt to read the number of hits.
$url = $Site . "/" . $my_file;
$file  = fopen($url, 'r');
$count = fgets($file, 100);
fclose($file);

// Reset the count
if (isset($_GET['reset'])) {
    $count = $_GET['reset'];
    echo "<br><br><center><h2><font face=verdana color='green'><b>Hit Counter Reset Successfully.<br><br></b></font></h2><CENTER><form method='post' action='/' id=form2 name=form2><input style='cursor: pointer;background: green;border-width: 0;color: white;padding: 0 20px;line-height: 30px;font-weight: bold;border-radius: 5px;box-shadow: 0 4px 5px rgba(0,0,0,0.3);' type='submit' value='    OK    ' id='submit2' name='submit2'> </form></CENTER>";
} 
else {
    // Check For Direct Visit
    if (!isset($_SERVER['HTTP_REFERER'])) {
        echo "<script>console.log('Hit Counter Error...');</script>";
        exit;
    }
    else {
        // Update the count.
        $count = abs(intval($count)) + 1;
    }
}


send_files_content_to_remote_servers ($Site, $my_file, $count, $IPs, "No");

$myHC = '{ "hc":"' . $count . '"}';
echo "getHC(" . $myHC . ");";

?>
