var imgDivs =document.getElementsByClassName('imgs');
var imgSrc=document.getElementById('imgsrc');
var images = ["d.jpeg", "d2.jpeg", "d1.jpeg"];
var i=0;
function moveNext()
{
    document.getElementById("imgsrc").src = images[i];
         i++;
         if (i > images.length - 1)
             i = 0;
}
var j = 1;

function movePrev()
{
    document.getElementById("imgsrc").src = images[j];
         j--;
         if (j <=0 )
             j = images.length-1;
}
var idr=0;
function startSliding()
{
    idr=   setInterval(function moveNext()
    {
       document.getElementById("imgsrc").src = images[i];
             i++;
             if (i > images.length - 1)
                 i = 0;
    }, 100);
    
}


function stopSliding()
{
    clearInterval(idr);
}
