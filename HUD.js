class HUD {
  constructor() {
    
    this.xCorazones = width - 50.10+7; // Posición de los corazones en el borde superior derecho
    this.yCorazones = 10;
    this.xpuntos=10*50;
    this.ypuntos=10*4;
    this.puntaje = 0; // Inicializa el puntaje en 0
    this.cargaHUD();
  }
cargaHUD(){
    this.corazonLleno = loadImage('assets/corazonlleno.png'); // Imagen del corazón lleno
    this.corazonVacio = loadImage('assets/corazonvacio.png'); // Imagen del corazón vacío
    this.puntos = loadImage('assets/puntos.png');
}
  mostrar(vidas) {
    for (let i = 0; i < vidas; i++) {
      image(this.corazonLleno, i * 50, 10, 40, 40);
    }

    for (let i = vidas; i < 3; i++) {
      image(this.corazonVacio, i * 30, 10, 20, 20);
    }

    image(this.puntos, this.xpuntos, this.ypuntos, 70, 25);
    fill(255, 255, 0); // Establece el color del texto en amarillo
  textSize(24); // Tamaño del texto
  text("Puntos: " + this.puntaje, this.xpuntos - 20, this.ypuntos - 5);
  }
 actualizarPuntaje(cantidad) {
    this.puntaje += cantidad;
  }
}
