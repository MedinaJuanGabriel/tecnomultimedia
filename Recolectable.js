class Recolectable {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.velocidad = random(1,6);
    this.cargaRecol();
  }

  cargaRecol() {
    this.noti = loadImage('assets/noti.png');
    this.notinotu = loadImage('assets/notinotu.png');
  }

  dibujar() {
    image(this.notinotu, this.posX, this.posY, 60, 60); // Usa this.posX y this.posY para las coordenadas
  }

 moverNotas() {
  this.posY += this.velocidad;
  if (this.posY > height) {
    this.posX = random(20,550);
    this.posY = random(-300, -10); // Reposiciona el recolectable arriba de la pantalla.
  } 
}

  colisionPersonaje(personaje) {
    if (
      this.posX + 60 > personaje.posX &&
      this.posX < personaje.posX + 60 &&
      this.posY + 60 > personaje.posY &&
      this.posY < personaje.posY + 180
    ) {
      // Colisión con el personaje
      this.recolectoNota(); // Lógica para recolectar una nota
      return true; // Devuelve true si colisiona con el personaje.
    }
    return false;
  }

recolectoNota() {
  this.posX = random(20, 550);
  this.posY = random(-300, -10);
 }
}
