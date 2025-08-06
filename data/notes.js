export const notes = [
  {
    name: 'C',
    keyColor: 'white',
    position: ['113.5%', '26%'],
    aidLine: ['aid-line', 'noLine'],
    aidlinePosition: ['50%', false],
    accidentalName: '',
    accidental: '',
    pianoKeyId: '1',
    sound: 'data/pianoSounds/pianoc3.mp3',
    frequency: ['C4', 'C5']
  },
  {
    name: 'C♯',
    keyColor: 'black',
    position: ['113.5%', '26%'],
    aidLine: ['aid-line', 'noLine'],
    aidlinePosition: ['50%', false],
    accidentalName: 'sharp',
    accidental: '♯',
    pianoKeyId: '2',
    frequency: ['C#4', 'C#5']
  },
  {
    name: 'Db',
    keyColor: 'black',
    position: ['101%', '13.5%'],
    aidLine: ['noLine', 'noLine'],
    aidlinePosition: [false, false],
    accidentalName: 'flat',
    accidental: '♭',
    pianoKeyId: '2',
    frequency: ['Db4', 'Db5']
  },
  {
    name: 'D',
    keyColor: 'white',
    position: ['101%', '13.5%'],
    aidLine: ['noLine', 'noLine'],
    aidlinePosition: [false, false],
    accidentalName: '',
    accidental: '',
    pianoKeyId: '3',
    frequency: ['D4', 'D5']
  },
  {
    name: 'D♯',
    keyColor: 'black',
    position: ['101%', '13.5%'],
    aidLine: ['noLine', 'noLine'],
    aidlinePosition: [false, false],
    accidentalName: 'sharp',
    accidental: '♯',
    pianoKeyId: '4',
    frequency: ['D#4', 'D#5']
  },
  {
    name: 'Eb',
    keyColor: 'black',
    position: ['88.5%', '1%'],
    aidLine: ['noLine', 'noLine'],
    aidlinePosition: [false, false],
    accidentalName: 'flat',
    accidental: '♭',
    pianoKeyId: '4',
    frequency: ['Eb4', 'Eb5']
  },
  {
    name: 'E',
    keyColor: 'white',
    position: ['88.5%', '1%'],
    aidLine: ['noLine', 'noLine'],
    aidlinePosition: [false, false],
    accidentalName: '',
    accidental: '',
    pianoKeyId: '5',
    frequency: ['E4', 'E5']
  },
  {
    name: 'F',
    keyColor: 'white',
    position: ['76%', '-11.5%'],
    aidLine: ['noLine', 'noLine'],
    aidlinePosition: [false, false],
    accidentalName: '',
    accidental: '',
    pianoKeyId: '6',
    frequency: ['F4', 'F5']
  },
  {
    name: 'F♯',
    keyColor: 'black',
    position: ['76%', '-11.5%'],
    aidLine: ['noLine', 'noLine'],
    aidlinePosition: [false, false],
    accidentalName: 'sharp',
    accidental: '♯',
    pianoKeyId: '7',
    frequency: ['F#4', 'F#5']
  },
  {
    name: 'Gb',
    keyColor: 'black',
    position: ['63.5%', '-24%'],
    aidLine: ['noLine', 'noLine'],
    aidlinePosition: [false, false],
    accidentalName: 'flat',
    accidental: '♭',
    pianoKeyId: '7',
    frequency: ['Gb4', 'Gb5']
  },
  {
    name: 'G',
    keyColor: 'white',
    position: ['63.5%', '-24%'],
    aidLine: ['noLine', 'noLine'],
    aidlinePosition: [false, false],
    accidentalName: '',
    accidental: '',
    pianoKeyId: '8',
    frequency: ['G4', 'G5']
  },
  {
    name: 'G♯',
    keyColor: 'black',
    position: ['63.5%', '-24%'],
    aidLine: ['noLine', 'noLine'],
    aidlinePosition: [false, false],
    accidentalName: 'sharp',
    accidental: '♯',
    pianoKeyId: '9',
    frequency: ['G#4', 'G#5']
  },
  {
    name: 'Ab',
    keyColor: 'black',
    position: ['51%', '-36.5%'],
    aidLine: ['noLine', 'aid-line'],
    aidlinePosition: [false, '50%'],
    accidentalName: 'flat',
    accidental: '♭',
    pianoKeyId: '9',
    frequency: ['Ab4', 'Ab5']
  },
  {
    name: 'A',
    keyColor: 'white',
    position: ['51%', '-36.5%'],
    aidLine: ['noLine', 'aid-line'],
    aidlinePosition: [false, '50%'],
    accidentalName: '',
    accidental: '',
    pianoKeyId: '10',
    frequency: ['A4', 'A5']
  },
  {
    name: 'A♯',
    keyColor: 'black',
    position: ['51%', '-36.5%'],
    aidLine: ['noLine', 'aid-line'],
    aidlinePosition: [false, '50%'],
    accidentalName: 'sharp',
    accidental: '♯',
    pianoKeyId: '11',
    frequency: ['A#4', 'A#5']
  },
  {
    name: 'Bb',
    keyColor: 'black',
    position: ['38.5%', '38.5%'],
    aidLine: ['noLine', 'noLine'],
    aidlinePosition: [false, false],
    accidentalName: 'flat',
    accidental: '♭',
    pianoKeyId: '11',
    frequency: ['Bb4', 'Bb5']
  },
  {
    name: 'B',
    keyColor: 'white',
    position: ['38.5%', '38.5%'],
    aidLine: ['noLine', 'noLine'],
    aidlinePosition: [false, false],
    accidentalName: '',
    accidental: '',
    pianoKeyId: '12',
    frequency: ['B4', 'B4']
  }
];



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


