<?php

// File path
$filePath = 'files/Data13469.sql';

// Read file contents
$fileContents = file_get_contents($filePath);

// Define the pattern to match
$pattern = '/\[{(.*?)}\]/';

// Perform replacement
$newContents = preg_replace_callback($pattern, function($matches) {
    // $matches[0] contains the entire match
    // $matches[1] contains the content inside [{ and }]
    $content = $matches[1];
    
    // Perform replacement logic here
    // For example, replace all occurrences of 'old_string' with 'new_string'
    $replacement = str_replace($content, '[xyz]', $content);
    
    // Return the replacement string
    return $replacement;
}, $fileContents);

// Write modified contents back to the file
file_put_contents($filePath, $newContents);

?>
