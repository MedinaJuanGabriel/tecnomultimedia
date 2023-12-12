/*Alumno:Juan Gabriel Medina   Legajo:93530/3    Comision: 3     docente:David Bedoian  Materia: Tecnologia Multimedia 1
Tp final: Aventura grafica con minijuego integrado
*/
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
