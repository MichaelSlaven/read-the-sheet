import { playNote } from "./piano.js";

const pauseMenu = document.querySelector('.js-pause-menu');

export function displayPauseMenu(score) {
  document.querySelector('.js-pause-score').innerHTML= `your score is: ${score}`;
   
  

  
  pauseMenu.style.setProperty('opacity', '1');
  pauseMenu.style.setProperty('z-index', '2');
  playNote('B4')
}

export function hidePauseMenu(){
  pauseMenu.style.setProperty('opacity', '0');
  pauseMenu.style.setProperty('z-index', '-2');
  playNote("C1")
}