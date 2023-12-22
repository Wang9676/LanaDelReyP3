//scroll up
window.onscroll = function (){
    scrollVinyl()
    scrollMerch()
    scrollLana()
};


function scrollVinyl(){
    if(document.body.scrollTop > 620 || document.documentElement.scrollTop > 620) {
        document.getElementById("vinylPic").className="slideUp";
    }
    else{
        document.getElementById("vinylPic").className = "";

    }
}

function scrollMerch(){
    if(document.body.scrollTop > 620 || document.documentElement.scrollTop > 620) {
        document.getElementById("merchPic").className="slideUp1";
    }
    else{
        document.getElementById("merchPic").className = "";

    }
}
function scrollLana(){
    if(document.body.scrollTop > 2 || document.documentElement.scrollTop > 2) {
        document.getElementById("Big").className="slideRight";
    }
    else{
        document.getElementById("Big").className = "";

    }
}
function playAudio() {
    var x = document.getElementById("song");
    x.play();
}

function pauseAudio() {
    var x = document.getElementById("song");
    x.pause();
}

// Update playing status
function updatePlayingStatus() {
    var x = document.getElementById("song");
    x.onplaying = function() {
        playing = true;
    };

    x.onpause = function() {
        playing = false;
    };
}

// Call the function to update playing status when the page loads
window.onload = updatePlayingStatus;

