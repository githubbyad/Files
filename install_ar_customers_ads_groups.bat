@echo off
if x"%1" == x"" Goto Usage
if x"%2" == x"" Goto Usage
if x"%3" == x"" Goto Usage
if x"%4" == x"" Goto Usage

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data1167.sql -o Data1167.sql.txt
echo Batch complete Data1167.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data1168.sql -o Data1168.sql.txt
echo Batch complete Data1168.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data1169.sql -o Data1169.sql.txt
echo Batch complete Data1169.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data1170.sql -o Data1170.sql.txt
echo Batch complete Data1170.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data1171.sql -o Data1171.sql.txt
echo Batch complete Data1171.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data1172.sql -o Data1172.sql.txt
echo Batch complete Data1172.sql 

Goto Exit
:Usage
echo Usage
echo Install.bat Server_Name DataBase_Name User_Name Password
:Exit