
import { notes } from "../data/notes.js";
import { generateNote } from "./notes.js";
import { displayPauseMenu, hidePauseMenu } from "./pauseMenu.js";
import { playNote } from "./piano.js";



let isGamePlaying = false;
let hp;

let speedPerSecond = 100; 
let lastTimestamp = null;

updateHighscore();

function startGameLoop() {
  isGamePlaying = true;
  hp = 3;
  lastTimestamp = null;
  requestAnimationFrame(gameLoop);
}

function stopGame() {
  isGamePlaying = false;
  alert('Game over');
  saveHighscore();
  location.reload(); 
}

function gameLoop(timestamp) {
  if (!isGamePlaying) return;

  if (!lastTimestamp) lastTimestamp = timestamp;

  const deltaTime = (timestamp - lastTimestamp) / 1000; 
  lastTimestamp = timestamp;

  const notes = document.querySelectorAll('.js-note');

  notes.forEach((note) => {
    const currentDistance = parseFloat(note.style.left.replace('px', '')) || 0;
    const newDistance = currentDistance - speedPerSecond * deltaTime;

    note.style.left = `${newDistance}px`;

    if (newDistance < 100 && note.classList.contains('js-active-note')) {
      hp--;
      updateHP();
     
    }

    if (newDistance < 100) {
      note.remove();
      generateNote(1500);
    }
  });

  if (hp <= 0) {
    stopGame();
    return;
  }

  requestAnimationFrame(gameLoop);
}






const scoreElement  = document.querySelector('.js-score');

let score = 0;

document.querySelectorAll('.js-key').forEach((key) => {

  key.addEventListener('mousedown', ()=>{
  if(isGamePlaying){

    const firstNote = document.querySelector('.js-active-note');
      if(!firstNote){
      return
    }

    if( key.classList.contains('clicked')){ // click cooldown
      return
    };
    key.classList.add('clicked');
    
    if(key.dataset.pianoKeyId === firstNote.dataset.pianoKeyId){
      console.log(key.dataset.pianoKeyId)
      firstNote.classList.remove('js-active-note')
      firstNote.style.opacity = '0'
      score++
      scoreElement.innerHTML = `Score: ${score}`;
      playNote(firstNote.dataset.frequencyId)

    }else{ // wrong note clicked
      console.log(1)
      hp--;
      updateHP();
      shakeScreen()
    }

    setTimeout(()=>{
      key.classList.remove('clicked');

    },200)

      if (score % 1 === 0) {
        speedPerSecond += 7;
      
 
     
    }
  }else{
      alert("your game is paused")
  };

  if(score % 10 === 0 && score !== 0 ){
    hp++;
    updateHP();
  }


})


})


const pauseButton = document.querySelector('.js-pause-button');

pauseButton.addEventListener('click',()=>{
   if(!isGamePlaying){
    isGamePlaying = true;
    hidePauseMenu()
    startGameLoop();
    pauseButton.innerHTML = '||'
    }else{
    isGamePlaying = false;
    displayPauseMenu();
    
    pauseButton.innerHTML = ' &#9655'

  }
});

function updateHP(){
  document.querySelector('.js-health-points').innerHTML = `Hp: ${hp}`
};

function saveHighscore(){
  let currentHighscore = localStorage.getItem('highscore');
 

  if (score > currentHighscore){
    localStorage.setItem('highscore', score)
  }
  updateHighscore()
;}

function updateHighscore(){
  let highscore = localStorage.getItem('highscore');
  if(!highscore){
     document.querySelector('.js-highscore').innerHTML = `Highscore: 0`;
  }else{
    document.querySelector('.js-highscore').innerHTML = `Highscore: ${highscore}`;
  }
  
}


 function shakeScreen() {
  document.body.classList.add("shake");
  setTimeout(() => {
    document.body.classList.remove("shake");
  }, 500); 
}







