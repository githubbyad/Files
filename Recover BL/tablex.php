<?php

// Directory where the files are located
$directory = 'files/sys_users_responsibilities';

// Regular expression pattern to match the text
$pattern = '/\[sys_users_responsibilities\]/'; // sys_menus_subs

// Replacement text
$replacement = '[x_sys_users_responsibilities]';

// Get all files in the directory
$files = glob($directory . '/*.sql'); // Change the extension accordingly

// Loop through each file
foreach ($files as $file) {
    // Read the contents of the file
    $contents = file_get_contents($file);
    
    // Perform the find and replace operation using preg_replace
    $newContents = preg_replace($pattern, $replacement, $contents);
    
    // Write the modified contents back to the file
    file_put_contents($file, $newContents);
    
    echo "Updated {$file} <br>";
}

?>