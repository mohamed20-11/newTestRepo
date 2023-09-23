 use test


 create table customers
 (
 customer_id int  not null primary key,
 Fname varchar(20) not null ,
 lname varchar(20) not null,
 email varchar not null ,
 phone varchar(11)
  );

 alter table customers
 add zip_Code int ,
 Fax varchar(10);


 alter table customers
 --alter column streat varchar(40);
 alter 
column lname varchar(40) null;


alter table customers 
add constraint phoneNumber unique(phone)

use New_company

Create table brands 
(
brand_id int not null,
brand_name varchar(20),
);

alter table brands 
add constraint brands_pk primary key(brand_id)



alter table products 
add constraint brands_products_fk foreign key (brand_id)
references brands(brand_id)


exec sp_rename 'brands', 'Brands'



Update brands 
set brand_name= 'Twon'
where brand_id =2

delete from brands where brand_name='zara'


use AdventureWorks2012

select Distinct City from Person.Address 
order by City desc

use New_Company


CREATE TABLE Custs (
    Custs_ID INT IDENTITY(1,1) PRIMARY KEY,
    FName VARCHAR(50),
	LName VARCHAR(50)
);

CREATE TABLE Orders (
    Order_ID INT IDENTITY(1,1) PRIMARY KEY,
    Column1 VARCHAR(50),
    Order_status INT,
	Order_Date Date Default getDAte() not Null,
    Custs_ID INT
	);
	select * from Orders;
	--alter table Orders
	--add Order_Date Date default GetAte()


--SELECT TOP 10
--    NEWID(),
--    ABS(CHECKSUM(NEWID())) % 1000,
--    RAND(),
--    DATEADD(day, ABS(CHECKSUM(NEWID())) % 3650, '20100101'),
--    CAST(RAND() * 1000 AS DECIMAL(10,2))
--FROM sys.all_columns;

--INSERT INTO Table2 (Column1, Column2, Column3, Column4, Column5)
--SELECT TOP 10
--    NEWID(),
--    ABS(CHECKSUM(NEWID())) % 1000,
--    RAND(),
--    DATEADD(day, ABS(CHECKSUM(NEWID())) % 3650, '20100101'),
--    CAST(RAND() * 1000 AS DECIMAL(10,2))
--FROM sys.all_columns;




alter table Orders
Add Order_Name varchar(30) ;



alter TABLE [dbo].[Orders]
drop COLUMN [Column1];

select [Order_ID] as 'Order Number' , [FName] as 'Customer`s Name',C.Custs_ID as'Customer ID' , O.Custs_ID as 'Cust_ID In Orders' , O.[Order_Name] as 'Order Name'
from Orders O Full Outer Join Custs C 
on 
C.Custs_ID=O.Custs_ID
Order by C.Custs_ID

select * from Orders where Custs_ID is null

select * from Custs
select * from Orders