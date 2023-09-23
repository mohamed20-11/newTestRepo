var students = [
    { name: "Mohamed", degree: 80 },
    { name: "Mahmoud", degree: 95 },
    { name: "Gemmey", degree: 100 },
    { name: "Syed", degree: 85 },
  ];
  
//   var studentsWithDegreeBetween90And100 = students.filter((student) => {
//     return student.degree >= 90 && student.degree <= 100;
//   });
//   console.log(studentsWithDegreeBetween90And100[0].name);

for(var i=0;i<students.length;i++)
{
    if(students[i].degree>=90 && students[i].degree<=100)
    {
        document.write("<h2>Student : "+students[i].name+" has a degree between 90 & 100</h2>")
    };
};

  
  students.push({ name: "Alex", degree: 90 });
  document.write("<hr>")
  document.write("<h2>You Pushed Student : "+students[i].name+" and his degree is : "+students[i].degree+"</h2>");
  document.write("<hr>")
 
var deletedStudent=students.pop();
  
  document.write("<h2>You Deleted Student : "+deletedStudent.name+" and his degree is : "+deletedStudent.degree+"</h2>");

  

  students.sort((a, b) => {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  document.write("<hr>")

  document.write("<h2>Your Array After Sorting According To Names : </h2>")

  document.write("<hr>")
  
  for(var r=0; r < students.length;r++)
  {
    document.write("<h2>Student : "+students[r].name+" has a degree : "+students[r].degree+"</h2>")
  }

  