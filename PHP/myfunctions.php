<?php

session_start(); // Start the session in PHP

require 'cf_get_access_keys.php';

// for AWS upload
require 'vendor/autoload.php';

use Aws\S3\S3Client;
use Aws\Exception\AwsException;

ini_set('max_execution_time', 300);


////////////////////////////////////////////////////////////////////////////////////////

function move_uploaded_file_to_remote($my_site, $my_file, $IPx)

{

    $my_file_x = "c:\\upload\\" . $my_file;

    send_file_to_aws($my_site, $my_file, $my_file_x); // send file to aws

    $handle = fopen($my_file_x, "rb");
    $file_content1 = fread($handle, filesize($my_file_x));
    fclose($handle);

    $my_site_x = $my_site;
    if (substr($my_site_x, -1) == "/") {
        $my_site_x = substr($my_site_x, 0, strlen($my_site_x) - 1);
    }

    $file_name1 = strtolower($my_file);

    $data = array('file_name1' => $file_name1, 'file_content1' => $file_content1);

    $options = array(
        'http' => array(
            'header'  => "Content-type: application/x-www-form-urlencoded",
            'method'  => 'POST',
            'content' => http_build_query($data)
        )
    );



    $ExitCounter = 0;

    while (strlen($IPx) > 0 and $ExitCounter == 0) {

        $Pos = strpos($IPx, ",");

        if ($Pos > 0) {
            $IP = substr($IPx, 0, $Pos);
            $IPx = substr($IPx, $Pos + 1);
        } else {
            $ExitCounter = 1;
            $IP = $IPx;
            $IPx = "";
        }

        $url = 'http://' . $IP . '/system_create_file.php?sn=' . $my_site_x;
        $context = stream_context_create($options);

        $result = file_get_contents($url, FALSE, $context);
        if ($result === FALSE) {
            echo "Error uploading files. IP: " . $IP;
        } else {
            echo ('success');

            if (file_exists($my_file_x)) {
                unlink($my_file_x);
            }
        }
    }
}

////////////////////////////////////////////////////////////////////////////////////////

function send_file_to_aws($my_site, $my_file, $my_file_x)
{

    // Check if the data was posted
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        // send post data in cookie
        $_POST['endpoint'] = $_SESSION['Account'];
        $_POST['accessKey'] = $_SESSION['AccessKey'];
        $_POST['$secretKey'] = $_SESSION['SecretKey'];
        $_POST['bucketName'] = $_SESSION['Bucket'];
        setcookie("post_data", http_build_query($_POST), time() + 3600, "/");

        $endpoint = "https://" . $_SESSION['Account'] . ".r2.cloudflarestorage.com";
        $accessKey = $_SESSION['AccessKey'];
        $secretKey = $_SESSION['SecretKey'];
        $bucketName = $_SESSION['Bucket'];

        if (strpos($my_site, $bucketName) !== false) {
            // file details
            $filePath = $my_file_x; /* from */
            $fileName = $my_file; /* to */

            // Path to the custom CA bundle file
            $caBundlePath = 'cacert.pem'; /* hard coded */

            // Create an S3Client instance with custom CA bundle
            $s3Client = new S3Client([
                'version' => 'latest',
                'region' => 'auto',
                'endpoint' => $endpoint,
                'credentials' => [
                    'key' => $accessKey,
                    'secret' => $secretKey,
                ],
                'http' => [
                    'verify' => $caBundlePath,
                ],
            ]);

            // Upload the file to Cloudflare R2
            try {
                $result = $s3Client->putObject([
                    'Bucket' => $bucketName,
                    'Key' => $fileName,
                    'SourceFile' => $filePath,
                ]);

                echo 'File uploaded successfully. ETag: ' . $result['ETag'];
            } catch (AwsException $e) {
                echo 'Error uploading file: ' . $e->getMessage();
            }
        }
    }
}

////////////////////////////////////////////////////////////////////////////////////////

function move_uploaded_file_to_remote2($my_site_folder, $my_file, $IPx)

{

    $my_file_x = "C:\\inetpub\\wwwroot\\upload\\" . $my_file;
    $handle = fopen($my_file_x, "rb");
    $file_content1 = fread($handle, filesize($my_file_x));
    fclose($handle);

    $my_site_folder_x = $my_site_folder;
    if (substr($my_site_folder_x, -1) == "/") {
        $my_site_folder_x = substr($my_site_folder_x, 0, strlen($my_site_folder_x) - 1);
    }

    $data = array('file_name1' => $my_file, 'file_content1' => $file_content1);

    $options = array(
        'http' => array(
            'header'  => "Content-type: application/x-www-form-urlencoded",
            'method'  => 'POST',
            'content' => http_build_query($data)
        )
    );



    $ExitCounter = 0;

    while (strlen($IPx) > 0 and $ExitCounter == 0) {

        $Pos = strpos($IPx, ",");

        if ($Pos > 0) {
            $IP = substr($IPx, 0, $Pos);
            $IPx = substr($IPx, $Pos + 1);
        } else {
            $ExitCounter = 1;
            $IP = $IPx;
            $IPx = "";
        }

        $url = 'http://' . $IP . '/system_create_file.php?sn=' . $my_site_folder_x;
        $context = stream_context_create($options);

        $result = file_get_contents($url, FALSE, $context);
        if ($result === FALSE) {
            echo "Error uploading files. IP: " . $IP;
        } else {
            echo ('SUCCESS');
        }
    }
}

////////////////////////////////////////////////////////////////////////////////////////

function move_uploaded_file_to_remote3($my_site, $my_folder, $my_file, $IPx, $LCase, $delete_file)

{

    $my_file_x = $my_folder . $my_file;
    $handle = fopen($my_file_x, "rb");
    $file_content1 = fread($handle, filesize($my_file_x));
    fclose($handle);

    $my_site_x = $my_site;
    if (substr($my_site_x, -1) == "/") {
        $my_site_x = substr($my_site_x, 0, strlen($my_site_x) - 1);
    }

    $file_name1 = $my_file;
    if ($LCase == TRUE) {
        $file_name1 = strtolower($my_file);
    }

    $data = array('file_name1' => $file_name1, 'file_content1' => $file_content1);

    $options = array(
        'http' => array(
            'header'  => "Content-type: application/x-www-form-urlencoded",
            'method'  => 'POST',
            'content' => http_build_query($data)
        )
    );



    $ExitCounter = 0;
    $LastIP = false;

    while (strlen($IPx) > 0 and $ExitCounter == 0) {

        $Pos = strpos($IPx, ",");

        if ($Pos > 0) {
            $IP = substr($IPx, 0, $Pos);
            $IPx = substr($IPx, $Pos + 1);
        } else {
            $ExitCounter = 1;
            $IP = $IPx;
            $IPx = "";
            $LastIP = true;
        }

        $url = 'http://' . $IP . '/system_create_file.php?sn=' . $my_site_x;
        $context = stream_context_create($options);

        $result = file_get_contents($url, FALSE, $context);
        if ($result === FALSE) {
            echo "Error uploading files. IP: " . $IP;
        } else {
            echo ('success');

            if ($delete_file == TRUE) {
                if (file_exists($my_file_x)) {
                    unlink($my_file_x);
                }
            }
        }
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

function send_files_content_to_remote_servers($my_site, $my_file, $file_content, $IPx, $show_msg)

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

    while (strlen($IPx) > 0 and $ExitCounter == 0) {

        $Pos = strpos($IPx, ",");

        if ($Pos > 0) {
            $IP = substr($IPx, 0, $Pos);
            $IPx = substr($IPx, $Pos + 1);
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
            } else {
                echo ('SUCCESS');
            }
        }
    }
}


////////////////////////////////////////////////////////////////////////////////////////



function compress_image($source_url, $destination_url, $quality)
{
    $info  = getimagesize($source_url);
    $width = $info[0];

    if ($info['mime'] == 'image/jpeg') {
        //$image = imagecreatefromjpeg($source_url);
        if ($width > 1499) {
            $image = resize_imagejpg($source_url, 1500, 1000);
            imagejpeg($image, $destination_url, $quality);
        } else {
            $image = imagecreatefromjpeg($source_url);
            imagejpeg($image, $destination_url, $quality);
        }
    } elseif ($info['mime'] == 'image/gif') {
        //$image = imagecreatefromgif($source_url);
        if ($width > 1499) {
            $image = resize_imagegif($source_url, 1500, 1000);
            imagegif($image, $destination_url);
        } else {
            $image = imagecreatefromgif($source_url);
            imagegif($image, $destination_url);
        }
    } elseif ($info['mime'] == 'image/png') {
        //$image = imagecreatefrompng($source_url);
        if ($width > 1499) {
            $image = resize_imagepng($source_url, 1500, 1000);
            imagepng($image, $destination_url, 6);
        } else {
            $image = imagecreatefrompng($source_url);
            imagepng($image, $destination_url, 6);
        }
    }
    //imagejpeg($image, $destination_url, $quality);
    return $destination_url;
}

function compress_image2($source_url, $destination_url, $quality)
{

    $info = getimagesize($source_url);

    if ($info['mime'] == 'image/jpeg') {
        $image = resize_imagejpg2($source_url, 100, 100);
        imagejpeg($image, $destination_url, $quality);
    } elseif ($info['mime'] == 'image/gif') {
        $image = resize_imagegif2($source_url, 100, 100);
        imagegif($image, $destination_url);
    } elseif ($info['mime'] == 'image/png') {
        $image = resize_imagepng2($source_url, 100, 100);
        imagepng($image, $destination_url, 6);
    }
    //imagejpeg($image, $destination_url, $quality);
    return $destination_url;
}

function compress_image3($source_url, $destination_url)
{

    $info = getimagesize($source_url);

    if ($info['mime'] == 'image/jpeg') {
        $image = resize_imagejpg3($source_url, 100, 100);
        imagejpeg($image, $destination_url);
    } elseif ($info['mime'] == 'image/gif') {
        $image = resize_imagegif3($source_url, 100, 100);
        imagegif($image, $destination_url);
    } elseif ($info['mime'] == 'image/png') {
        $image = resize_imagepng3($source_url, 100, 100);
        imagepng($image, $destination_url);
    }

    //imagejpeg($image, $destination_url, $quality);
    return $destination_url;
}

// for jpg
function resize_imagejpg($file, $w, $h)
{
    list($width, $height) = getimagesize($file);
    $ratio = $width / $height;
    $w     = 1500; // Maximum width of image
    $h     = 1500 / $ratio;
    $src   = imagecreatefromjpeg($file);
    $dst   = imagecreatetruecolor($w, $h);
    imagecopyresampled($dst, $src, 0, 0, 0, 0, $w, $h, $width, $height);
    return $dst;
}

// for png
function resize_imagepng($file, $w, $h)
{
    list($width, $height) = getimagesize($file);
    $ratio = $width / $height;
    $w     = 1500; // Maximum width of image
    $h     = 1500 / $ratio;
    $src   = imagecreatefrompng($file);
    $dst   = imagecreatetruecolor($w, $h);
    imagealphablending($dst, false);
    imagesavealpha($dst, true);
    imagecopyresampled($dst, $src, 0, 0, 0, 0, $w, $h, $width, $height);
    return $dst;
}

// for gif
function resize_imagegif($file, $w, $h)
{
    list($width, $height) = getimagesize($file);
    $ratio = $width / $height;
    $w     = 1500; // Maximum width of image
    $h     = 1500 / $ratio;
    $src   = imagecreatefromgif($file);
    $dst   = imagecreatetruecolor($w, $h);
    imagecopyresampled($dst, $src, 0, 0, 0, 0, $w, $h, $width, $height);
    return $dst;
}

// for jpg thumb
function resize_imagejpg2($file, $w, $h)
{
    list($width, $height) = getimagesize($file);
    $ratio = $width / $height;
    $w     = 100; // Maximum width of image
    $h     = 100 / $ratio;
    $src   = imagecreatefromjpeg($file);
    $dst   = imagecreatetruecolor($w, $h);
    imagecopyresampled($dst, $src, 0, 0, 0, 0, $w, $h, $width, $height);
    return $dst;
}

// for png thumb
function resize_imagepng2($file, $w, $h)
{
    list($width, $height) = getimagesize($file);
    $ratio = $width / $height;
    $w     = 100; // Maximum width of image
    $h     = 100 / $ratio;
    $src   = imagecreatefrompng($file);
    $dst   = imagecreatetruecolor($w, $h);
    imagealphablending($dst, false);
    imagesavealpha($dst, true);
    imagecopyresampled($dst, $src, 0, 0, 0, 0, $w, $h, $width, $height);
    return $dst;
}

// for gif thumb
function resize_imagegif2($file, $w, $h)
{
    list($width, $height) = getimagesize($file);
    $ratio = $width / $height;
    $w     = 100; // Maximum width of image
    $h     = 100 / $ratio;
    $src   = imagecreatefromgif($file);
    $dst   = imagecreatetruecolor($w, $h);
    imagecopyresampled($dst, $src, 0, 0, 0, 0, $w, $h, $width, $height);
    return $dst;
}


// for jpg thumb
function resize_imagejpg3($file, $w, $h)
{
    list($width, $height) = getimagesize($file);
    $ratio = $width / $height;
    $w     = 100; // Maximum width of image
    $h     = 100 / $ratio;
    $src   = imagecreatefromjpeg($file);
    $dst   = imagecreatetruecolor($w, $h);
    imagecopyresized($dst, $src, 0, 0, 0, 0, $w, $h, $width, $height);
    return $dst;
}

// for png thumb
function resize_imagepng3($file, $w, $h)
{
    list($width, $height) = getimagesize($file);
    $ratio = $width / $height;
    $w     = 100; // Maximum width of image
    $h     = 100 / $ratio;
    $src   = imagecreatefrompng($file);
    $dst   = imagecreatetruecolor($w, $h);
    imagealphablending($dst, false);
    imagesavealpha($dst, true);
    imagecopyresized($dst, $src, 0, 0, 0, 0, $w, $h, $width, $height);
    return $dst;
}

// for gif thumb
function resize_imagegif3($file, $w, $h)
{
    list($width, $height) = getimagesize($file);
    $ratio = $width / $height;
    $w     = 100; // Maximum width of image
    $h     = 100 / $ratio;
    $src   = imagecreatefromgif($file);
    $dst   = imagecreatetruecolor($w, $h);
    imagecopyresized($dst, $src, 0, 0, 0, 0, $w, $h, $width, $height);
    return $dst;
}

////////////////////////////////////////////////////////////////////////////////////////

function formatSize($bytes)
{
    if ($bytes >= 1073741824) {
        $bytes = number_format($bytes / 1073741824, 2) . ' GB';
    } elseif ($bytes >= 1048576) {
        $bytes = number_format($bytes / 1048576, 2) . ' MB';
    } elseif ($bytes >= 1024) {
        $bytes = number_format($bytes / 1024, 2) . ' KB';
    } elseif ($bytes > 1) {
        $bytes = $bytes . ' bytes';
    } elseif ($bytes == 1) {
        $bytes = $bytes . ' byte';
    } else {
        $bytes = '0 bytes';
    }
    return $bytes;
}

///////////////////////////////////////////////////////////////////////
