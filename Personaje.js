class Personaje {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = 320;
    this.vida = 3;
    this.personajeSprites = []; // Array para almacenar las imágenes del personaje
    this.animationFrames = [0]; // Índices de las imágenes para animación de caminar
    this.currentFrame = 0;
    this.frameDelay = 15; // Cantidad de fotogramas entre cambios de imagen;
    this.animationIndex = 0; // Índice actual de la animación
    this.velX = 20;
    this.velY = 20;  
    this.cargaPersonaje();
  }  

 colisionRecolectable(recolectable) {
    // Colisión con un recolectable
    if (
      this.posX + 60 > recolectable.posX &&
      this.posX < recolectable.posX + 60 &&
      this.posY + 180 > recolectable.posY &&
      this.posY < recolectable.posY + 60
    ) {
      this.recolectoNota(); // Lógica para recolectar una nota (aumenta puntaje y mueve nota)
      return true;
    }
    return false;
  }

colisionEnemigo(enemigo) {
    // Colisión con un enemigo
    if (
      this.posX + 60 > enemigo.x &&
      this.posX < enemigo.x + 60 &&
      this.posY + 180 > enemigo.y &&
      this.posY < enemigo.y + 50
    ) {
      this.loGolpeoRata(); // Lógica para restar vida
      return true;
    }
    return false;
  }

cargaPersonaje(){
   for (let i = 0; i <= 9; i++) {
    this.personajeSprites[i] = loadImage("assets/fl" + nf(i, 2) + ".png");
  }
  }
  dibujar() {
  
    image(this.personajeSprites[this.animationFrames[this.animationIndex]], this.posX, this.posY, 60,180);
    // Controla la velocidad de la animación
        if (frameCount % this.frameDelay == 0) {
            this.animationIndex = (this.animationIndex + 1) % this.animationFrames.length;
    }
  }
  //restringe la zona de movilidad al sendero
   restringirmovimiento() {
    if (this.posY < 180) {
      this.posY = 180;
    } else if (this.posY > 360) {
      this.posY = 360;
    } else if(this.posX <  -5){
      this.posX =-5
    } else if(this.posX > 540){
      this.posX =540
    }
  }



  moverDerecha() {    
    this.posX += this.velX;
    this.restringirmovimiento();
    // Cambia la animación hacia la derecha
    this.animationFrames = [7, 8]; 
  }

  moverIzquierda() { 
    this.posX -= this.velX;
    this.restringirmovimiento();
    // Cambia la animación hacia la izquierda
    this.animationFrames = [5,6]; 
  }

  moverArriba() {
    
    this.posY -= this.velY;
     this.restringirmovimiento();
    // Cambia la animación hacia arriba
    this.animationFrames = [3, 4]; 
  
  }

  moverAbajo() {
    this.posY += this.velY;
     this.restringirmovimiento();
    // Cambia la animación hacia abajo
    this.animationFrames = [1, 2]; 
 
  }
  /*Funcionalidad no utilizada finalmente
  tocarFlauta() {
    // Cambia la animación cuando toque la flauta
    this.animationFrames = [9]; 
  }
*/
  teclaPresionada(keyCode) {
    if (keyCode == LEFT_ARROW) {
      this.moverIzquierda();
    } else if (keyCode == RIGHT_ARROW) {
      this.moverDerecha();
    } else if (keyCode == UP_ARROW) {
      this.moverArriba();
    } else if (keyCode == DOWN_ARROW) {
      this.moverAbajo();
    }
  }

  estadoVida() {
   if (this.loGolpeoRata === true) {
    this.vida -= 1;
  }
  }

loGolpeoRata(enemigo) {
  // Cambiar la posición del enemigo cuando el personaje lo golpea
  enemigo.x = random(20, 550); // Nueva posición X aleatoria para el enemigo
  enemigo.y = random(-300, -10); // Nueva posición arriba de la pantalla para el enemigo
}

}
