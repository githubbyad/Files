


<?php

// Source directory
$sourceDir = 'files/sys_information/sys_information/';

// Destination directory
$destinationDir = 'files/sys_information/sys_information/2021/';


// Array of filenames to move
 $filesToMove = array("Data4424.sql", "Data4458.sql", "Data4524.sql", "Data4555.sql", "Data4578.sql", "Data4645.sql", "Data4654.sql", "Data4667.sql", "Data4700.sql", "Data4722.sql", "Data4723.sql", "Data4742.sql", "Data4756.sql", "Data4761.sql", "Data4771.sql", "Data4788.sql", "Data4799.sql", "Data4813.sql", "Data4817.sql", "Data4831.sql", "Data4844.sql", "Data4893.sql", "Data4925.sql", "Data5041.sql", "Data5061.sql", "Data5069.sql", "Data5084.sql", "Data5088.sql", "Data5111.sql", "Data5204.sql", "Data5283.sql", "Data5310.sql", "Data5459.sql", "Data5466.sql", "Data5471.sql", "Data5512.sql", "Data5526.sql", "Data5542.sql", "Data5545.sql", "Data5548.sql", "Data5555.sql", "Data5603.sql", "Data5604.sql", "Data5634.sql", "Data5639.sql", "Data5701.sql", "Data5704.sql", "Data5716.sql", "Data5774.sql", "Data5795.sql", "Data5821.sql", "Data5875.sql", "Data5948.sql", "Data5962.sql", "Data5970.sql", "Data5978.sql", "Data5981.sql", "Data5987.sql", "Data5991.sql", "Data5995.sql", "Data5997.sql", "Data6025.sql", "Data6127.sql", "Data6136.sql", "Data6152.sql", "Data6232.sql", "Data6241.sql", "Data6252.sql", "Data6258.sql", "Data6260.sql", "Data6264.sql", "Data6354.sql", "Data6457.sql", "Data6477.sql", "Data6480.sql", "Data6482.sql", "Data6622.sql", "Data6653.sql", "Data6688.sql", "Data6747.sql", "Data6809.sql", "Data6977.sql", "Data7021.sql", "Data7023.sql", "Data7025.sql", "Data7053.sql", "Data7058.sql", "Data7061.sql", "Data7073.sql", "Data7091.sql", "Data7114.sql", "Data7141.sql", "Data7185.sql", "Data7384.sql", "Data7560.sql", "Data7620.sql", "Data7652.sql", "Data7697.sql", "Data7740.sql", "Data7864.sql", "Data7924.sql", "Data8007.sql", "Data8060.sql", "Data8075.sql", "Data8123.sql", "Data8129.sql", "Data8153.sql", "Data8161.sql", "Data8213.sql", "Data8219.sql", "Data8221.sql", "Data8245.sql", "Data8343.sql", "Data8397.sql", "Data8450.sql", "Data8558.sql", "Data8574.sql", "Data8619.sql", "Data8733.sql", "Data8820.sql", "Data8835.sql", "Data9061.sql", "Data9151.sql", "Data9173.sql", "Data9528.sql", "Data9565.sql", "Data9637.sql", "Data9846.sql", "Data10320.sql", "Data10616.sql", "Data10827.sql", "Data10832.sql", "Data11015.sql", "Data11054.sql", "Data11063.sql", "Data11152.sql", "Data11171.sql", "Data11522.sql", "Data11778.sql", "Data11877.sql", "Data11879.sql", "Data11901.sql", "Data12705.sql", "Data12908.sql", "Data13141.sql", "Data13181.sql", "Data13218.sql", "Data13491.sql", "Data14152.sql", "Data14155.sql", "Data14239.sql", "Data14260.sql", "Data14261.sql", "Data14549.sql");

foreach ($filesToMove as $filename) {
    $sourceFile = $sourceDir . $filename;
    $destinationFile = $destinationDir . $filename;

    // Check if the file exists in the source directory
    if (file_exists($sourceFile)) {
        // Attempt to move the file
        if (rename($sourceFile, $destinationFile)) {
            echo "File '$filename' moved successfully.<br>";
        } else {
            echo "Failed to move file '$filename'.<br>";
        }
    } else {
        echo "File '$filename' does not exist in the source directory.<br>";
    }
}
?>
