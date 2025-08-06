export function playAudio(vol) {
  const audio = new Audio('data/RTS-OST.mp3');

  
  audio.addEventListener('loadedmetadata', () => {
    const savedTime = parseFloat(localStorage.getItem("audioTime")) || 0;
    
    
    if (savedTime >= audio.duration) {
      audio.currentTime = 0;
    } else {
      audio.currentTime = savedTime;
    }
    audio.volume = vol;
    audio.play();
  });

  
  window.onbeforeunload = () => {
    localStorage.setItem('audioTime', audio.currentTime);
    console.log("Saved time:", audio.currentTime);
  };
};



function waitForUserInteractionThenPlay() {
  const startAudio = () => {
    playAudio(1);
    // Remove all event listeners after triggering once
    ['mousemove', 'click', 'keydown', 'scroll'].forEach(event => {
      document.removeEventListener(event, startAudio);
    });
  };

  // Add multiple event listeners for various interactions
  ['mousemove', 'click', 'keydown', 'scroll'].forEach(event => {
    document.addEventListener(event, startAudio, { once: true });
  });
}

waitForUserInteractionThenPlay();