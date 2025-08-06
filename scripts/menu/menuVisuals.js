import { randomNumber } from "../../data/notes.js";

function loadBackgrounds(){
  const backrounds =  
[
  "cartoon-landscape-arid-desolated-nature.jpg",             
  "digital-art-style-illustration-river-nature (1).jpg",    
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






