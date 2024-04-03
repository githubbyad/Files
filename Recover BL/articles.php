<?php
$directory = "/path/to/directory";
$filesToKeep = ["file1.txt", "file2.txt", "file3.txt"]; // Array of files to keep

// Open the directory
if ($handle = opendir($directory)) {
    // Loop through the directory
    while (false !== ($file = readdir($handle))) {
        if ($file != "." && $file != "..") { // Exclude "." and ".."
            // Check if the file is not in the files to keep array
            if (!in_array($file, $filesToKeep)) {
                // Delete the file
                unlink($directory . "/" . $file);
                echo "Deleted: $file <br>";
            }
        }
    }
    // Close the directory handle
    closedir($handle);
}
?>
