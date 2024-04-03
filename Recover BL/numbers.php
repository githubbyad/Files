<?php

// List of numbers
$numbers = array("15013", "15014", "15015", "15016", "15017", "15018", "15019", "15020", "15021", "15022", "15023", "15024", "15025", "15026", "15027", "15028", "15029", "15030", "15031", "15032", "15033", "15034", "15035", "15036", "15037", "15038", "15039", "15040", "15041", "15042", "15043", "15044", "15045");

// Template string
$template = 'sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data%s.sql -o Data%s.sql.txt
echo Batch complete Data%s.sql' . PHP_EOL;

// Generate content for all numbers
$batchFileContent = '@echo off
if x"%1" == x"" Goto Usage
if x"%2" == x"" Goto Usage
if x"%3" == x"" Goto Usage
if x"%4" == x"" Goto Usage

';

foreach ($numbers as $number) {
    $batchFileContent .= "sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data{$number}.sql -o Data{$number}.sql.txt
echo Batch complete Data{$number}.sql \n\n";
}

$batchFileContent .= "Goto Exit
:Usage
echo Usage
echo Install.bat Server_Name DataBase_Name User_Name Password
:Exit";

// Save content to a single file
file_put_contents('install_sys_menus.bat', $batchFileContent);

echo 'Combined batch file generated successfully.';
