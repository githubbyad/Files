<?php
// Reset Counter
if (isset($_GET['reset'])) {
    parse_str($_SERVER['QUERY_STRING'], $params);
    $path = 'hitcounter.txt';
    $file = fopen($path, 'w');
    $reset = $params['reset'];
    fwrite($file, $reset);
    fclose($file);
    echo "<br><br><center><h2><font face=verdana color='green'><b>Hit Counter Reset Successfully.<br><br></b></font></h2><CENTER><form method='post' action='/' id=form2 name=form2><input style='cursor: pointer;background: green;border-width: 0;color: white;padding: 0 20px;line-height: 30px;font-weight: bold;border-radius: 5px;box-shadow: 0 4px 5px rgba(0,0,0,0.3);' type='submit' value='    OK    ' id='submit2' name='submit2'> </form></CENTER>";
    exit;
} else {
    // Prevent Direct Page Access
    if (!isset($_SERVER['HTTP_REFERER'])) {
        // Page Not Found
        echo "<script>console.log('Hit Counter Error...');</script>";
        exit;
    }
    // Add correct path to your countlog.txt file.
    $path = 'hitcounter.txt';

    // Opens countlog.txt to read the number of hits.
    $file  = fopen($path, 'r');
    $count = fgets($file, 1000);
    fclose($file);

    // Update the count.
    $count = abs(intval($count)) + 1;

    // Output the updated count.
    //echo "You are Visitor: {$count}\n";
    $hc = "{$count}";
    $myHC = '{ "hc":"' . $hc . '"}';
    echo "getHC(" . $myHC . ");";

    // Opens countlog.txt to change new hit number.
    $file = fopen($path, 'w');
    fwrite($file, $count);
    fclose($file);
}
?>
