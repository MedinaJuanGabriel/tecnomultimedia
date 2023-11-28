/* class Personaje {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = 320;
    this.vidaInicial = 3; // Cantidad inicial de vidas
    this.vida = this.vidaInicial; // Inicializar las vidas
    this.personajeSprites = []; // Array para almacenar las imágenes del personaje
    this.animationFrames = [0]; // Índices de las imágenes para animación de caminar
    this.currentFrame = 0;
    this.frameDelay = 15; // Cantidad de fotogramas entre cambios de imagen;
    this.animationIndex = 0; // Índice actual de la animación
    this.velX = 20;
    this.velY = 20;  
    this.cargaPersonaje();
  }  
  
 iniciarNuevoJuego() {
    this.vida = this.vidaInicial; 
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
/*
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
  this.vida--;
  // Cambia la posición del enemigo cuando cae sobre el personaje
  enemigo.x = random(20, 550); // Nueva posición X aleatoria para el enemigo
  enemigo.y = random(-300, -10); // Nueva posición arriba de la pantalla para el enemigo
}

}


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
    image(this.notinotu, this.posX, this.posY, 60, 60); 
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
 //restablece la posición del recolectable
  this.posX = random(20, 550);
  this.posY = random(-300, -10);
 }
} */
