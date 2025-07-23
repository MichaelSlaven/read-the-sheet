const pauseMenu = document.querySelector('.js-pause-menu');

export function displayPauseMenu() {
  pauseMenu.style.setProperty('opacity', '1');
  pauseMenu.style.setProperty('z-index', '2');
}

export function hidePauseMenu(){
    pauseMenu.style.setProperty('opacity', '0');
  pauseMenu.style.setProperty('z-index', '-2');
}