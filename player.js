let x = document.getElementById("vplayer"); 


function playVideo() { 
    x.play(); 
} 

function pauseVideo() { 
    x.pause(); 
} 


function prevVideo() { 
    x.pause(); 
} 


function nextVideo() { 
    x.pause(); 
} 



/*
let buttonPlay=document.getElementById('player').play()
let buttonPause=document.getElementById('player').pause()
let buttonValue1=document.getElementById('player').volume+=0.1
let buttonValue2=document.getElementById('player').volume-=0.1


if (command==buttonPlay) {
    buttonPlay.style.display='inline'
    buttonPause.style.display='none'
} else if (command==buttonPause) {
    buttonPlay.style.display='none'
    buttonPause.style.display='inline'
}
let command=0
if (command==buttonPlay) {
    buttonPlay.style.display='inline'
    
} else {
    buttonPlay.style.display='none'
 
}
function playPause() {
   let  mediaPlayer = document.getElementById('player');
    if (mediaPlayer.paused) {
        mediaPlayer.play(); 
        buttonPlay.style.display='inline'
        buttonPause.style.display='none'
    } else {
        mediaPlayer.pause(); 
        buttonPlay.style.display='none'
        buttonPause.style.display='inline'
    }
}
*/
console.log(1);