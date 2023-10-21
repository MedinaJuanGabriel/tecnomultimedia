/*Alumno:Juan Gabriel Medina   Legajo:93530/3    Comision: 3     docente:David Bedoian  Materia: Tecnologia Multimedia 1
Tp 5: Minijuego basado en la aventura grafica con porgramacion orientada a objetos
Enlace al video explicativo: https://www.youtube.com/watch?
*/
let objJuego;

function setup() {
  createCanvas(600,600);
  objJuego = new Juego();
}


function draw() {
  objJuego.actualizar();
  objJuego.dibujar();
  
}

function keyPressed(){
  objJuego.teclaPresionada(keyCode);
}
