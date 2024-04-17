<?php

// https://bulletlink.net/get_sql_commands.php?cmd=insert&site=1000&url=https://xyz.com/abcd-p22100-307.htm

// Turn off error reporting
//error_reporting(0);

//echo $_SERVER['REQUEST_URI'] . "<hr>";

// store all actions
$data = "";

// get website id from URL 
$website = $_GET['site'];

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
// Iterate through each HTML file
//foreach ($htmlFiles as $file) {

// Read the HTML file content
$html = file_get_contents($file);

// Check if there was an error
if ($html === false) {
    //echo "Failed to fetch content. Error: " . error_get_last()['message'];
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

// heading
$heading = str_replace("'", "''", getMatch('/<h1 class="(?:.*?\s)?pageheading(?:\s.*?)?\s*layout_pageheading(?:\s.*?)?">(.*?)<\/h1>/s', $html));
$heading = str_replace("'", "''", $heading);
$heading = str_replace('"', '""', $heading);
if ($heading == '') {
    $heading = "*** HEADING ***";
    if ($title != '') {
        $heading = $title;
    }
}


// Image    
$image = '';
// Query for the single <img> element with both classes "pagephoto" and "layout_pagephoto"
$imgElement = $xpath->query('//img[contains(@class, "pagephoto") and contains(@class, "layout_pagephoto")]')->item(0);
// Check if the element exists
if ($imgElement !== null) {
    // Get the src attribute value
    $image = basename($imgElement->getAttribute('src'));
}

// date
$date = date('Y-m-d H:i:s', strtotime(getMatch('/<script type="text\/javascript" language="JavaScript">GetArticleDate\("([^"]+)"\);<\/script>/', $html)));
// if date not found then set default or get from image file name
if ($date == '1969-12-31 18:00:00' || strpos($date, '1970') !== false || strpos($date, '1969') !== false) {
    $date = '1999-01-01 00:00:00'; // default date if no date found
    if ($image != '') { // get date from image
        if (preg_match('/(\d{2}-\d{2}-\d{4})/', $image, $matches)) {
            $dateString = $matches[1];

            // Convert the date string to DateTime object
            $dateTime = DateTime::createFromFormat('d-m-Y', $dateString);

            // Convert the DateTime object to the desired format
            $formattedDate = $dateTime->format('Y-m-d H:i:s');

            $date = $formattedDate; // Output: 2024-02-15 00:00:00
        }
    }
}


// article ID and submenu ID
//$articleID = getArticleID('/-p(\d+)-(\d+)\.htm$/', $file);
$articleID = getArticleID('/-p(\d+)-.*\.htm$/', $file);
//$submenuID = getSubMenuID('/-p(\d+)-(\d+)\.htm$/', $file);
$submenuID = getSubMenuID('/-p(\d+)-(\d+)\.htm$/', $file);



// Body
$body = '';

// Query for the <div> element using CSS path - old default
$divElement = $xpath->query('//div[contains(@class, "pagebody") and contains(@class, "layout_pagebody")]/div[not(@class) and not(@id)][1]');

// Check if the query returned any result
if ($divElement !== false && $divElement->length > 0) {
    // Get the first matching element
    $divElement = $divElement->item(0);

    // Loop through each child node of the <div> element
    foreach ($divElement->childNodes as $childNode) {
        $body .= $dom->saveHTML($childNode);
    }
} else {
    // Fallback to the .cus-default-body class - for bootstrap default
    $divElement = $xpath->query('//div[contains(@class, "cus-default-body")]')->item(0);
    if ($divElement !== null) {
        // Loop through each child node of the <div> element
        foreach ($divElement->childNodes as $childNode) {
            $body .= $dom->saveHTML($childNode);
        }
    } else {
        // If neither class is found, fallback to the .art-body class - for mid default
        $divElement = $xpath->query('//div[contains(@class, "art-body")]')->item(0);
        if ($divElement !== null) {
            // Loop through each child node of the <div> element
            foreach ($divElement->childNodes as $childNode) {
                $body .= $dom->saveHTML($childNode);
            }
        }
    }
}

// Escape single and double quotes
$body = str_replace("'", "''", $body);
$body = str_replace('"', '""', $body);


// Caption    
$caption = '';
$divElements = $xpath->query('//div[contains(@class, "layout_pagephotocaption")]');
foreach ($divElements as $divElement) {
    foreach ($divElement->childNodes as $childNode) {
        $caption .= $dom->saveHTML($childNode);
    }
}
$caption = str_replace("'", "''", $caption);  // Escape single quotes
$caption = str_replace('"', '""', $caption);  // Escape double quotes

// byline    
$by = '';
$divElements = $xpath->query('//div[contains(@class, "layout_pagebyline")]');
foreach ($divElements as $divElement) {
    foreach ($divElement->childNodes as $childNode) {
        $by .= $dom->saveHTML($childNode);
    }
}
$by = str_replace("'", "''", $by);  // Escape single quotes
$by = str_replace('"', '""', $by);  // Escape double quotes

// meta keywords
$keywords = '';
$metaElements = $xpath->query('//meta[@name="keywords"]');
foreach ($metaElements as $metaElement) {
    $keywords = $metaElement->getAttribute('content');
}
$keywords = str_replace("'", "''", $keywords);  // Escape single quotes
$keywords = str_replace('"', '""', $keywords);  // Escape double quotes

// meta description
$description = '';
$metaElements = $xpath->query('//meta[@name="description"]');
foreach ($metaElements as $metaElement) {
    $description = $metaElement->getAttribute('content');
}
$description = str_replace("'", "''", $description);  // Escape single quotes
$description = str_replace('"', '""', $description);  // Escape double quotes

// source    
$source = '';
$divElements = $xpath->query('//div[contains(@class, "layout_pagesourceline")]');
foreach ($divElements as $divElement) {
    foreach ($divElement->childNodes as $childNode) {
        $source .= $dom->saveHTML($childNode);
    }
}
$source = str_replace("'", "''", $source);  // Escape single quotes
$source = str_replace('"', '""', $source);  // Escape double quotes


// check for article id, ignore if not found
if ($articleID == "") {
    exit;
}

// insert
if ($action == 'insert') {
    $data .= "INSERT INTO sys_information_test (website_id, sys_information_id, sys_menu_sub_id, menu, heading, body, picture_location, picture_alignment, picture_caption, by_line, source_line, issue_date, starting_date, unique_file, meta_keywords, site_title, meta_description, target_window, active, created_by, last_updated_by, creation_date, last_update_date) VALUES ({$website}, {$articleID}, {$submenuID}, N'{{{{{menu{$submenuID}}}}}}', N'{$heading}', N'{$body}', N'{$image}', N'Left', '{$caption}', N'{$by}', N'{$source}', '{$date}', '{$date}', N'{$unique_file}', N'{$keywords}', N'{$title}', N'{$description}', N'Article','Yes', 0, 0,  getdate(), getdate())";

    // update sys_information set active = 'Yes', created_by = 0, last_updated_by = 0, creation_date = getdate(), last_update_date = getdate() where website_id = 5269

    // echo $count . ') ' . $directory . '<br>';
    // $count++;
}

// update
if ($action == 'update') {
    $data .= "UPDATE sys_information_test SET body= N'{$body}', unique_file = N'{$unique_file}' WHERE website_id = {$website} AND sys_information_id = {$articleID}";

    // echo $count . ') ' . $directory . '<br>';
    // $count++;
}

//}
//$table .= ' </tbody></table>';

//echo $table;

// show data
echo $data;
//echo htmlspecialchars($data);
