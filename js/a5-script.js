//Arrays
//Images
var myImages = ["https://hashepsit.github.io/bc-prog109/img/a9/dress1.jpg", 
                "img/a9/wedding-dress2.jpg", 
                "img/a9/wedding-dress3.jpg", 
                "img/a9/wedding-dress4.jpg",
                "img/a9/wedding-dress6.jpg",
                "img/a9/wedding-dress8.jpg"];

//Image descriptions
var captions = ["A beautiful gold-tone silhoutte wedding dress, with a short"+
                " fluffy veil. Detailed beadwork that will make this dress " +
                "an instant show stopper!", 
                
                "A princess wedding dress with a sweetheart neckline. A simple" +
                "  mid-length veil with beautiful embroidery at the ends.", 
                
                "A detailed lace wedding dress with a straight across neckline." +
                " Includes a beautiful simple yet elegant veil with embroidered" +
                "vcutouts at the edges.", 
                
                "Vintage style wedding dress, with illusion neckline and back." +
                " To add to the vintage feel, partnered with an elegant flower hat"+
                " with a short net veil.",
                
                "Simple retro, tea-length wedding dress with a cute flower" +
                " headband, and belt to accentuate figure.",
               
                "Simple yet elegant wedding dress with a sweetheart neckline." +
                " Partnered with a simple crownlike headband for a princess look.",
               ];

//Variables
//Images
var currentImage = 0;
var slideshow = document.getElementById("slideshow");
var captionText = document.getElementById("caption");

//Music
var music = new Audio("img/a9/Canon.mp3");



//1. Find the objects that have events
//Slideshow
var next = document.getElementById("next");
var previous = document.getElementById("previous");
var stop = document.getElementById("stop");

var imageTimer = setInterval(nextImage, 5000);
//Music
var musicOnButton = document.getElementById("musicOn")
var musicOffButton = document.getElementById("musicOff");


//2. Define the functions that will be executed through the event
//Slideshow functions
function nextImage(){
  if (currentImage === myImages.length - 1)
    currentImage = 0;
  else
    currentImage++;
  
  slideshow.src = myImages[currentImage]; 
  captionText.textContent= captions[currentImage];
}

function previousImage() {
  if (currentImage === 0)
    currentImage = myImages.length - 1;
  else
    currentImage--;
  
  slideshow.src = myImages[currentImage];
  captionText.textContent= captions[currentImage];
}


//---Timer functions-----
function timer(){
  imageTimer;
}

function timerOff(){
  clearInterval(imageTimer);
}


//---Music functions----
function musicOn(){
  music.play();
  music.loop = true;
}

function musicOff(){
  music.pause();
}



//3. Attach the even and functions to the object
window.onload = musicOn();

next.addEventListener("click", nextImage, false);
previous.addEventListener("click", previousImage, false);
stop.addEventListener("click", timerOff, false);

musicOnButton.addEventListener("click", musicOn, false);
musicOffButton.addEventListener("click", musicOff, false);
