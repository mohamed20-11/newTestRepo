var txt=prompt("Enter your txt");
if(isNaN(txt))
{
    document.write(txt)
}
else
{

    for(var i =1; i<3;i++)
    {
        var name=prompt("Enter your name");
    }
}

var birth=prompt("Enter yor birth in year");
if(birth<2010){
    document.write("birth is :"+birth )
}
var age=2023-birth;
document.write("age :"+age)
