var score = 0;
cross = true;
temp=0;
document.onkeydown = function name(e) {

    if (e.key == 'ArrowUp') {
        dino = document.querySelector('.dino');
        dino.classList.add('jump');
        setTimeout(() => {
            dino.classList.remove("jump");
        }, 900);
    }
    if (e.key == 'ArrowRight') {
        dino = document.querySelector('.dino');
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinox + 40 + "px";
    }
    if (e.key == 'ArrowLeft') {
        dino = document.querySelector('.dino');
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinox - 40 + "px";
    }
}

setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');
    scoreCont = document.querySelector('.scoreCont')

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    xC = Math.abs(ox - dx);
    yC = Math.abs(oy - dy);
    // console.log(xC, yC);

    if (xC < 100 && yC < 15) {
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove("obAnimation");
        scoreCont.style.visibility = 'hidden';
    }
    else if (xC < 99 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);

        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.2;
            obstacle.style.animationDuration = newDur + 's';
            
            // temp=newDur+1+'s';
            console.log(newDur);
        }, 500);

    }

}, 100);

// aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));

// console.log(score);
// obAnimation=document.querySelector('.obAnimation')
// aniDur=parseFloat(window.getComputedStyle(obAnimation,null).getPropertyValue('animation-duration'));

// setTimeout(() => {
//     // aniDur=parseFloat(window.getComputedStyle(obAnimation,null).getPropertyValue('animation-duration'));
//     newDur=aniDur-0.1;
//     obstacle.style.animationDuration=newDur+'s';
//     console.log(newDur);
// }, 1000);

function updateScore(score) {
    document.querySelector('.scoreCont').innerHTML = 'YOUR SCORE: ' + score;
    document.querySelector('.finalScore').innerHTML = 'YOUR SCORE: ' + score;
}