//Declaracion inicial de la aventura grafica
let ag;

//Setup
function setup() {
  //Tamaño del lienzo
  let canvas = createCanvas(600, 600);
  //Declaracion de la clase aventura grafica
  ag = new AventuraGrafica();
}

//Draw
function draw() {
 //declarando los metodos en la clase aventura grafica
  ag.actualizar();
  ag.dibujarjuego();
  ag.dibujar();
}

function keyPressed() {
   //declarando el metodo en la clase aventura grafica
  ag.teclaPresionada(keyCode);
}
