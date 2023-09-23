nums=parseInt(prompt("Enter numbers to sum:"));
var res=parseInt("0");
if(nums !=0)
{
    while(res<=100)
    {
        
    res +=nums;
    
        nums=parseInt(prompt("Your sum = " + res + "    Enter a new value:"));
    
        if(res >= 100)
        {
            document.write("You Encountred 100 !");
            break;
        }
        if(nums==0)
        {
        
            break;
        }
    }
}
else
{
    document.write("You Entered 0")
}