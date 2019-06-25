const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

const box = 32;

//laad afbeeldingen
const ground = new Image();
ground.src = 'img/background.jpg';

function draw(){
  ctx.drawImage(ground,0,0);
}
