<?php

// Check if the session is already started
if (session_status() == PHP_SESSION_NONE) {
    session_start(); // Start the session in PHP
}

//error_reporting(0); // Turn OFF all error reporting
//ini_set('display_errors', 0); // Do not display errors

error_reporting(E_ALL); // Turn ON all error reporting
ini_set('display_errors', 1);

require 'connect_string_sql_server.php';

// for AWS upload
require 'vendor/autoload.php';

use Aws\S3\S3Client;
use Aws\Exception\AwsException;

ini_set('max_execution_time', 300);

$Site = $_GET["site"];


////////////////////////////////////////////////////////////////////////////////////////

// Function to get values after the domain name

function GetLoginVars($Site) {

    if (!isset($_SESSION['LoginVars'])) {
        $_SESSION['LoginVars'] = '';
    }

    // Get the stored string from the session
    $dataString = $_SESSION['LoginVars'];
        
    // Use regular expression to match records enclosed in {}
    preg_match_all('/\{(.*?)\}/', $dataString, $matches);
    
    foreach ($matches[1] as $record) {
        // Split the record into an array using the "|" delimiter
        $values = explode('|', $record);
        
        // Check if the first value is the given domain
        if ($values[0] === $Site) {
            // Return the array of values after the first value
            return array_slice($values, 1);
        }
    }
    
    // If the domain does not match any record, return an empty array or a message
    return [];
    }
    
    // Extract and set global variables for a given domain
    function setGlobalVars($Site) {
    global $WebsiteID, $UserID, $StaffName, $AccessLevel, $HPEflag, $AppServer, $IPs, $RespSession, $StartingParameners, $UniqueInvoiceIDo, $SMBGTheme, $CloudflareBucket, $Account, $AccessKey, $SecretKey, $DatabaseID, $UserAPIToken1;
    
    $values = GetLoginVars($Site);
    
    if (!empty($values)) {
        list($WebsiteID, $UserID, $StaffName, $AccessLevel, $HPEflag, $AppServer, $IPs, $RespSession, $StartingParameners, $UniqueInvoiceIDo, $SMBGTheme, $CloudflareBucket, $Account, $AccessKey, $SecretKey, $DatabaseID, $UserAPIToken1) = $values;
    } else {
        $WebsiteID = $UserID = $StaffName = $AccessLevel = $HPEflag = $AppServer = $IPs = $RespSession = $StartingParameners = $UniqueInvoiceIDo = $SMBGTheme = $CloudflareBucket = $Account = $AccessKey = $SecretKey = $DatabaseID = $UserAPIToken1 = null;
    }
    }
    
    // Function to print all global variables
    //function GetVars() {
    //    global $WebsiteID, $UserID, $StaffName, $AccessLevel, $HPEflag, $AppServer, $IPs, $RespSession, $StartingParameners, $UniqueInvoiceIDo, $SMBGTheme, $CloudflareBucket, $Account, $AccessKey, $SecretKey;
    //}
    
    
    setGlobalVars($Site);
    
//setGlobalVars($_SESSION['site']);
//GetVars();

// setGlobalVars($_SESSION['site']);


//echo "<script>console.log('LoginVars ::BBB:: " . addslashes($_SESSION['LoginVars']) . "');</script>";
//echo "<script>console.log('CloudflareBucket: " . addslashes($CloudflareBucket) . "');</script>";
//echo "<script>console.log('Account: " . addslashes($Account) . "');</script>";
//echo "<script>console.log('AccessKey: " . addslashes($AccessKey) . "');</script>";
//echo "<script>console.log('SecretKey: " . addslashes($SecretKey) . "');</script>";



////////////////////////////////////////////////////////////////////////////////////////


function move_uploaded_file_to_remote($my_site, $my_file, $IPx)

{

    $my_file_x = "c:\\upload\\" . $my_file;

    send_file_to_aws ($my_site, $my_file, $my_file_x); // send file to aws

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
            echo ('success 0');

            if (file_exists($my_file_x)) {
                unlink($my_file_x);
            }
        }
    }
}

////////////////////////////////////////////////////////////////////////////////////////

function send_file_to_aws ($my_site, $my_file, $my_file_x)
{

    global $WebsiteID, $UserID, $StaffName, $AccessLevel, $HPEflag, $AppServer, $IPs, $RespSession, $StartingParameners, $UniqueInvoiceIDo, $SMBGTheme, $CloudflareBucket, $Account, $AccessKey, $SecretKey, $DatabaseID, $UserAPIToken1;
    
   // setGlobalVars('cfimran.com');
    //setGlobalVars($_SESSION['site']);
   // GetVars();

    $my_site_x = $my_site;
    $my_site_x = str_replace('.', '-', $my_site_x);
    $my_site_x = str_replace('_', '-', $my_site_x);

    // Check if the data was posted

    echo "--inside AWS--";

    if ($_SERVER['REQUEST_METHOD'] === 'POST') { 

        echo "--inside AWS if--";
        echo "@@my_site_x: " . $my_site_x . "!!";
        echo "@@CloudflareBucket: " . $CloudflareBucket  . "!!";

        $endpoint = "https://" . $Account . ".r2.cloudflarestorage.com";

        
        //echo "<script>console.log('LoginVars ::PPP:: " . addslashes($_SESSION['LoginVars']) . "');</script>";
        //echo "<script>console.log('CloudflareBucket: " . addslashes($CloudflareBucket) . "');</script>";
        //echo "<script>console.log('Account: " . addslashes($Account) . "');</script>";
        //echo "<script>console.log('AccessKey: " . addslashes($AccessKey) . "');</script>";
        //echo "<script>console.log('SecretKey: " . addslashes($SecretKey) . "');</script>";
        //echo "<script>console.log('my_site_x: " . addslashes($my_site_x) . "');</script>";
        //echo "<script>console.log('endpoint: " . addslashes($endpoint) . "');</script>";
        
        if (strpos($my_site_x, $CloudflareBucket) !== false) {

            echo "--inside AWS if-if--";

            //echo "<script>console.log('XXX');</script>";

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
                    'key' => $AccessKey,
                    'secret' => $SecretKey,
                ],
                'http' => [
                    'verify' => $caBundlePath,
                ],
            ]);

            // Upload the file to Cloudflare R2
            try {
                $result = $s3Client->putObject([
                    'Bucket' => $CloudflareBucket,
                    'Key' => $fileName,
                    'SourceFile' => $filePath,
                ]);

                echo "--inside AWS if-if-try--"; 

                echo 'File uploaded successfully. ETag: ' . $result['ETag'];

               // Execute the command and capture the output
               $output = shell_exec("php send_file_to_backblaze.php $CloudflareBucket \"$filePath\"");
               $output = shell_exec("php send_file_to_wasabi.php $CloudflareBucket \"$filePath\"");
               //echo "Command output:<br><pre>$output</pre>";

                
            } catch (AwsException $e) {
                echo "--inside AWS if-if-catch--"; 
                echo 'Error uploading file: ' . $e->getMessage();
            }
        }
    }
}

////////////////////////////////////////////////////////////////////////////////////////

function send_file_to_backblaze ($accountId, $applicationKey, $bucket, $filePath, $my_site, $my_file, $my_file_x)
{
    // Backblaze B2 endpoint
    $endpoint = 'https://s3.us-east-005.backblazeb2.com'; // Example endpoint, adjust as necessary for your region

    // Instantiate the S3 client with your B2 credentials
    $s3Client = new S3Client([
        'region' => 'us-east-001', // Removed extra spaces
        'version' => 'latest',
        'endpoint' => $endpoint,
        'use_path_style_endpoint' => true,
        'http' => ['verify' => 'cacert.pem'],
        'credentials' => [
            'key' => $accountId,
            'secret' => $applicationKey,
        ],
    ]);

    try {
        // Upload an object to your B2 bucket
        $result = $s3Client->putObject([
            'Bucket' => $bucket,
            'Key' => basename($filePath),
            'SourceFile' => $filePath,
        ]);

        // Print the URL of the uploaded object
        echo "Image uploaded successfully. Image URL: " . $result['ObjectURL'] . PHP_EOL;
    } catch (S3Exception $e) {
        echo "There was an error uploading the image: " . $e->getMessage() . PHP_EOL;
    } catch (Exception $e) {
        echo "General error: " . $e->getMessage() . PHP_EOL;
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
            echo ('SUCCESS 2');
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
            echo ('success 3');

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

function formatSize($bytes) {
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

/////////////////////////////////////////////////////////////////////////////////////////

// Function to get Cloudflare keys
function getCloudflareKeys($conn, $Site) {
    // Check if CurrentSite is set and matches the provided Site
    if (isset($_SESSION['CurrentSite']) && $_SESSION['CurrentSite'] === $Site) {
        // Return the current session values if CurrentSite matches the provided Site
        return;
    }

    // Initialize the keys array
    $keys = [
        'CurrentSite' => $Site,
        'Account' => '',
        'AccessKey' => '',
        'SecretKey' => '',
        'Bucket' => '',
        'ZoneID' => '',
        'GlobalAPI' => '',
        'UserAPIToken1' => ''
    ];

    try {
        // First query to get website_id, cloudflare_bucket, and cloudflare_zone_id
        $sql = "SELECT website_id, cloudflare_bucket, cloudflare_zone_id FROM sys_websites WHERE website = :site";
        $stmt = $conn->prepare($sql);
        $stmt->execute(['site' => $Site]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        $websiteID = null;
        if ($row) {
            $websiteID = $row['website_id'];
            $keys['Bucket'] = $row['cloudflare_bucket'] ?? '';
            $keys['ZoneID'] = $row['cloudflare_zone_id'] ?? '';
        }

        // Proceed only if the Bucket is not empty and websiteID is not null
        if ($keys['Bucket'] !== '' && $websiteID !== null) {
            // Second query to get the remaining Cloudflare keys
            $sql = "SELECT global_api, account_id, access_key, secret_key, user_api_token_1
                    FROM sys_websites w, sys_cloudflare_cache c
                    WHERE w.website_id = :website_id AND account_email = cloudflare_cache";
            $stmt = $conn->prepare($sql);
            $stmt->execute(['website_id' => $websiteID]);
            $row = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($row) {
                $keys['UserAPIToken1'] = $row['user_api_token_1'] ?? '';
                $keys['GlobalAPI'] = $row['global_api'] ?? '';
                $keys['Account'] = $row['account_id'] ?? '';
                $keys['AccessKey'] = $row['access_key'] ?? '';
                $keys['SecretKey'] = $row['secret_key'] ?? '';
            } else {
                $_SESSION['ErrorCode'] = "0";
                $_SESSION['MessageCode'] = "MISSING: Cloudflare Records";
                header("Location: error.php?npage=" . $_SERVER['HTTP_HOST'] . "/login.php?site=" . $_SERVER['SERVER_NAME']);
                exit();
            }
        }

        // Store keys in session variables
        foreach ($keys as $key => $value) {
            $_SESSION[$key] = $value;
        }

    } catch (PDOException $e) {
        die("Error: " . $e->getMessage());
    } finally {
        // Close the connection
        $conn = null;
    }
}


/////////////////////////////////////////////////////////////////////////////////////////


function read_file_from_cloudflare ($Site, $File)

{

 // if $keys['Account'] is blank, assing to session values again
if (empty($_SESSION['Account'])) {
  $keys = getCloudflareKeys($conn, $Site);
}
   
////// BEGIN: Cloudflare R2 access key and secret key  //////////////////////////////////
$Account = $_SESSION['Account']; 
$Bucket = $_SESSION['Bucket'] ; 
$AccessKey = $_SESSION['AccessKey']; 
$SecretKey = $_SESSION['SecretKey']; 
////// END: Cloudflare R2 access key and secret key  ////////////////////////////////////


// Your Cloudflare R2 credentials
//$Account = 'c70d7944d938833c501c72fd4221dbaf';
//$Bucket = 'cfimran';
//$AccessKey = 'e90d510ff8086c821165ba1d59616e2c';
//$SecretKey = 'c1ee934a720c9d4f167fe27ac3609ca662d2f53bc5a5a17d15d84ada7d3dc9e3';

//$File = 'hitcounter.txt'; // Just the file path within the bucket

/////////////////////////////////////////////////////////////////////////////////////////


// Cloudflare R2 API endpoint
$endpoint = "https://" . $Account . ".r2.cloudflarestorage.com";


// Path to the cacert.pem file
$cacertPath = 'cacert.pem'; // Replace this with the actual path to your cacert.pem file

// Initialize the S3 client for Cloudflare R2
$s3Client = new S3Client([
    'version' => 'latest',
    'region' => 'auto', // R2 does not use a specific region
    'endpoint' => $endpoint,
    'use_path_style_endpoint' => true, // This is required for R2
    'credentials' => [
        'key' => $AccessKey,
        'secret' => $SecretKey,
    ],
    'http' => [
        'verify' => $cacertPath,
    ],
]);


try {
    // Get the object
    $result = $s3Client->getObject([
        'Bucket' => $Bucket,
        'Key' => $File,
    ]);

    // Get the file content
    $fileContent = $result['Body']->getContents();

    return $fileContent;

} catch (AwsException $e) {
    // Output error message if fails
    echo "Error: " . $e->getMessage();
}



}


/////////////////////////////////////////////////////////////////////////////////////////

?>
