<?php

ini_set('memory_limit', '-1');

session_start();

header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");

require 'cf_get_access_keys.php';
require 'vendor/autoload.php';

use Aws\S3\S3Client;
use Aws\Exception\AwsException;

$getCloudflareKeys("cfimran.com");

$endpoint = "https://" . htmlspecialchars($_SESSION['Account']) . ".r2.cloudflarestorage.com";
$accessKey = htmlspecialchars($_SESSION['AccessKey']);
$secretKey = htmlspecialchars($_SESSION['SecretKey']);
$caBundlePath = 'cacert.pem';

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

$File = "";
$FileContent = "";
$FieldCounter = 0;

foreach ($_POST as $field => $value) {
    $FieldCounter++;
    if (substr($field, 0, 9) == "file_name") {
        $File = htmlspecialchars($value);
        $FileExt = pathinfo($File, PATHINFO_EXTENSION);
    }

    if (substr($field, 0, 12) == "file_content") {
        $FileContent = ($FileExt == "htm" || $FileExt == "html" || $FileExt == "css" || $FileExt == "js" || $FileExt == "json" || $FileExt == "txt" || $FileExt == "xml" || $FileExt == "rss" || $FileExt == "php")
            ? str_replace("~~!!~~", "&", htmlspecialchars($value))
            : htmlspecialchars($value);
    }

    if ($FieldCounter == 2) {
        $FieldCounter = 0;
        $bucketName = htmlspecialchars($_SESSION['Bucket']);
        $blobKey = $File;
        $blobData = $FileContent;
        $mimeTypes = [
            'htm' => 'text/html',
            'html' => 'text/html',
            'css' => 'text/css',
            'js' => 'application/x-javascript',
            'json' => 'application/json',
            'txt' => 'text/plain',
            'xml' => 'text/xml',
            'rss' => 'application/rss+xml',
            'pdf' => 'application/pdf',
            'png' => 'image/png',
            'jpg' => 'image/jpeg',
            'jpeg' => 'image/jpeg',
            'gif' => 'image/gif',
            'webp' => 'image/webp',
        ];
        $blobContentType = $mimeTypes[$FileExt] ?? 'application/octet-stream';

        try {
            $result = $s3Client->putObject([
                'Bucket' => $bucketName,
                'Key' => $blobKey,
                'Body' => $blobData,
                'ContentType' => $blobContentType,
            ]);
            echo 'Blob uploaded successfully. ETag: ' . $result['ETag'];
        } catch (AwsException $e) {
            echo 'Error uploading blob: ' . $e->getMessage();
        }
    }
}

echo "SUCCESS";

?>
