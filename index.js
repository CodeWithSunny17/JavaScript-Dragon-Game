var score=0;
cross=true;
document.onkeydown=function name(e) {
    
    if (e.key=='ArrowUp') {
        dino=document.querySelector('.dino');
        dino.classList.add('jump');
        setTimeout(() => {
            dino.classList.remove("jump");
        }, 1400);
    }
    if (e.key=='ArrowRight') {
        dino=document.querySelector('.dino');
        dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=dinox+40+"px";
    }
    if (e.key=='ArrowLeft') {
        dino=document.querySelector('.dino');
        dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=dinox-40+"px";
    }

}

setInterval(() => {
    dino=document.querySelector('.dino');
    gameOver=document.querySelector('.gameOver');
    obstacle=document.querySelector('.obstacle');
    scoreCont=document.querySelector('.scoreCont')

    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    xC=Math.abs(ox-dx);
    yC=Math.abs(oy-dy);
    console.log(xC, yC);

    if(xC<200 && yC<15){
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove("obAnimation");
        scoreCont.style.visibility = 'hidden';
    }
    else if(xC<199 && cross){
        score+=1;
        updateScore(score);
        cross=false;
        setTimeout(() => {
            cross=true;
        }, 1000);
    }
}, 100);
// console.log(score);

function updateScore(score){
    document.querySelector('.scoreCont').innerHTML ='YOUR SCORE: '+score;
    document.querySelector('.finalScore').innerHTML ='YOUR SCORE: '+score;
}
