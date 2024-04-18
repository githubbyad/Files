<?php

// https://bulletlink.net/get_sql_commands.php?cmd=insert&site=1000&url=https://xyz.com/abcd-p22100-307.htm

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
    //exit();
}

// Open the file    
$directory = $file;
// Load the HTML file into a DOMDocument object
libxml_use_internal_errors(true); // Suppress warnings
$dom = new DOMDocument();
$dom->loadHTMLFile($directory);
libxml_clear_errors(); // Clear any accumulated errors
$xpath = new DOMXPath($dom);

// unique file
$unique_file = basename($file);
$unique_file = str_replace("'", "''", $unique_file);
$unique_file = str_replace('"', '""', $unique_file);

//echo "date: " . getMatch(XXXX, $html) . "<br>";

// title
$title = '';
$titleElement = $xpath->query('//title')->item(0); // Get the first <title> element
if ($titleElement !== null) {
    $title = $titleElement->nodeValue; // Get the text content of the <title> element
}
$title = str_replace("'", "''", $title);  // Escape single quotes
$title = str_replace('"', '""', $title);  // Escape double quotes

// company
$company = getMatch('/<h1 class="(?:.*?\s)?cus-directory-133-name(?:\s.*?)?">(.*?)<\/h1>/s', $html);
$company = str_replace("'", "''", $company);
$company = str_replace('"', '""', $company);
if ($company == '') {
    $company = "*** ARTICLE ERROR ***";
    if ($title != '') {
        $company = $title;
    }
}


// picture_location    
$picture_location = '';
// Query for the single <img> element with both classes "pagephoto" and "layout_pagephoto"
$imgElement = $xpath->query('//div[contains(@class, "cus-directory-133-img")]/img')->item(0);
// Check if the element exists
if ($imgElement !== null) {
    // Get the src attribute value
    $picture_location = basename($imgElement->getAttribute('src'));
}

// date
$date = date('Y-m-d H:i:s', strtotime(getMatch('/<script type="text\/javascript" language="JavaScript">GetArticleDate\("([^"]+)"\);<\/script>/', $html)));
// if date not found then set default or get from picture_location file name
if ($date == '1969-12-31 18:00:00' || strpos($date, '1970') !== false || strpos($date, '1969') !== false) {
    $date = '1999-01-01 00:00:00'; // default date if no date found
    if ($picture_location != '') { // get date from image
        if (preg_match('/(\d{2}-\d{2}-\d{4})/', $picture_location, $matches)) {
            $dateString = $matches[1];

            // Convert the date string to DateTime object
            $dateTime = DateTime::createFromFormat('d-m-Y', $dateString);

            // Convert the DateTime object to the desired format
            $formattedDate = $dateTime->format('Y-m-d H:i:s');

            $date = $formattedDate; // Output: 2024-02-15 00:00:00
        }
    }
}



// customer_id and submenu ID
$customer_id = getArticleID('/-(\d+)-\d+\.htm$/', $file);
$sys_menu_sub_id = getSubMenuID('/-(\d+)-(\d+)\.htm$/', $file);


// category     
$category = '';
$category = getMatch('/<div class="(?:.*?\s)?cus-directory-133-category-hidden(?:\s.*?)?">(.*?)<\/div>/s', $html);
$category = str_replace("'", "''", $category);  // Escape single quotes
$category = str_replace('"', '""', $category);  // Escape double quotes

// first_name     
$first_name = '';
if (preg_match_all('/<tr[^>]*class="[^"]*cus-directory-133-val[^"]*"[^>]*>.*?<td[^>]*>(.*?)<\/td>/s', $html, $matches)) {
    // Change the index to select the desired occurrence
    $desired_occurrence_index = 0;
    if (isset($matches[1][$desired_occurrence_index])) {
        $first_name = trim($matches[1][$desired_occurrence_index]); // Remove leading/trailing whitespace
    }
}
$first_name = str_replace("'", "''", $first_name);  // Escape single quotes
$first_name = str_replace('"', '""', $first_name);  // Escape double quotes


// address1     
$address1 = '';
if (preg_match_all('/<tr[^>]*class="[^"]*cus-directory-133-val[^"]*"[^>]*>.*?<td[^>]*>(.*?)<\/td>/s', $html, $matches)) {
    // Change the index to select the desired occurrence
    $desired_occurrence_index = 1;
    if (isset($matches[1][$desired_occurrence_index])) {
        $address1 = trim($matches[1][$desired_occurrence_index]); // Remove leading/trailing whitespace
    }
}
$address1 = str_replace("'", "''", $address1);  // Escape single quotes
$address1 = str_replace('"', '""', $address1);  // Escape double quotes


// state     
$state = '';
if (preg_match_all('/<tr[^>]*class="[^"]*cus-directory-133-val[^"]*"[^>]*>.*?<td[^>]*>(.*?)<\/td>/s', $html, $matches)) {
    // Change the index to select the desired occurrence
    $desired_occurrence_index = 2;
    if (isset($matches[1][$desired_occurrence_index])) {
        $state = trim($matches[1][$desired_occurrence_index]); // Remove leading/trailing whitespace
    }
}
$state = str_replace("'", "''", $state);  // Escape single quotes
$state = str_replace('"', '""', $state);  // Escape double quotes


// city     
$city = '';
if (preg_match_all('/<tr[^>]*class="[^"]*cus-directory-133-val[^"]*"[^>]*>.*?<td[^>]*>(.*?)<\/td>/s', $html, $matches)) {
    // Change the index to select the desired occurrence
    $desired_occurrence_index = 3;
    if (isset($matches[1][$desired_occurrence_index])) {
        $city = trim($matches[1][$desired_occurrence_index]); // Remove leading/trailing whitespace
    }
}
$city = str_replace("'", "''", $city);  // Escape single quotes
$city = str_replace('"', '""', $city);  // Escape double quotes


// phone     
$city = '';
if (preg_match_all('/<tr[^>]*class="[^"]*cus-directory-133-val[^"]*"[^>]*>.*?<td[^>]*>(.*?)<\/td>/s', $html, $matches)) {
    // Change the index to select the desired occurrence
    $desired_occurrence_index = 3;
    if (isset($matches[1][$desired_occurrence_index])) {
        $city = trim($matches[1][$desired_occurrence_index]); // Remove leading/trailing whitespace
    }
}
$city = str_replace("'", "''", $city);  // Escape single quotes
$city = str_replace('"', '""', $city);  // Escape double quotes


// zip     
$zip = '';
if (preg_match_all('/<tr[^>]*class="[^"]*cus-directory-133-val[^"]*"[^>]*>.*?<td[^>]*>(.*?)<\/td>/s', $html, $matches)) {
    // Change the index to select the desired occurrence
    $desired_occurrence_index = 4;
    if (isset($matches[1][$desired_occurrence_index])) {
        $zip = trim($matches[1][$desired_occurrence_index]); // Remove leading/trailing whitespace
    }
}
$zip = str_replace("'", "''", $zip);  // Escape single quotes
$zip = str_replace('"', '""', $zip);  // Escape double quotes


// phone     
$phone = '';
if (preg_match_all('/<tr[^>]*class="[^"]*cus-directory-133-val[^"]*"[^>]*>.*?<td[^>]*>(.*?)<\/td>/s', $html, $matches)) {
    // Change the index to select the desired occurrence
    $desired_occurrence_index = 6;
    if (isset($matches[1][$desired_occurrence_index])) {
        $phone = trim($matches[1][$desired_occurrence_index]); // Remove leading/trailing whitespace
    }
}
$phone = str_replace("'", "''", $phone);  // Escape single quotes
$phone = str_replace('"', '""', $phone);  // Escape double quotes

// email     
$email = '';
if (preg_match_all('/<tr[^>]*class="[^"]*cus-directory-133-val[^"]*"[^>]*>.*?<td[^>]*>(.*?)<\/td>/s', $html, $matches)) {
    // Change the index to select the desired occurrence
    $desired_occurrence_index = 10;
    if (isset($matches[1][$desired_occurrence_index])) {
        $email = trim(strip_tags($matches[1][$desired_occurrence_index])); // Remove leading/trailing whitespace and HTML tags
    }
}
$email = str_replace("'", "''", $email);  // Escape single quotes
$email = str_replace('"', '""', $email);  // Escape double quotes


// pager     
$pager = '';
if (preg_match_all('/<tr[^>]*class="[^"]*cus-directory-133-val[^"]*"[^>]*>.*?<td[^>]*>(.*?)<\/td>/s', $html, $matches)) {
    // Change the index to select the desired occurrence
    $desired_occurrence_index = 8;
    if (isset($matches[1][$desired_occurrence_index])) {
        $pager = trim($matches[1][$desired_occurrence_index]); // Remove leading/trailing whitespace
    }
}
$pager = str_replace("'", "''", $pager);  // Escape single quotes
$pager = str_replace('"', '""', $pager);  // Escape double quotes


// website     
$website = '';
if (preg_match_all('/<tr[^>]*class="[^"]*cus-directory-133-val[^"]*"[^>]*>.*?<td[^>]*>(.*?)<\/td>/s', $html, $matches)) {
    // Change the index to select the desired occurrence
    $desired_occurrence_index = 11;
    if (isset($matches[1][$desired_occurrence_index])) {
        $website = trim(strip_tags($matches[1][$desired_occurrence_index])); // Remove leading/trailing whitespace and HTML tags
    }
}
$website = str_replace("'", "''", $website);  // Escape single quotes
$website = str_replace('"', '""', $website);  // Escape double quotes


// facebook     
$facebook = '';
// if (preg_match_all('/<tr[^>]*class="[^"]*cus-directory-133-val[^"]*"[^>]*>.*?<td[^>]*>.*?<a[^>]*href="([^"]*)"[^>]*>.*?<\/a>.*?<\/td>/s', $html, $matches)) {
//     // Change the index to select the desired occurrence of the <tr> element
//     $desired_tr_index = 12;
//     if (isset($matches[1][$desired_tr_index])) {
//         $facebook = trim($matches[1][$desired_tr_index]); // Remove leading/trailing whitespace
//     }
// }
$facebook = '';
$anchorElement = $xpath->query('//tr[contains(@class, "cus-directory-133-val")][13]//td/a[1]')->item(0);
// Assuming $xpath is your DOMXPath object
if ($anchorElement !== null) {
    // Get the href attribute value of the anchor element
    $facebook = $anchorElement->getAttribute('href');
}

$facebook = str_replace("'", "''", $facebook);  // Escape single quotes
$facebook = str_replace('"', '""', $facebook);  // Escape double quotes


// coupons_location     
$coupons_location = '';
if (preg_match_all('/<tr[^>]*class="[^"]*cus-directory-133-coupon[^"]*"[^>]*>.*?<td[^>]*>.*?<img[^>]*src="([^"]*)"[^>]*>.*?<\/td>/s', $html, $matches)) {
    // Change the index to select the desired occurrence
    $desired_occurrence_index = 0;
    if (isset($matches[1][$desired_occurrence_index])) {
        $coupons_location = trim($matches[1][$desired_occurrence_index]); // Remove leading/trailing whitespace
    }
}
$coupons_location = str_replace("'", "''", $coupons_location);  // Escape single quotes
$coupons_location = str_replace('"', '""', $coupons_location);  // Escape double quotes


// profile     
$profile = '';
$elements = $xpath->query('//div[contains(@class, "cus-directory-133-table")]/table/tbody/tr[15]/td/span[2]');
if ($elements !== null) {
    foreach ($elements as $element) {
        // Iterate over the children of the span element and append their HTML to $profile
        foreach ($element->childNodes as $childNode) {
            $profile .= $dom->saveHTML($childNode);
        }
    }
}
$profile = str_replace("'", "''", $profile);  // Escape single quotes
$profile = str_replace('"', '""', $profile);  // Escape double quotes


// check for customer_id ignore if not found
if ($customer_id == "") {
    exit;
}

// insert
if ($action == 'insert') {

    // echo 'website_id = ' . $website_id . '<br>';
    // echo 'customer_id = ' . $customer_id . '<br>';
    // echo 'category = ' . $category . '<br>';
    // echo 'first_name = ' . $first_name . '<br>';
    // echo 'last_name = Null<br>';
    // echo 'address1 = ' . $address1 . '<br>';
    // echo 'city = ' . $city . '<br>';
    // echo 'state = ' . $state . '<br>';
    // echo 'zip = ' . $zip . '<br>';
    // echo 'phone = ' . $phone . '<br>';
    // echo 'email = ' . $email . '<br>';
    // echo 'menu = {{{{{menu' . $sys_menu_sub_id . '}}}}}  <br>';
    // echo 'pager = ' . $pager . '<br>';
    // echo 'website = ' . $website . '<br>';
    // echo 'facebook = ' . $facebook . '<br>';
    // echo 'coupons_location = ' . $coupons_location . '<br>';
    // echo 'company = ' . $company . '<br>';
    // echo 'profile = ' . $profile . '<br>';
    // echo 'active =  Yes<br>';
    // echo 'picture_location = ' . $picture_location . '<br>';
    // echo 'sys_menu_sub_id = ' . $sys_menu_sub_id  . '<br>';

    $data .= "INSERT INTO ar_customers (website_id, customer_id, category, first_name, last_name,
    company, address1, city, state, zip, phone, email, sys_menu_sub_id, menu,pager,website,facebook, picture_location, coupons_location, active,profile) VALUES({$website_id}, {$customer_id}, N'{$category}', N'{$first_name}', '', N'{$company}', N'{$address1}', N'{$city}', N'{$state}', N'{$zip}', N'{$phone}', N'{$email}', {$sys_menu_sub_id}, N'{{{{{menu{$sys_menu_sub_id}}}}}}', N'{$pager}', N'{$website}', N'{$facebook}', N'{$picture_location}', N'{$coupons_location}', 'Yes', N'{$profile}')";
}

// update
if ($action == 'update') {
    $data .= "UPDATE ar_customers SET profile= N'{$profile}' WHERE website_id = {$website_id} AND customer_id = {$customer_id}";
}

// show data
echo $data;
