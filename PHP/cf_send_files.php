<?php

header('Content-Type: text/html; charset=utf-8');

echo "cf_send_files entry<br>";

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

$File = "";
$FileContent = "";

foreach ($_POST as $field => $value) {
    // Sanitize the key and value to prevent XSS attacks
    $field = htmlspecialchars($field, ENT_QUOTES, 'UTF-8');
    $value = htmlspecialchars($value, ENT_QUOTES, 'UTF-8');

    $SendFile = false;

    if (substr($field, 0, 9) == "file_name") {
        $File = $value;
        echo $File . "<br>";

        $FileExt = "";
        $Pos = strpos($File, ".");
        if ($Pos > 0) {
            $FileExt = substr($File, $Pos);
        }
    }

    if (substr($field, 0, 12) == "file_content") {
        $SendFile = true;

        if (in_array($FileExt, [".htm", ".html", ".css", ".js", ".json", ".txt", ".xml", ".rss", ".php"])) {
            $FileContent = str_replace("~~!!~~", "&", $value);

            // Decode all HTML entities
            $FileContent = html_entity_decode($FileContent, ENT_QUOTES, 'UTF-8');
        } else {
            $FileContent = $value;
        }
    }

    if ($SendFile) {
        $SendFile = false;

        $blobKey = $File;
        $blobData = $FileContent;

        $mimeTypes = [
            ".htm" => "text/html",
            ".html" => "text/html",
            ".css" => "text/css",
            ".js" => "application/javascript",
            ".json" => "application/json",
            ".txt" => "text/plain",
            ".xml" => "text/xml",
            ".rss" => "application/rss+xml",
            ".pdf" => "application/pdf",
            ".png" => "image/png",
            ".jpg" => "image/jpeg",
            ".jpeg" => "image/jpeg",
            ".gif" => "image/gif",
            ".webp" => "image/webp",
        ];

        $blobContentType = $mimeTypes[$FileExt] ?? 'application/octet-stream';

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
