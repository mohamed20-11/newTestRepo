var pal=prompt("Enter a string to check :")


function isPalindrome(s)
{
    return s===s.split("").reverse().join("")? true : false;
}
alert(isPalindrome(pal));

if(isPalindrome)
{
    document.writeln("input : "+ pal);
    document.write("<br>" );
    document.writeln("Output : Yes" );
    document.write("<br>" );
}
else 
{
    document.writeln("input : "+ pal);
    document.write("<br>" );
    document.writeln("Output : No" );
}