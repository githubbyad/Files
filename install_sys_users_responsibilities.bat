@echo off
if x"%1" == x"" Goto Usage
if x"%2" == x"" Goto Usage
if x"%3" == x"" Goto Usage
if x"%4" == x"" Goto Usage

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data1430.sql -o Data1430.sql.txt
echo Batch complete Data1430.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data1431.sql -o Data1431.sql.txt
echo Batch complete Data1431.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data1432.sql -o Data1432.sql.txt
echo Batch complete Data1432.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data1433.sql -o Data1433.sql.txt
echo Batch complete Data1433.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data1434.sql -o Data1434.sql.txt
echo Batch complete Data1434.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data1435.sql -o Data1435.sql.txt
echo Batch complete Data1435.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data1436.sql -o Data1436.sql.txt
echo Batch complete Data1436.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data1437.sql -o Data1437.sql.txt
echo Batch complete Data1437.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data1438.sql -o Data1438.sql.txt
echo Batch complete Data1438.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data1439.sql -o Data1439.sql.txt
echo Batch complete Data1439.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data1440.sql -o Data1440.sql.txt
echo Batch complete Data1440.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data1441.sql -o Data1441.sql.txt
echo Batch complete Data1441.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data1442.sql -o Data1442.sql.txt
echo Batch complete Data1442.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data1443.sql -o Data1443.sql.txt
echo Batch complete Data1443.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data1444.sql -o Data1444.sql.txt
echo Batch complete Data1444.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data1445.sql -o Data1445.sql.txt
echo Batch complete Data1445.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data1446.sql -o Data1446.sql.txt
echo Batch complete Data1446.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data1447.sql -o Data1447.sql.txt
echo Batch complete Data1447.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data1448.sql -o Data1448.sql.txt
echo Batch complete Data1448.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data1449.sql -o Data1449.sql.txt
echo Batch complete Data1449.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data1450.sql -o Data1450.sql.txt
echo Batch complete Data1450.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data1451.sql -o Data1451.sql.txt
echo Batch complete Data1451.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data1452.sql -o Data1452.sql.txt
echo Batch complete Data1452.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data1453.sql -o Data1453.sql.txt
echo Batch complete Data1453.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data1454.sql -o Data1454.sql.txt
echo Batch complete Data1454.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data1455.sql -o Data1455.sql.txt
echo Batch complete Data1455.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data1456.sql -o Data1456.sql.txt
echo Batch complete Data1456.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data1457.sql -o Data1457.sql.txt
echo Batch complete Data1457.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data1458.sql -o Data1458.sql.txt
echo Batch complete Data1458.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data1459.sql -o Data1459.sql.txt
echo Batch complete Data1459.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data1460.sql -o Data1460.sql.txt
echo Batch complete Data1460.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data1461.sql -o Data1461.sql.txt
echo Batch complete Data1461.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data1462.sql -o Data1462.sql.txt
echo Batch complete Data1462.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data1463.sql -o Data1463.sql.txt
echo Batch complete Data1463.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data1464.sql -o Data1464.sql.txt
echo Batch complete Data1464.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data1465.sql -o Data1465.sql.txt
echo Batch complete Data1465.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data1466.sql -o Data1466.sql.txt
echo Batch complete Data1466.sql 

Goto Exit
:Usage
echo Usage
echo Install.bat Server_Name DataBase_Name User_Name Password
:Exit