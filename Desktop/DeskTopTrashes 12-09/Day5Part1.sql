--Create Trigger 
--on
--[dbo].[Employee]
--instead of Delete
--Problem1
go
alter TRIGGER SoftDelete
ON [dbo].[Employee]
INSTEAD OF DELETE
AS
BEGIN
    UPDATE Employee SET IsDeleted = 1 WHERE [SSN]  IN (SELECT [SSN] FROM deleted)
	
	
END;
go
delete from Employee where SSN = 321654

go
Create View NotDeletedEmps
as
select * from Employee e where e.isDeleted=0
go

select * from NotDeletedEmps



--Problem2

CREATE TABLE BudgetChangeAudit (
  ID INT IDENTITY(1,1) PRIMARY KEY,
  PrjNo int ,
  UserName varchar(100),
  ModifiedDate Date default GetDate(),
  OldBudget int,
  NewBudget int
);

--Error ? Can't use IF UPDATE Except within a Trigger Statement
--go
--CREATE PROC Trackers
--  @PrjNo INT,
--  @UserName VARCHAR(100),
--  @OldBudget INT,
--  @NewBudget INT
--AS
--BEGIN
--  IF UPDATE([Budget])
--  BEGIN
--    INSERT INTO BudgetChangeAudit (PrjNo, UserName, OldBudget, NewBudget)
--    VALUES (@PrjNo, suser_sname(), @OldBudget, @NewBudget);
--  END;
--END;
--go

go

CREATE TRIGGER trgTrackers
ON Project
AFTER UPDATE
AS
BEGIN
  IF UPDATE([Budget])
  BEGIN
    INSERT INTO BudgetChangeAudit (PrjNo, UserName, OldBudget, NewBudget)
    SELECT i.[Pnumber], suser_sname(), d.Budget, i.Budget
    FROM inserted i JOIN deleted d ON i.[Pnumber] = d.[Pnumber];
	select * from deleted
  END;
END;

go

update Project 
set Budget =4000 
where Pnumber=100



--Stored Procedure

Create Table Inserts
(
Name nvarchar(50),
Salary int ,
LName nvarchar(50)
);



alter PROCEDURE InsertEmployee
    @name nvarchar(50),
    @salary int,
	@LName nvarchar(50)
AS
BEGIN
    INSERT INTO Inserts (Name, Lname , Salary)
    VALUES (UPPER(@name),UPPER(@LName), @salary)
END;

select * from inserts



Exec InsertEmployee @name='hossam ',@LName= 'Hassan' ,@salary= 45650;

Select Upper('Hello World')
--select * from d




CREATE PROCEDURE InsertInDepartment
    
    @age int,
    @department nvarchar(50)
AS
BEGIN
    DECLARE @department_id int;

    SELECT @department_id = id FROM Department WHERE name = @department;

    INSERT INTO Employee (name, age, salary, department_id)
    VALUES (UPPER(@name), @age, @salary, @department_id);
END;



USE [Company]
GO

/****** Object:  Table [dbo].[Departments]    Script Date: 8/29/2023 14:39:26 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE insertInDepartment(
	[Dname] [nvarchar](50) NULL,
	[Dnum] [int] NOT NULL,
	[MGRSSN] [int] NULL,
	[MGRStart Date] [datetime] NULL
	);

	alter PROCEDURE InsertDepartment
    @department nvarchar(50),
    @dnum int,
    @mgrssn int,
    @mgr_start_date datetime
AS
BEGIN
    DECLARE @department_id int;

    SELECT @department_id = [Dnum] FROM [dbo].[Departments] WHERE @department = [Dname] ;

    INSERT INTO insertInDepartment (Dname, Dnum, MGRSSN, [MGRStart Date])
    VALUES (@department, @dnum, @mgrssn, @mgr_start_date);
END;

EXEC InsertDepartment @department= 'Sales', 1, 123456789, '2023-08-29';


alter proc insertmp(
@fname nvarchar(50),
@lname nvarchar(50),
@snn int,
@dname nvarchar(50)
)
as
begin
declare @dno int;

if LEN(@fname)<3
begin
return -1;
end

if LEN(@lname)<3
begin
return -2;
end

if   not exists (select Dnum from Departments where @dname=Departments.Dname)
begin
return -3;
end
begin try
select @dno=Departments.Dnum from Departments where @dname=Departments.Dname
set @fname=upper(@fname);
set @lname=upper(@lname);
insert into Employee (Fname,Lname,SSN,Dno) values(@fname,@lname,@snn,@dno)
return 0;
end try
begin catch
return error_number();
end catch
end;
declare @ret nvarchar(50); 
exec @ret=insertmp  @fname='ali' ,@lname='moo' ,@snn=10456,@dname='DP1';
print 'returun valuer '+cast(@ret as nvarchar(50)); 


select * from Employee