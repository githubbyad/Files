<?php

// Define the directory where your files are located
$directory = 'files/other/';

// Open the directory
if ($handle = opendir($directory)) {
    // Loop through each file in the directory
    while (false !== ($file = readdir($handle))) {
        // Exclude current directory (.) and parent directory (..)
        if ($file != "." && $file != "..") {
            // Read the contents of the file
            $filePath = $directory . $file;
            $contents = file_get_contents($filePath);

            //$pattern = '/^\[\{(.+?)\}\]$/';      
            $pattern = '/\[{(.*?)}\]/';

            // for replacing column name from [{XXX}] to [xyz]
            $newContents = preg_replace_callback($pattern, function ($matches) {
                // $matches[0] contains the entire match. $matches[1] contains the content inside [{ and }]
                $match = $matches[1];

                // Perform replacement logic here                
                $replacement = str_replace($match, '[xyz]', $match);

                // Return the replacement string
                return $replacement;
            }, $contents);

            file_put_contents($filePath, $newContents, LOCK_EX, null);

            echo "Success: {$filePath}<br>";
        }
    }
    // Close the directory handle
    closedir($handle);
}
