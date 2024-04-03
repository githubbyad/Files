@echo off
if x"%1" == x"" Goto Usage
if x"%2" == x"" Goto Usage
if x"%3" == x"" Goto Usage
if x"%4" == x"" Goto Usage

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data15013.sql -o Data15013.sql.txt
echo Batch complete Data15013.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data15014.sql -o Data15014.sql.txt
echo Batch complete Data15014.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data15015.sql -o Data15015.sql.txt
echo Batch complete Data15015.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data15016.sql -o Data15016.sql.txt
echo Batch complete Data15016.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data15017.sql -o Data15017.sql.txt
echo Batch complete Data15017.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data15018.sql -o Data15018.sql.txt
echo Batch complete Data15018.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data15019.sql -o Data15019.sql.txt
echo Batch complete Data15019.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data15020.sql -o Data15020.sql.txt
echo Batch complete Data15020.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data15021.sql -o Data15021.sql.txt
echo Batch complete Data15021.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data15022.sql -o Data15022.sql.txt
echo Batch complete Data15022.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data15023.sql -o Data15023.sql.txt
echo Batch complete Data15023.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data15024.sql -o Data15024.sql.txt
echo Batch complete Data15024.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data15025.sql -o Data15025.sql.txt
echo Batch complete Data15025.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data15026.sql -o Data15026.sql.txt
echo Batch complete Data15026.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data15027.sql -o Data15027.sql.txt
echo Batch complete Data15027.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data15028.sql -o Data15028.sql.txt
echo Batch complete Data15028.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data15029.sql -o Data15029.sql.txt
echo Batch complete Data15029.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data15030.sql -o Data15030.sql.txt
echo Batch complete Data15030.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data15031.sql -o Data15031.sql.txt
echo Batch complete Data15031.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data15032.sql -o Data15032.sql.txt
echo Batch complete Data15032.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data15033.sql -o Data15033.sql.txt
echo Batch complete Data15033.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data15034.sql -o Data15034.sql.txt
echo Batch complete Data15034.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data15035.sql -o Data15035.sql.txt
echo Batch complete Data15035.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data15036.sql -o Data15036.sql.txt
echo Batch complete Data15036.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data15037.sql -o Data15037.sql.txt
echo Batch complete Data15037.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data15038.sql -o Data15038.sql.txt
echo Batch complete Data15038.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data15039.sql -o Data15039.sql.txt
echo Batch complete Data15039.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data15040.sql -o Data15040.sql.txt
echo Batch complete Data15040.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data15041.sql -o Data15041.sql.txt
echo Batch complete Data15041.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data15042.sql -o Data15042.sql.txt
echo Batch complete Data15042.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data15043.sql -o Data15043.sql.txt
echo Batch complete Data15043.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data15044.sql -o Data15044.sql.txt
echo Batch complete Data15044.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data15045.sql -o Data15045.sql.txt
echo Batch complete Data15045.sql 

Goto Exit
:Usage
echo Usage
echo Install.bat Server_Name DataBase_Name User_Name Password
:Exit