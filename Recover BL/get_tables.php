<?php
// Your file path
$file_path = "files/Table0001.sql";

// Pattern to match
$pattern = '/Create Table \[(.*?)\]/';

// Open the file
$file_content = file_get_contents($file_path);

// Perform the regular expression match all
if (preg_match_all($pattern, $file_content, $matches)) {
    // The matches are found
    $table_names = $matches[1]; // Extract the table names
    foreach ($table_names as $table_name) {
        echo "{$table_name}<br>";
    }
} else {
    // No matches found
    echo "No matches found";
}
?>
