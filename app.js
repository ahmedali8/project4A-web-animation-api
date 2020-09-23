var horse = document.getElementById("horse");
var clouds = document.getElementById("clouds");
var background = document.getElementById("background");

window.addEventListener("load", function () {
    // CLOUDS
    var cloudsFames = [
        { transform: 'translatex(100%)' },
        { transform: 'translatex(-100%)' }
    ];

    var cloudsTiming = {
        duration: 15000,
        iterations: Infinity
    };

    var cloudMovement = clouds.animate(cloudsFames, cloudsTiming);
    cloudMovement.currentTime = cloudMovement.effect.getTiming().duration / 2;


    // HORSE
    var horseFames = [
        { transform: 'translatex(0)', opacity: 0.9 },
        { transform: 'translatex(1000px)', opacity: 1 }
    ];

    var horseTiming = {
        duration: 3000,
        fill: 'forwards',
        iterations: Infinity
    };

    var horseMovement = horse.animate(horseFames, horseTiming);


    setTimeout(() => {
        background.loading = "lazy";
        background.style.backgroundImage = 'url(images/bg.jpg)';
    }, 3000);


    setInterval(function () {
        if (horseMovement.playbackRate > 0.4) {
            horseMovement.playbackRate *= 0.9;
        }
    }, 3000);


    var goFaster = function () {
        cloudMovement.playbackRate *= 1.2;
        horseMovement.playbackRate *= 1.2;

        console.log('faster');
    };


    document.addEventListener('click', goFaster);
    document.addEventListener('touchstart', goFaster)
})