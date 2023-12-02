let ag;

function setup() {
  let canvas = createCanvas(600, 600);
  ag = new AventuraGrafica();
}

function draw() {
  
  ag.actualizar();
  ag.dibujarjuego();
 
  ag.dibujar();
}

function keyPressed() {
  ag.teclaPresionada(keyCode);
}
