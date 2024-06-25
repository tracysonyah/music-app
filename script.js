document.addEventListener("DOMContentLoaded", () => {

    const playButton = document.querySelector(".ri-play-circle-fill");
    const firstAudio = document.getElementById("first-audio");
    const repeatButton = document.querySelector(".ri-repeat-line");

    let repeatSong = false
    
    playButton.addEventListener("click", () => {
        if(firstAudio.paused) {
            console.log("yes!");
            firstAudio.play();
            playButton.classList.remove(".ri-play-circle-fill");
            playButton.classList.add(".ri-pause-fill");
            playButton.className = "ri-pause-fill"
        }
        else {
            console.log("yes!");
            firstAudio.pause();
            playButton.classList.remove(".ri-pause-fill");
            playButton.classList.add(".ri-play-circle-fill");
            playButton.className = "ri-play-circle-fill";
        }
        
    });

    repeatButton.addEventListener("click", () => {
        console.log("yes!");
        repeatSong = !repeatSong;
    });

    firstAudio.addEventListener("ended", () => {
        if(repeatSong) {
            firstAudio.play();
        }
    })




})

