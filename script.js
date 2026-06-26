const video = document.getElementById("video");

const button = document.getElementById("btn");

button.onclick = function(){

    if(video.style.display=="none"){

        video.style.display="block";

        video.play();

    }

    else{

        if(video.paused){

            video.play();

        }

        video.style.display="none";

    }

}