txty=prompt("Enter a name:");


function isPalindrome(s) {
    return s === s.split("").reverse().join("") ? true : false;
}

alert(isPalindrome(txty));

