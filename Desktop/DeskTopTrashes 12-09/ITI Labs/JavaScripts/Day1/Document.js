 var name;
 var birthYear;
 var age;

  //Prompt the user to enter their name.
 for (var i = 0; i < 3; i++) {
   name = prompt("Enter your name: ");
   if (typeof name === "string") {
     break;
   } else {
     alert("Please enter a valid name.");
   }
 }

// // Prompt the user to enter their birth year.
 for (var i = 0; i < 3; i++) {
   birthYear = prompt("Enter your birth year: ");
   if (typeof birthYear === "number" && birthYear < 2010) {
     break;
   } else {
     alert("Please enter a valid birth year.");
   }
 }

// // Calculate the user's age.
 age = now.getYear() - birthYear + 1900;

// // Display the user's information on the page.
 document.write("<h1>"+name+"</h1>");
 document.write("<h1>"+birthYear+"</h1>");
 document.write("<h1>"+age+"</h1>");




//////////////////// another solution //////////////////


