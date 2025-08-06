

import { generatePiano, playNote } from "../piano.js";

generatePiano();


const synth = new Tone.Synth().toDestination();
const now = Tone.now();

document.querySelectorAll('.js-key').forEach((key)=>{
  key.addEventListener('mousedown', ()=>{


   playNote(key.dataset.pianoFrequencyId)
     key.classList.add('clicked');
  })

  key.addEventListener('mouseup',()=>{
     key.classList.remove('clicked');
    synth.triggerRelease(now + 1)
  });

  key.addEventListener('mouseleave', () => {
    key.classList.remove('clicked');
      synth.triggerRelease(now + 1)
  });
})



