import { notes } from "../data/notes.js";

function generatePiano(){
  const pianoContainer = document.querySelector('.js-piano-container');
  let html = "";

  notes.forEach((note, i) => {
    html += `<button class="key-${note.pianoKeyId} js-key ${note.keyColor}-key"
              data-piano-key-id="${note.pianoKeyId}"
    ></button>`;
   

  });
 pianoContainer.innerHTML = html;

};

generatePiano()



