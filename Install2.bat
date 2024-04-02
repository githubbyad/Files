@echo off
if x"%1" == x"" Goto Usage
if x"%2" == x"" Goto Usage
if x"%3" == x"" Goto Usage
if x"%4" == x"" Goto Usage

REM Define the prefix and suffix of the SQL file names
set sql_prefix=Data
set sql_suffix=.sql

REM Define the array of SQL file numbers separated by space
set sql_numbers=4422 4438

REM Iterate over the array elements
for %%num in (%sql_numbers%) do (
    REM Construct the SQL file name using prefix, number, and suffix
    set sql_file=%sql_prefix%%%num% %sql_suffix%
    
    REM Run SQL import command with the current SQL file name
    sqlcmd -S %1 -d %2 -U %3 -P %4 -i !sql_file! -o !sql_file!.txt
    
    REM Output message indicating completion of the current SQL file import
    echo Batch complete !sql_file!
)

Goto Exit
:Usage
echo Usage
echo Install.bat Server_Name DataBase_Name User_Name Password
:Exit