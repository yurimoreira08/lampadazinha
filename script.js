const lamp1 = document.getElementById('lamp1');
const lamp2 = document.getElementById('lamp2');


let lamp1Ligada = false;
lamp1.addEventListener('click', () => {
  if (lamp1Ligada) {
    lamp1.src = 'lampada.jpg';
    lamp1Ligada = false;
  } else {
    lamp1.src = 'lampada-on.jpg';
    lamp1Ligada = true;
  }
});

// Ligar/desligar lâmpada 2 quando o mouse passar sobre ela
let lamp2Ligada = false;
lamp2.addEventListener('mouseout', () => {
  if (!lamp2Ligada) {
    lamp2.src = 'lampada-on.jpg';
    lamp2Ligada = true;
  }else{
    lamp2.src = 'lampada.jpg';
    lamp2Ligada = false;
  }
});

