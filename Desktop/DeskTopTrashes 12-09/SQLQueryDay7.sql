-- Create a new table and don’t use Identity on the ID column, and use sequence to insert values on ID column.
CREATE TABLE MyTable (
    ID INT PRIMARY KEY,
    Name VARCHAR(50)
);

CREATE SEQUENCE MySequence START WITH 1 INCREMENT BY 1;

--Solveeee 1-:  Insert 3 records in theee tablee using the sequenceeeee.   
INSERT INTO MyTable (ID, Name) VALUES (NEXT VALUE FOR MySequence, 'Record 1');
INSERT INTO MyTable (ID, Name) VALUES (NEXT VALUE FOR MySequence, 'Record 2');
INSERT INTO MyTable (ID, Name) VALUES (NEXT VALUE FOR MySequence, 'Record 3');

--Solveeee 2 :  Delete the second row of the table.
DELETE FROM MyTable WHERE ID = 2;

--Solveeee 2 : Insert 2 other records using the sequence.
INSERT INTO MyTable (ID, Name) VALUES (NEXT VALUE FOR MySequence, 'Record 4');
INSERT INTO MyTable (ID, Name) VALUES (NEXT VALUE FOR MySequence, 'Record 5');

use New_Company


select * from MyTable



--Can you edit the value if the ID column in any of inserted
--records? Try it! 
--ِAnswer
insert into [dbo].[MyTable] (ID,Name)
Values (6,'ٌRecord 6')
select * from MyTable

--Yes We Can Add A new record Without using a sequence ! 

--3 : No, Wheen Identity Weeeee Can do such as that.
--4 : أيوا طبعا !
--5: No It Will Continue frm it's current valueeeeeeee.



--Part2 
use Company
--1 
Create NonClustered index
myNonClusIndex 
On 
[dbo].[Employee] ([isDeleted])

--2 

--Part3

Create Clustered Index
EmpID_Index On
[dbo].[Employees](EmpID)

use New_Company

Create Table Employees
(
EmpID int
);
Use AdventureWorks2012

Select * from [Production].[ProductCategory]
select *  from[Production].[Product]



--- Part4 
-- }عقسخقس 
--Cursorts "Important"
use AdventureWorks2012

DECLARE category_cursor CURSOR FOR
SELECT [ProductCategoryID] , Name FROM [Production].[ProductCategory] ;

DECLARE @CategoryID int;
DECLARE @CategoryName varchar(50);

OPEN category_cursor;

FETCH NEXT FROM category_cursor INTO @CategoryID, @CategoryName;

WHILE @@FETCH_STATUS = 0
BEGIN
    PRINT 'Products of ''' + @CategoryName + ''':';

    DECLARE product_cursor CURSOR FOR
    SELECT p.Name  , [ListPrice] FROM [Production].[ProductSubcategory] P , [Production].[Product] WHERE [ProductCategoryID] = @CategoryID;

    DECLARE @ProductName varchar(50);
    DECLARE @ProductPrice decimal(18,2);

    OPEN product_cursor;

    FETCH NEXT FROM product_cursor INTO @ProductName, @ProductPrice;

    WHILE @@FETCH_STATUS = 0
    BEGIN
        PRINT '• ' + @ProductName + ', and ' + CAST(@ProductPrice AS varchar(10));

        FETCH NEXT FROM product_cursor INTO @ProductName, @ProductPrice;
    END

    CLOSE product_cursor;
    DEALLOCATE product_cursor;

    FETCH NEXT FROM category_cursor INTO @CategoryID, @CategoryName;
END

CLOSE category_cursor;
DEALLOCATE category_cursor;


select * from
[Production].[ProductSubcategory]





----//Bonus:
--Write a query that returns the highest 10 products in
--price (Use Top).

--Answeeeeeere:
SElect Top 10 * from [Production].[Product] 
Order By ListPrice



-- Percentage ? 
--نعملها كأنها عملية حسابية : 

-- A query that returns the highest 10 % products in Table Products by their priceeeeees
-- First, weee  calculate the number of products that aree in the top 10 %

DECLARE @TopCount int;


--From Interneeeeet:
SELECT @TopCount = CEILING(COUNT(*) * 0.1) FROM [Production].[Product];

-- Then, we can use the TOP clause with the calculated number

SELECT TOP (@TopCount) * FROM [Production].[Product] 
ORDER BY ListPrice  DESC;


SELECT TOP (10)PERCENT * FROM [Production].[Product] 
ORDER BY ListPrice  DESC;
