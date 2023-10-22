class Enemigo {
  constructor(posX, posY) {
    this.x = posX;
    this.y = posY;
    this.velocidad = random(0,4);
    this.cargaEnemigo();
  }
  cargaEnemigo() {
    this.ratonEnemigo = loadImage('assets/ratonEnemigo.png');
  }
  dibujar() {

    image(this.ratonEnemigo, this.x, this.y, 60, 50);
  }

  moverEnemigo() {
    this.y += this.velocidad; // Actualiza la posición en función de la velocidad
    if (this.y > height) {
      this.x= random(20, 550);
  
      this.y = random(-300, -10); // Reposiciona el enemigo arriba de la pantalla.
    }
  }
    colisionPersonaje(personaje) {
    // Colisión con el personaje
    if (
      this.x + 60 > personaje.posX &&
      this.x < personaje.posX + 60 &&
      this.y + 50 > personaje.posY &&
      this.y < personaje.posY + 180
    ) {
      return true;
    }
    return false;
  }
  
 loGolpeoRata(posX, posY) {
   this.posX = random(20, 550); // Posición X aleatoria
   this.posY = random(-300, -10); // Posición arriba de la pantalla
   this.velocidad = random(0,5);
}
}
