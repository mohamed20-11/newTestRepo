CREATE DATABASE AdventureWorks_snapshot
ON (NAME = AdventureWorks2012_Data,
FILENAME = 'D:\New folder (3)AdventureWorks_data_1800.ss')
AS SNAPSHOT OF [AdventureWorks2012];



