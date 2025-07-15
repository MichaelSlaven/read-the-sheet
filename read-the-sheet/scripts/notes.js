import {notes, getNoteByName, randomNumber} from "../data/notes.js"

const score = []


const staffContainer = document.querySelector('.js-staff-container');
  


let noteId = 0;




export function generateNote(pixelDistance){
  const note = notes[randomNumber(1, 16)].name;
 

  let html = "";
  const n = randomNumber(0,1)

  
  const matchingNote = getNoteByName(note);


  html += `
        <div class="note js-note js-note-${noteId} js-active-note"
        data-piano-key-id="${matchingNote.pianoKeyId}">

          <div class="full-note"></div>
          <div class="${matchingNote.accidentalName}">
            ${matchingNote.accidental}
          </div>
          <div class="${matchingNote.aidLine[n]}"></div>
        </div>
  
  `
  staffContainer.innerHTML += html;
  const generatedNote = document.querySelector(`.js-note-${noteId}`)
  generatedNote.style.top =`${matchingNote.position[n]}`;
  generatedNote.style.left = `${pixelDistance}px`



  noteId++;
}




function generateStartingScore(){
  let pixelDistance = 500;

  for(let i = 0; i < 3; i++){
    generateNote(pixelDistance)
    pixelDistance += 500;
  }

    
}

generateStartingScore()
