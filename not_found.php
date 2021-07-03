<?php

$ClientUrl = strtolower("https://" . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']);
$HttpHost = 'https://' . strtolower($_SERVER['HTTP_HOST']);

if (strpos($ClientUrl,"/inv10.asp") > 0) {
header('Location: ' . "https://bulletlink.one" . $_SERVER['REQUEST_URI'] );
}
if (  ($ClientUrl == $HttpHost . '/admin') or ($ClientUrl == $HttpHost . '/login') or ($ClientUrl == $HttpHost . '/login.asp') or ($ClientUrl == $HttpHost . '/login.asp?') or ($ClientUrl == $HttpHost . '/sign') or ($ClientUrl == $HttpHost . '/signin')  ) { 
 header('Location: ' . $HttpHost . '/admin.php?' . $_SERVER['QUERY_STRING'] );
 exit();
} else { 
 echo "<center><font face = 'Verdana'><h1><br><a style='text-decoration: none;' href=/>Page Not Found</a></h1></font></center>";
}
?>
