<?php
$sites = array("bulletlink.one", "bulletlink.systems", "bulletlink.abc", "bulletlink.xyz");
function checkStatus($domain)
{
    $curlInit = curl_init($domain);
    curl_setopt($curlInit, CURLOPT_CONNECTTIMEOUT, 10);
    curl_setopt($curlInit, CURLOPT_HEADER, true);
    curl_setopt($curlInit, CURLOPT_NOBODY, true);
    curl_setopt($curlInit, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($curlInit);
    curl_close($curlInit);
    if ($response) return true;
    return false;
}
$appSever = '';
foreach ($sites as $value) {
    if (checkStatus('https://' . $value . '/')) {
        $appSever = 'https://' . $value . '/';
        break;
    }
}
echo $appSever;
?>
