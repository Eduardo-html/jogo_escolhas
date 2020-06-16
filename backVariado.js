var imageCount = 0;
var currentImage = 0;
var images = new Array();
 
images[0] = 'https://cdn.pixabay.com/photo/2020/03/15/18/36/hands-4934590_960_720.jpg';
images[1] = 'https://cdn.pixabay.com/photo/2020/03/15/07/08/chemistry-4932607_960_720.jpg';
images[2] = 'https://cdn.pixabay.com/photo/2020/02/10/04/56/virus-4835301_960_720.jpg';
images[3] = 'https://cdn.pixabay.com/photo/2020/03/22/16/17/coronavirus-4957673_960_720.jpg';
images[4] = 'https://cdn.pixabay.com/photo/2020/03/23/05/13/corona-4959447_960_720.jpg';
 
var preLoadImages = new Array();
for (var i = 0; i < images.length; i++)
{
   if (images[i] == "")
      break;
 
   preLoadImages[i] = new Image();
   preLoadImages[i].src = images[i];
   imageCount++;
}
 
function startSlideShow()
{
   if (document.body && imageCount > 0)
   {
      document.body.style.backgroundImage = "url("+images[currentImage]+")";    
      document.body.style.backgroundAttachment = "fixed";
      document.body.style.backgroundRepeat = "repeat";
      document.body.style.backgroundPosition = "left top";
 
      currentImage = currentImage + 1;
      if (currentImage > (imageCount-1))
      { 
         currentImage = 0;
      }
      setTimeout('startSlideShow()', 1000);
   }
}
startSlideShow();