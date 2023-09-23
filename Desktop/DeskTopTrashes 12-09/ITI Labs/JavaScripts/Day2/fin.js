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


for(var j =0; j<n;j++)
{
    if(arr[j]==x)
    {
        var k = j ;
        break;
    }

    
}
document.writeln("<h3>Your array is "+arr+"</h3>");

document.writeln("<h3>Your index is "+k+"</h3>");



var c=prompt("Enter an element to find it's index again");
document.writeln("<h3>Your index is "+arr.indexOf(c)+"</h3>");


