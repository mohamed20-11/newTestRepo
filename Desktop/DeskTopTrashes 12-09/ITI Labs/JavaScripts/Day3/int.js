// function openPopup(){
    
//        open('http://www.linkedIn.com','blank',window)
    
// }
var id
function OpenNew(){
setTimeout(function(){
  id=   window.open("https://www.linkedin.com/","blank",window).document.write("<p>Lorem Inspom Lorem Inspom Lorem Inspom Lorem Inspom Lorem Inspom Lorem Inspom Lorem Inspom Lorem Inspom Lorem Inspom Lorem Inspom Lorem Inspom Lorem Inspom </p>")

} , 3000);


function closeWin()
{
    id.close()
}
}