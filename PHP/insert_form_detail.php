<?php

// http://localhost//test/sql/get_articles/get_form_detail.php?cmd=insert&site=1000&url=http://localhost/test/sql/get_articles/form/x_{{NewMember}}.txt&smenu=10

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

// show error if file not opening
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
    $form_master_id = $matches[0];
}


// ********************************************* insert ****************************************************************
if ($action == 'insert') {

    // Select all <section> tags in the DOM
    $sectionElements = $xpath->query('//section');

    $order_sequence = 1;
    // Iterate over each <section> tag
    foreach ($sectionElements as $sectionElement) {

        $formElements = $xpath->query('(.//*[self::input or self::textarea or self::select][@placeholder or @name or @type])[1] | (.//*[contains(@class, "formdivider")])[1]', $sectionElement); // with tooltip for help_tip add | (.//*[contains(@class, "tooltip")])[1]


        // Iterate over each form element
        foreach ($formElements as $formElement) {

            $lov_static = ''; // for options in select
            $required_flag = 'No';

            //echo $formElement->nodeName . "<hr>";

            if ($formElement->nodeName === 'input' || $formElement->nodeName === 'textarea' || $formElement->nodeName === 'select') {

                
                $placeholder = $formElement->getAttribute('placeholder');
                $placeholder = preg_replace('/^\*\s*/', '', $placeholder);
                $column_name = $formElement->getAttribute('id');
                $default_value = $formElement->getAttribute('value');                
                if ($formElement->hasAttribute('required')) {
                    $required_flag = 'Yes';
                }
                $help_tip = '';
                // if ($formElement->nodeName === 'b') {
                //     $help_tip = $formElement->nodeValue;
                // }

                // INPUT FIELDS
                if ($formElement->nodeName === 'input') {
                    //echo 'input ------------<br>';
                    $input_type = escape_quotes($formElement->getAttribute('type'));
                    $caption = escape_quotes($placeholder);
                    $column_name = escape_quotes($formElement->getAttribute('id'));
                    $input_length = escape_quotes($formElement->getAttribute('maxlength'));

                    // TEXTAREA FIELDS
                } elseif ($formElement->nodeName === 'textarea') {
                    //echo 'textarea ------------<br>';
                    $caption = escape_quotes($placeholder);
                    $column_name = $formElement->getAttribute('id');
                    $input_type = "N'Memo'";
                    $input_length = escape_quotes($formElement->getAttribute('maxlength'));

                    // SELECT FIELDS
                } elseif ($formElement->nodeName === 'select') {
                    //echo 'select ------------<br>';
                    $caption = escape_quotes(ucwords(str_replace('_', ' ', $formElement->getAttribute('id'))));
                    $column_name = escape_quotes($formElement->getAttribute('id'));
                    $input_type = "Text'";
                    $input_length = "100'";
                    // Get the selected option's value as default value
                    $selectedOption = $xpath->query('./option[@selected]', $formElement)->item(0);
                    if ($selectedOption) {
                        $default_value = escape_quotes($selectedOption->getAttribute('value'));
                    }
                    // options                    
                    $optionNodes = $xpath->query('./option', $formElement);
                    foreach ($optionNodes as $optionNode) {
                        // Check if the option's value is not empty before appending
                        $optionValue = $optionNode->getAttribute('value');
                        if (!empty($optionValue)) {
                            // Append the value of each non-empty option followed by a newline character
                            $lov_static .= $optionNode->nodeValue . "\n";
                        }
                    }

                    // Remove the trailing newline character if needed
                    $lov_static = rtrim($lov_static, "\n");
                    $lov_static = escape_quotes($lov_static);
                }
            }

            // FORM DIVIDER
            elseif (strpos($formElement->getAttribute('class'), 'formdivider') !== false) {
                //echo 'divider ------------<br>';
                $caption = escape_quotes(trim($formElement->textContent));
                $column_name = Null;
                $input_type = "Divider";
                $input_length = "100";
                $default_value = Null;
            }


            // check values
            // echo 'website_id = ' . $website_id . '<br>';
            // echo 'form_master_id = ' . $form_master_id . '<br>';
            // echo 'form_detail_id = ' . $form_master_id . '<br>';
            // echo "***************** caption = N'{$caption}'<br>";
            // echo "column_name = N'{$column_name}'<br>";
            // echo "input_type = N'{$input_type}'<br>";
            // echo "input_length = N'{$input_length}'<br>";
            // echo "default_value = N'{$default_value}'<br>";
            // echo "order_sequence = N'{$order_sequence}'<br>";
            // echo "required_flag = N'{$required_flag}'<br>";
            // echo "lov_static = N'{$lov_static}' <br>";
            // echo "help_tip = N'{$help_tip}'<br>";
            // echo "created_by = 99<br>";
            // echo "last_updated_by = 99<br>";
            // echo "creation_date = getdate()<br>";
            // echo "last_update_date = getdate()<br>";
            // echo "active = N'Yes'<br>";            

            $data .= 'INSERT INTO sys_custom_forms_details_test (website_id, form_detail_id, form_master_id, caption, column_name, input_type, input_length, default_value, required_flag, order_sequence, lov_static, created_by, last_updated_by, creation_date, last_update_date, active) VALUES (' . $website_id . ', N\'' . $form_master_id . '\', N\'' . $form_master_id . '\', N\'' . $caption . '\', N\'' . $column_name . '\', N\'' . $input_type . '\', N\'' . $input_length . '\', N\'' . $default_value . '\', N\'' . $required_flag . '\', N\'' . $order_sequence . '\', N\'' . $lov_static . '\', 99, 99, getdate(), getdate(), N\'Yes\')\n\n\n';

            //echo "<hr>";
            $order_sequence++;
        }
    }

    //echo "Number of fields found: " . $sectionElements->length - 1 . "<br>";



    // insert into sys_custom_forms_details (website_id, form_detail_id (unique), form_master_id, caption, column_name, input_type, input_case, input_length, default_value, hidden_flag (Yes/No), value_minimum_number, value_maximum_number, order_sequence, help_tip) values (....)


    // $data .= "INSERT INTO sys_custom_forms_master (website_id, customer_id, category, first_name, last_name,
    // company, address1, city, state, zip, phone, email, sys_menu_sub_id, menu,pager,website,facebook, picture_location, coupons_location, active,profile) VALUES({$website_id}, {$customer_id}, N'{$category}', N'{$first_name}', '', N'{$company}', N'{$address1}', N'{$city}', N'{$state}', N'{$zip}', N'{$phone}', N'{$email}', {$sys_menu_sub_id}, N'{{{{{menu{$sys_menu_sub_id}}}}}}', N'{$pager}', N'{$website}', N'{$facebook}', N'{$picture_location}', N'{$coupons_location}', 'Yes', N'{$profile}')";

}

// update
if ($action == 'update') {
    //  $data .= "UPDATE ar_customers SET profile= N'{$profile}' WHERE website_id = {$website_id} AND customer_id = {$customer_id}";
}

// show data
echo $data;
