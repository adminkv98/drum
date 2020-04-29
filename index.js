var numberofDrums = document.querySelectorAll(".drum").length;
for(var i=0;i<numberofDrums;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",fun);

//part of mosuse click listener.
function fun(){
  var voice = this.innerHTML;
  makeSound(voice);
  addAnimation(voice);
  document.querySelector(".drum")[i].classList.add("pessed"); //pressed is the class mentioned in CSS file.
}
}
//this part of code is the key press!

document.addEventListener("keypress",function(event){
  makeSound(event.key);
  addAnimation(event.key);
});



//this fuction takes the passed argument as a function
 function makeSound(key){
   switch (key) {
     case "w":
          var crash = new Audio('sounds/tom-1.mp3');
          crash.play();
       break;
       case "a":
            var tom_2 = new Audio('sounds/tom-2.mp3');
            tom_2.play();
       break;
       case "s":
            var tom_3 = new Audio('sounds/tom-3.mp3');
            tom_3.play();
       break;

       case "d":
            var tom_4 = new Audio('sounds/tom-4.mp3');
            tom_4.play();
       break;

       case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
       break;

       case "k":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
       break;

       case "l":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
           break;
     default:

   }
 }

 function addAnimation(key){
   var activekey = document.querySelector("." + key);
   activekey.classList.add("pressed");

   setTimeout(function(){
     activekey.classList.remove("pressed");
   },100)

 }
