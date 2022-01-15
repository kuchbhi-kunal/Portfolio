//preloader

var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none"

})

var mySong = document.getElementById("mySong")
var button = document.getElementById ("song")

button.onclick = function(){
    if (mySong.paused){
        mySong.play();
    }else
    mySong.pause();
}