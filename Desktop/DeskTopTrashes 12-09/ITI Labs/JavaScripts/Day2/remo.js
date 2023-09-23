var n = parseInt(prompt("Enter number of elements :"));
var arr = [];
var i=0;
while(i<n)
{
    var input = prompt("Enter Array Elements :");
    arr.push(input);
    i++;
}


var x=prompt("Enter an element to find it's index");

document.write("<h4>Input Number: " + n);
document.write("<br>" );
document.write("<h4>Input Lis : " + arr);
document.write("<h4><br>" );
document.write("<h4>Input Index : " + x);
document.write("<br>" );
arr.splice(x, 1);




document.write("<h4>Output: " + arr);
