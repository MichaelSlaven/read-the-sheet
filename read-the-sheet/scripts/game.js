import { generateNote } from "./notes.js";



let isGamePlaying = false;
let intervalId;
let hp = 3 ;

let pixelDistanceDecrease = 1;
let intervalTime =  10;


updateHighscore()
function startGameLoop(){
  clearInterval(intervalId)
   
    intervalId = setInterval(()=>{

      if(hp === 0){
        clearInterval(intervalId);
        alert('game over')
        saveHighscore()
        location.reload();
      }

      document.querySelectorAll('.js-note').forEach((note)=>{
        const currentDistance = parseInt(note.style.left.replace('px', ''), 10) || 0;

        note.style.left = `${currentDistance - pixelDistanceDecrease}px`

         if(currentDistance < 100 && note.classList.contains('js-active-note')){
          hp--;
          updateHP()
          console.log(1)
        }

        if(currentDistance < 100){
          note.remove()
          generateNote(1500)
        }

      })


    },intervalTime)

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

      key.classList.add('clicked');

      if(key.dataset.pianoKeyId === firstNote.dataset.pianoKeyId){
        firstNote.classList.remove('js-active-note')
        firstNote.style.opacity = '0'
        score++
        scoreElement.innerHTML = `Score: ${score}`;

      }else{ // wrong note clicked
        console.log(1)
        hp--;
        updateHP()
      }

      setTimeout(()=>{
        key.classList.remove('clicked')
      },200)

       if (score % 3 === 0) {
        intervalTime -= 1;
        if(intervalTime === 4){
          intervalTime =  10;
          pixelDistanceDecrease += 1;
        }
        startGameLoop();
        console.log(intervalTime)
        console.log(pixelDistanceDecrease)
        
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


const pauseButton = document.querySelector('.js-pause-button')
pauseButton.addEventListener('click',()=>{
   if(!isGamePlaying){
    isGamePlaying = true;
    startGameLoop();
    pauseButton.innerHTML = '||'
    }else{
    isGamePlaying = false;
    clearInterval(intervalId);
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



