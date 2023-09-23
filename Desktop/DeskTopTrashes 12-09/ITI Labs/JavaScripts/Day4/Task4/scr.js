
function createImage() {

    var img = document.createElement("img");

  img.setAttribute("src", "d1.jpeg");

  var div = document.getElementById("myDiv");
  // اجابة السؤال اللي في التاسك : 
  // Using appendChild() will add the image as the last child of the div
  div.appendChild(img);
  // اجابة السؤال اللي في التاسك : 
  // Using insertBefore() will add the image as the first child of the div
  //div.insertBefore(img, div.firstChild);
  alert("The number of child nodes in the div is " + div.childNodes.length);
  // عدد الـ nodes :
  // The count of div child nodes depends on hwo many elments are inside the div and whether there are any whitespace or text nodes beteween them
  // For example, if the div has no other elements, then appendChild() will result in one child nod
  // But if the div has a line break or somee text before or aftere the image, then there will be moor child nodes
  div.removeChild(img);
}
