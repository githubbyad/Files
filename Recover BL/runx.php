<?php
// Define the folder path and search pattern
//$folderPath = 'files/sys_information/sys_information';

$folderPath = 'files/other sqls';
$searchPattern = '/Insert Into \[sys_users_responsibilities\]/';

//$searchPattern = '/\',\s\d+,\'2024-/'; // Yes', 7, '2024- // (?<!\') - ', 7, '2024-/

//$searchPattern = '/\',\s\d+, \'2021-/'; // 2024 articles

// Get a list of files in the folder
$files = glob($folderPath . '/*');

// Iterate over each file
foreach ($files as $file) {
    // Check if the file is a regular file (not a directory)
    if (is_file($file)) {
        // Read the contents of the file
        $contents = file_get_contents($file);

        // Perform the regex match
        if (preg_match($searchPattern, $contents)) {
            // If the pattern matches, print the file name
            echo basename($file) . "<br>";
        } else {
            // if not found
            //echo basename($file) . "<br>";
        }
    }
}
?>
