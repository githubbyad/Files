@echo off
if x"%1" == x"" Goto Usage
if x"%2" == x"" Goto Usage
if x"%3" == x"" Goto Usage
if x"%4" == x"" Goto Usage

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data15844.sql -o Data15844.sql.txt
echo Batch complete Data15844.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data15845.sql -o Data15845.sql.txt
echo Batch complete Data15845.sql 

Goto Exit
:Usage
echo Usage
echo Install.bat Server_Name DataBase_Name User_Name Password
:Exit