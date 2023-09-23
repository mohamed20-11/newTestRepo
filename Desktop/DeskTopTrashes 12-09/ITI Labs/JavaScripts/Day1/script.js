let alphaReg= /[^a-z]/ig;

var txt=prompt("Enter a text:");
for(var i=1; i<7;i++)
{
    document.write("<h"+i+">"+txt+"  </h"+i+">")
};

var myName=prompt("Enter Your Name!")


var number = parseInt(prompt("Please enter your birth date before 2010", ""));

if (number < 2010) {
    document.write("Your birth date (" + number + ") is matches requirements", "");
} else if (isNaN(number)) {
  number=  parseInt(prompt("It is not match . Please enter again", ""));
} else{
   number= parseInt(prompt("Your birth date (" + number + ") is not matches Please enter again", ""));
}
var age=2023-parseInt(number);
document.write("<h3>Name : "+myName+"</h3>")
document.write("<h3>Birth Year : "+number+"</h3>")
document.write("<h3>Age : "+age+"</h3>")



age=prompt("Enter your age in years :")
age=parseInt(age)*30*12;
document.write("<hr>")
document.write("<h3>Your Age in days is  : "+age+"</h3>")
if(age%2==0)
{
    document.write("<h3>your age is even</h3>")
}
else
{
    document.write("<h3>your age is odd</h3>")
}


