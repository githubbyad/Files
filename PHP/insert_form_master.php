<?php

// http://localhost//test/sql/get_articles/get_form_master.php?cmd=insert&site=1000&url=http://localhost/test/sql/get_articles/form/x_{{NewMember}}.txt&smenu=10

// Turn off error reporting
error_reporting(0);

//echo $_SERVER['REQUEST_URI'] . "<hr>";

// store all actions
$data = "";

// get website id from URL 
$website_id = $_GET['site'];

// get insert or update
$action = $_GET['cmd'];

// Read list of HTML files from text file
//$htmlFiles = file('list.txt', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

// CSV file
//$csvFile = fopen('files/load/data.csv', 'a');

// match condition
function getMatch($pattern, $html)
{
    if (preg_match($pattern, $html, $matches)) {
        return $matches[1];
    } else {
        return null;
    }
}

function getImageName($pattern, $html)
{
    if (preg_match($pattern, $html, $matches)) {
        return basename($matches[1]);
    } else {
        return null;
    }
}

function getArticleID($pattern, $file)
{
    if (preg_match($pattern, $file, $matches)) {
        return $matches[1];
    }
}
function getSubMenuID($pattern, $file)
{
    if (preg_match($pattern, $file, $matches)) {
        return $matches[2];
    }
}

function escape_quotes($string)
{
    $string = str_replace("'", "''", $string);  // Escape single quotes
    //$string = str_replace('"', '""', $string);  // Escape double quotes
    return $string;
}

//$table = "<table border='1' cellpadding='5' cellspacing='0'><thead><th>heading</th><th>date</th><th>image</th><th>caption</th><th>body</th><th>by</th><th>source</th><th>articleID</th> <th>submenuID</th>";

//$count = 1;
//$total = count($htmlFiles);
$file = $_GET['url'];
if (preg_match_all('/\.htm/', $file, $matches) > 1) {
    echo "{{{{{ERROR:" . $file . "}}}}}";
    exit;
}


// Read the HTML file content
$html = file_get_contents($file);


// Check if there was an error
if ($html === false) {
    //echo "Failed to fetch content. Error: " . error_get_last()['message'];
    //echo "<pre>";
    //print_r(error_get_last());
    exit();
}

// Open the file    
$directory = $file;
// Load the HTML file into a DOMDocument object
libxml_use_internal_errors(true); // Suppress warnings
$dom = new DOMDocument();
$dom->loadHTMLFile($directory);
libxml_clear_errors(); // Clear any accumulated errors
$xpath = new DOMXPath($dom);



// form_master_id
$form_master_id = "";
// Use preg_match to find the pattern "{{...}}" in the URL
if (preg_match('/{{(.*?)}}/', $file, $matches)) {    
    $form_master_id = escape_quotes($matches[0]);    
}

// sys_menu_sub_id
$sys_menu_sub_id = 0;
$sys_menu_sub_id = escape_quotes($_GET['smenu']) ?? 0;

// description
$description = $form_master_id;
$ccElement = $xpath->query('//*[@id="SystemEmailCC"]')->item(0);
if ($ccElement !== null) {
    // Find the next sibling element that is either a <center> or <header> tag
    $nextSibling = $ccElement->nextSibling;
    while ($nextSibling !== null) {
        if (($nextSibling->nodeName == 'center') || ($nextSibling->nodeName == 'header')) {
            // Extract text content from the <center> or <header> tag
            $description = escape_quotes($nextSibling->textContent);
            break;
        }
        $nextSibling = $nextSibling->nextSibling;
    }
}


// email_to
$email_to = '';
$inputElement = $xpath->query('//input[@id="SystemEmailTo"]')->item(0);
if ($inputElement !== null) {
    $email_to = escape_quotes($inputElement->getAttribute('value'));
}

// email_cc
$email_cc = '';
$inputElement = $xpath->query('//input[@id="SystemEmailCC"]')->item(0);
if ($inputElement !== null) {
    $email_cc = escape_quotes($inputElement->getAttribute('value'));
}

// email_subject
$email_subject = '';
$inputElement = $xpath->query('//input[@id="SystemEmailSubject"]')->item(0);
if ($inputElement !== null) {
    $email_subject = escape_quotes($inputElement->getAttribute('value'));
}

// email_confirm_message
$email_confirm_message = '';
$inputElement = $xpath->query('//input[@id="SystemEmailConfirmMessage"]')->item(0);
if ($inputElement !== null) {
    $email_confirm_message = escape_quotes($inputElement->getAttribute('value'));
}

// email_format
$email_format = '';
$inputElement = $xpath->query('//input[@id="SystemEmailFormat"]')->item(0);
if ($inputElement !== null) {
    $email_format = escape_quotes($inputElement->getAttribute('value'));
}

// header
$header = '';
$divElements = $xpath->query('//div[contains(@class, "system_text") and contains(@class, "Header_text")]');
if ($divElements !== false && $divElements->length > 0) {
    foreach ($divElements as $divElement) {        
        $header .= escape_quotes($divElement->ownerDocument->saveHTML($divElement));
    }
}

// footer
$footer = '';
$divElements = $xpath->query('//div[contains(@class, "system_text") and contains(@class, "footer_text")]');
if ($divElements !== false && $divElements->length > 0) {
    foreach ($divElements as $divElement) {        
        $footer .= escape_quotes($divElement->ownerDocument->saveHTML($divElement));
    }
}


// ********************************************* insert ****************************************************************
if ($action == 'insert') {

    // echo 'website_id = ' . $website_id . '<br>';
    // echo 'form_master_id = ' . $form_master_id . '<br>';    
    // echo 'sys_menu_sub_id = ' . $sys_menu_sub_id . '<br>';    
    // echo 'menu = {{{{{menu' . $sys_menu_sub_id . '}}}}}  <br>';   
    // echo 'name = ' . $form_master_id . '<br>';    
    // echo 'description = ' . $description . '<br>';    
    // echo 'email_to = ' . $email_to . '<br>';   
    // echo 'email_cc = ' . $email_cc . '<br>';   
    // echo 'email_subject = ' . $email_subject . '<br>';   
    // echo 'email_confirm_message = ' . $email_confirm_message . '<br>';   
    // echo 'email_format = ' . $email_format . '<br>';   
    // echo 'header = ' . $header . '<br>';   
    // echo 'footer = ' . $footer . '<br>';       
    // echo "active = N'Yes'<br>";   
    // echo 'created_by = 99<br>';   
     
                        
    // post_url=Null
    // button_value=N'subscribe'
        
    // table_name=Null
    // form_enctype=N'enctype="multipart/form-data"'
    // form_action=Null
    // security_code_flag=N'Yes'
    // send_email_flag=N'Yes'
    // combine_caption_input=N'No'
    // csv_export_flag=Null
    // form_layout=Null
    
    // created_by=-1
    // creation_date='2005-09-09 09:53:00.000'
    // last_updated_by=1
    // last_update_date='2006-08-17 12:43:00.000'
    // form_layout_email=Null
    // send_email_visitor_flag=N'Yes'
    // email_bcc=Null
    // xyz=@ID

    $data = 'INSERT INTO sys_custom_forms_master_test (website_id, form_master_id, name, description, email_to, email_cc, email_subject, email_confirm_message, email_format (default value=HTML), post_url, button_value, header, footer,  table_name, created_by, last_updated_by, creation_date, last_update_date, active) VALUES (N\'' . $website_id . '\', N\'' . $form_master_id . '\', N\'' . $form_master_id . '\', N\'' . $description . '\', N\'' . $email_to . '\', N\'' . $email_cc . '\', N\'' . $email_subject . '\', N\'' . $email_confirm_message . '\', N\'' . $email_format . '\', Null, N\'Submit\', N\'' . $header . '\', N\'' . $footer . '\', \'\', 99, 99, getdate(), getdate(), N\'Yes\')';

    // $data .= "INSERT INTO sys_custom_forms_master_test (website_id, customer_id, category, first_name, last_name,
    // company, address1, city, state, zip, phone, email, sys_menu_sub_id, menu,pager,website,facebook, picture_location, coupons_location, active,profile) VALUES({$website_id}, {$customer_id}, N'{$category}', N'{$first_name}', '', N'{$company}', N'{$address1}', N'{$city}', N'{$state}', N'{$zip}', N'{$phone}', N'{$email}', {$sys_menu_sub_id}, N'{{{{{menu{$sys_menu_sub_id}}}}}}', N'{$pager}', N'{$website}', N'{$facebook}', N'{$picture_location}', N'{$coupons_location}', 'Yes', N'{$profile}')";

}

// update
if ($action == 'update') {
    //$data .= "UPDATE ar_customers SET profile= N'{$profile}' WHERE website_id = {$website_id} AND customer_id = {$customer_id}";
}

// show data
echo $data;
