class HUD {
  constructor(puntos) {
    this.puntosGenerales= puntos;
    this.xCorazones = width - 50.10+7; // Posición de los corazones en el borde superior derecho
    this.yCorazones = 10;
    this.xflauta=10*49;
    this.yflauta=10*4;
    this.cargaHUD();
  }
cargaHUD(){
    this.corazonLleno = loadImage('assets/corazonlleno.png'); // Imagen del corazón lleno
    this.corazonVacio = loadImage('assets/corazonvacio.png'); // Imagen del corazón vacío
    this.flautaDecoracion = loadImage('assets/puntos.png');
}
mostrar(vidas, puntosGenerales) {
  for (let i = 0; i < 3; i++) {
    if (i < vidas) {
      image(this.corazonLleno, i * 50, 10, 40, 40);
    } else {
      image(this.corazonVacio, i * 50, 10, 40, 40);
    }
  }

  // Dibuja la imagen de la flauta decorativa
  image(this.flautaDecoracion, this.xflauta, this.yflauta, 100, 25);

  // Dibuja el contador de puntos en la imagen de la flauta
  fill(255, 255, 0);
  textSize(24);
  text("Puntos: " + puntosGenerales, this.xflauta - 5, this.yflauta + 1);
}
}
