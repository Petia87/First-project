const play = document.querySelector('.play')
const pause = document.querySelector('.pause')
const video = document.querySelector('video')
const progress = document.querySelector('.progress')
const volume= document.querySelector('.volume')

play.addEventListener('click',function() {
    video.play()
})
pause.addEventListener('click',function() {
    video.pause()
})

video.addEventListener('timeupdate',function() {
    progress.value=video.currentTime/video.duration
})
volume.addEventListener('change',function (e) {
    video.volume=e.currentTarget.value/100
})

/*const vid eoPlayer = document.querySelector(".video-player")
const video = videoPlayer.querySelector(".video")
const playerButton = videoPlayer.querySelector(".play-button")


//Play and Pause button

*/
