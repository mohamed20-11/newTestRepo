var nameString=document.getElementById('inp');

var txty=nameString.innerHTML;



function validateName(txty) {
    var regex = /^[a-zA-Z]{3,}$/;
    return regex.test(txty);
  } 
  
function checkValidate(event)
{
    console.log(event.target);
    if(!validateName(event.target.value))
    {
        nameString.style.border=" 3px red solid";

    }
}


//   console.log(validateName("John")); 
//   console.log(validateName("John123")); 
//   console.log(validateName("J")); 
  