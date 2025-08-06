import { randomNumber } from "../../data/notes.js";

function loadBackgrounds(){
  const backrounds =  
[
  "cartoon-landscape-arid-desolated-nature.jpg",             // index 0
  "digital-art-style-illustration-river-nature (5).jpg",     // index 1
  "digital-art-style-illustration-river-nature (4).jpg",     // index 2
  "digital-art-style-illustration-river-nature (3).jpg",     // index 3
  "digital-art-style-illustration-river-nature (2).jpg",     // index 4
  "digital-art-style-illustration-river-nature (1).jpg",     // index 5
  "digital-art-style-illustration-river-nature.jpg",         // index 6
  "digital-art-style-river-nature-landscape.jpg"             // index 7
];

const background = document.querySelector('.js-background');


const img = document.createElement('img');
background.appendChild(img);


img.src = `data/images/backrounds/${backrounds[randomNumber(0,7)]}`;


setInterval(() => {
  img.src = `data/images/backrounds/${backrounds[randomNumber(0,7)]}`;
}, 10000);
}


loadBackgrounds()





