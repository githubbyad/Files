<?php


ini_set('memory_limit', '-1');

header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");

require 'vendor/autoload.php';

use Aws\S3\S3Client;
use Aws\Exception\AwsException;

////// BEGIN: Cloudflare R2 access key and secret key  //////////////////////////////////
$Account = $_POST['cf_a_key'];
$Bucket = $_POST['cf_b_key'];
$AccessKey = $_POST['cf_ak_key'];
$SecretKey = $_POST['cf_as_key'];
////// END: Cloudflare R2 access key and secret key  ////////////////////////////////////

$_POST['cf_a_key'] = "";
$_POST['cf_b_key'] = "";
$_POST['cf_ak_key'] = "";
$_POST['cf_as_key'] = "";

// Cloudflare R2 API endpoint
$endpoint = "https://" . $Account . ".r2.cloudflarestorage.com";

// Path to the custom CA bundle file
$caBundlePath = 'cacert.pem';

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



/////////////////////////////////////////////////////////////////////////////////////////////

$File = "";
$FileContent = "";

foreach ($_POST as $field => $value) {

    // Sanitize the key and value to prevent XSS attacks
    $field = htmlspecialchars($field);
    $value = htmlspecialchars($value);


    $SendFile = false;

    if (substr($field, 0, 9) == "file_name") {

        $File = $value;
        //echo $File . "<br>";

        $FileExt = "";
        $Pos = strpos($File, ".");
        if ($Pos > 0) {
            $FileExt = substr($File, $Pos);
        }
    }


    if (substr($field, 0, 12) == "file_content") {

        $SendFile = true;

        if ($FileExt == ".htm" or $FileExt == ".html" or $FileExt == ".css" or $FileExt == ".js" or $FileExt == ".json" or $FileExt == ".txt" or $FileExt == ".xml" or $FileExt == ".rss" or $FileExt == ".php") {

            $FileContent = str_replace("~~!!~~", "&", $value);
            
            $htmlContent = file_get_contents($File); // decode            
            $decodedContent = html_entity_decode($htmlContent); // Decode HTML entities            
            setcookie("file_data", $decodedContent, time() + 3600, "/"); // send file data in cookie

            $FileContent = $decodedContent;

            echo $FileContent;

            // $FileContent = htmlspecialchars_decode($FileContent);

            //echo $FileContent . "@@@<br>";

        } else {

            $FileContent = $value;
        }
    }





    if ($SendFile) {

        $SendFile = false;

        $blobKey = $File;
        $blobData = $FileContent;

        if ($FileExt == ".htm" or $FileExt == ".html") {
            $blobContentType = "text/html";
        } else if ($FileExt == ".css") {
            $blobContentType = "text/css";
        } else if ($FileExt == ".js") {
            $blobContentType = "application/x-javascript";
        } else if ($FileExt == ".json") {
            $blobContentType = "application/json";
        } else if ($FileExt == ".txt") {
            $blobContentType = "text/plain";
        } else if ($FileExt == ".xml") {
            $blobContentType = "text/xml";
        } else if ($FileExt == ".rss") {
            $blobContentType = "application/rss+xml";
        } else if ($FileExt == ".pdf") {
            $blobContentType = "application/pdf";
        } else if ($FileExt == ".png") {
            $blobContentType = "image/png";
        } else if ($FileExt == ".jpg" or $FileExt == ".jpeg") {
            $blobContentType = "image/jpeg";
        } else if ($FileExt == ".gif") {
            $blobContentType = "image/gif";
        } else if ($FileExt == ".webp") {
            $blobContentType = "image/webp";
        } else {
            $blobContentType = $FileExt;
        }


        try {
            // Push the blob to Cloudflare R2
            $result = $s3Client->putObject([
                'Bucket' => $Bucket,
                'Key' => $File,
                'Body' => $FileContent,
                'ContentType' => $blobContentType,  // Specify the MIME type        
            ]);

            echo 'Blob uploaded successfully. ETag: ' . $result['ETag'] . "<br>";
        } catch (AwsException $e) {
            echo 'Error uploading blob: ' . $e->getMessage() . "<br>";
        }
    }
}


/////////////////////////////////////////////////////////////////////////////////////////////
