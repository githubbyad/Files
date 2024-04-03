<?php

// Define the directory where your files are located
$directory = 'files/';

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


            // for adding -- comment
            $updatedContents = str_replace('Declare @ID Uniqueidentifier', '--Declare @ID Uniqueidentifier', $contents);            
            file_put_contents($filePath, $updatedContents);

            echo "Success<br>";
        }
    }
    // Close the directory handle
    closedir($handle);
}
