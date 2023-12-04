class Boton {
  constructor(x, y, ancho, alto, texto, accion) {
    //Parametros del boton:
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.texto = texto;
    this.accion = accion;
    this.clicado = false;  
  }
   //Visualizacion del boton
   mostrar() {
    fill(169,173,128,170);
    rect(this.x, this.y, this.ancho, this.alto);
    fill(0);
    textSize(18);
    textAlign(CENTER, CENTER);
    text(this.texto, this.x + this.ancho / 2, this.y + this.alto / 2);
  }

//funcionalidad del boton
   clicEnBoton() {
  if (mouseIsPressed &&
    mouseX > this.x && mouseX < this.x + this.ancho &&
    mouseY > this.y && mouseY < this.y + this.alto) {
    if (!this.clicado) {
      this.accion();
      this.clicado = true;
      this.mostrar(); 
    }
  } else {
    this.clicado = false;
  }
   }
   noClicEnBoton() {
    this.clickeable = false;
  }

}
