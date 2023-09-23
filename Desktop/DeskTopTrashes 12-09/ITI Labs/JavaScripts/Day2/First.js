var arr = [];
var i=0;
while(i<5)
{
    var input = prompt("Enter a number (0-9) :");
    arr.push(input);
    i++;
}
console.log("Original array: " + arr);

arr.sort((a, b) => a - b);
console.log("Array sorted in ascending order: " + arr);

arr.sort((a, b) => b - a);
console.log("Array sorted in descending order: " + arr);
