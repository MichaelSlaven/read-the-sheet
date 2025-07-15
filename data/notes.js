

export const notes = [
  {
    name: 'C',
    keyColor: 'white',
    position: ['26%', '113.5%'],
    aidLine: ['noLine', 'aid-line'],
    aidlinePosition: [false, '50%'],
    accidentalName: '',
    accidental: '',
    pianoKeyId: '1'
  },
  {
    name: 'C#',
    keyColor: 'black',
    position: ['26%', '113.5%'],
    aidLine: ['noLine', 'aid-line'],
    aidlinePosition: [false, '50%'],
    accidentalName: 'sharp',
    accidental: '#',
    pianoKeyId: '2'
  },
  {
    name: 'Db',
    keyColor: 'black',
    position: ['13.5%', '101%'],
    aidLine: ['noLine', 'noLine'],
    aidlinePosition: [false, false],
    accidentalName: 'flat',
    accidental: '♭',
    pianoKeyId: '2'
  },
  {
    name: 'D',
    keyColor: 'white',
    position: ['13.5%', '101%'],
    aidLine: ['noLine', 'noLine'],
    aidlinePosition: [false, false],
    accidentalName: '',
    accidental: '',
    pianoKeyId: '3'
  },
  {
    name: 'D#',
    keyColor: 'black',
    position: ['13.5%', '101%'],
    aidLine: ['noLine', 'noLine'],
    aidlinePosition: [false, false],
    accidentalName: 'sharp',
    accidental: '#',
    pianoKeyId: '4'
  },
  {
    name: 'Eb',
    keyColor: 'black',
    position: ['1%', '88.5%'],
    aidLine: ['noLine', 'noLine'],
    aidlinePosition: [false, false],
    accidentalName: 'flat',
    accidental: '♭',
    pianoKeyId: '4'
  },
  {
    name: 'E',
    keyColor: 'white',
    position: ['1%', '88.5%'],
    aidLine: ['noLine', 'noLine'],
    aidlinePosition: [false, false],
    accidentalName: '',
    accidental: '',
    pianoKeyId: '5'
  },
  {
    name: 'F',
    keyColor: 'white',
    position: ['-11.5%', '76%'],
    aidLine: ['noLine', 'noLine'],
    aidlinePosition: [false, false],
    accidentalName: '',
    accidental: '',
    pianoKeyId: '6'
  },
  {
    name: 'F#',
    keyColor: 'black',
    position: ['-11.5%', '76%'],
    aidLine: ['noLine', 'noLine'],
    aidlinePosition: [false, false],
    accidentalName: 'sharp',
    accidental: '#',
    pianoKeyId: '7'
  },
  {
    name: 'Gb',
    keyColor: 'black',
    position: ['-24%', '63.5%'],
    aidLine: ['noLine', 'noLine'],
    aidlinePosition: [false, false],
    accidentalName: 'flat',
    accidental: '♭',
    pianoKeyId: '7'
  },
  {
    name: 'G',
    keyColor: 'white',
    position: ['-24%', '63.5%'],
    aidLine: ['noLine', 'noLine'],
    aidlinePosition: [false, false],
    accidentalName: '',
    accidental: '',
    pianoKeyId: '8'
  },
  {
    name: 'G#',
    keyColor: 'black',
    position: ['-24%', '63.5%'],
    aidLine: ['noLine', 'noLine'],
    aidlinePosition: [false, false],
    accidentalName: 'sharp',
    accidental: '#',
    pianoKeyId: '9'
  },
  {
    name: 'Ab',
    keyColor: 'black',
    position: ['-36.5%', '51%'],
    aidLine: ['aid-line', 'noLine'],
    aidlinePosition: ['50%', false],
    accidentalName: 'flat',
    accidental: '♭',
    pianoKeyId: '9'
  },
  {
    name: 'A',
    keyColor: 'white',
    position: ['-36.5%', '51%'],
    aidLine: ['aid-line', 'noLine'],
    aidlinePosition: ['50%', false],
    accidentalName: '',
    accidental: '',
    pianoKeyId: '10'
  },
  {
    name: 'A#',
    keyColor: 'black',
    position: ['-36.5%', '51%'],
    aidLine: ['aid-line', 'noLine'],
    aidlinePosition: ['50%', false],
    accidentalName: 'sharp',
    accidental: '#',
    pianoKeyId: '11'
  },
  {
    name: 'Bb',
    keyColor: 'black',
    position: ['38.5%', '38.5%'],//nur notfall l;sung , es muss noch das richitge rendering hinyugef[]gt werden
    aidLine: ['noLine', 'noLine'],
    aidlinePosition: [false, false],
    accidentalName: 'flat',
    accidental: '♭',
    pianoKeyId: '11'
  },
  {
    name: 'B',
    keyColor: 'white',
    position: ['38.5%', '38.5%'],
    aidLine: ['noLine', 'noLine'],
    aidlinePosition: [false, false],
    accidentalName: '',
    accidental: '',
    pianoKeyId: '12'
  },
]







export function getNoteByName(noteName){
  let matchingNote;

  notes.forEach((note) =>{
    if(note.name === noteName){
      matchingNote = note;
    };
  });
  return matchingNote;
};

export function randomNumber(min, max){
   min = Math.ceil(min);
    max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


