<?php
ini_set('memory_limit', '-1');
require 'myfunctions.php';
if ($_POST) {
    echo $IPs;
    foreach ($_FILES as $field => $file) {
        $file_name = $_POST["fname"]; // filename
        $mydomain = $_POST["hname"]; // domain
        $IPs = $_POST["ips"]; // Get IPs
        $file_temp_name = $file["tmp_name"];
        $file_type = $file["type"];
        $file_size = $file['size'];
        $file_error = $file["error"];
        $url = 'C:upload/' . $file_name;
        if (move_uploaded_file($file_temp_name, $url)) {
            move_uploaded_file_to_remote($mydomain, $file_name, $IPs);
?>Yes<?php
        }
    }
}
        ?>