const play = document.querySelector('.play')
const pause = document.querySelector('.pause')
const video = document.querySelector('video')
const progress = document.querySelector('.progress')
const volume = document.querySelector('.volume')
//const videoElement = document.getElementById('video');
const pipButton = document.getElementById('pipButton');

play.addEventListener('click', function () {
    video.play()
})
pause.addEventListener('click', function () {
    video.pause()
})

video.addEventListener('timeupdate', function () {
    progress.value = video.currentTime / video.duration
})
volume.addEventListener('change', function (e) {
    video.volume = e.currentTarget.value / 100
})


if ('pictureInPictureEnabled' in document) {
    pipButton.classList.remove('hidden')
    pipButton.disabled = false;
    
    pipButton.addEventListener('click', () => {
      if (document.pictureInPictureElement) {
        document
          .exitPictureInPicture()
          .catch(error => {
            // Error handling
          })
      } else {
        video
        .requestPictureInPicture()
        .catch(error => {
          // Error handling
        });
      }
    });
  }
  
  video.addEventListener('enterpictureinpicture', () => {
      pipButton.textContent = '■';
  });
  
  video.addEventListener('leavepictureinpicture', () => {
      pipButton.textContent = '□';
  });
/*
// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Catch Error Here
  }
}

button.addEventListener('click', async () => {
  // Disable Button
  button.disabled = true;
  // Start Picture in Picture
  await videoElement.requestPictureInPicture();
  // Reset Button
  button.disabled = false;
});

// On Load
selectMediaStream();*/
