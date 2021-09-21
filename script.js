const videoElement = document.querySelector('#video');
const button = document.querySelector('#button');

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try{
        // Web API
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (err) {
        // Catch Error
        console.error(`🎇${err}`);
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

//  On Load
selectMediaStream();