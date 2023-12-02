class Juego{
  constructor(aventuraGrafica){
   this.ag = aventuraGrafica;
    this.cantidadEnemigos = 3;
    this.cantidadRecolectables = 1;
    this.crearEnemigos();
    this.vidaInicial = 3; // Inicializa la variable vidaInicial
    this.crearPersonaje();
    this.crearRecolectables();
    this.carga();
    this.puntos = 0;
    this.hud = new HUD();
    /* this.juegoIniciado = false;*/
    this.personajeSprites = []; // Array para almacenar las imágenes del personaje
  
    
   }
   carga(){
   this.fondoBosque = loadImage('assets/fondoBosque.png');
    this.decoPasto = loadImage('assets/decoPasto.png');
     this.instrucciones = loadImage('assets/inst.svg');
     this.perder = loadImage('assets/pantallaperder.png');
     this.ganar = loadImage('assets/pantallaganar.png');
   }
   
  actualizar() {
  if (this.estado == "jugando") {
    for (let i = 0; i < this.cantidadEnemigos; i++) {
      this.enemigos[i].moverEnemigo(); // Actualiza la posición del enemigo
    }

    for (let i = 0; i < this.cantidadRecolectables; i++) {
      this.recolectables[i].moverNotas(); // Actualiza la posición de los recolectables
    }

   for (let i = 0; i < this.cantidadRecolectables; i++) {
      if (this.recolectables[i].colisionPersonaje(this.personaje)) {
        this.recolectables[i].recolectoNota();
        this.actualizarPuntaje(2); // Suma 2 puntos por cada nota recolectada
      }
    }
  

 for (let i = 0; i < this.cantidadEnemigos; i++) {
      if (this.enemigos[i].colisionPersonaje(this.personaje)) {
        this.personaje.loGolpeoRata(this.enemigos[i]);
        if (this.personaje.vida <= 0) {
          this.estado = "perder"; // Cambia al estado perder si el jugador se queda sin vidas
        }
      }
    }
    if (this.puntos >= 26) {
      this.estado = "ganar";
    }
  }
  
}

   actualizarPuntaje(cantidad) {
    this.puntos += cantidad;
  }
  
  dibujarjuego(){  
     if ( this.estado == "jugando" ) {    
  image(this.fondoBosque, 0, 0, width, height);
  this.hud.mostrar(this.personaje.vida, this.puntos);
  this.personaje.dibujarjuego();
   for (let i = 0; i < this.cantidadEnemigos; i++) {
      this.enemigos[i].dibujarjuego(); // Dibuja el enemigo
    }
    for(let i=0; i< this.cantidadRecolectables;i++){
    this.recolectables[i].dibujarjuego();
  }
    image(this.decoPasto, 0, 0, width, height);
 
  }
    else if (this.estado === "perder" && this.mostrarFinales) {
      image(this.perder, 0, 0, width, height);
    } else if (this.estado === "ganar" && this.mostrarFinales) {
      image(this.ganar, 0, 0, width, height);
    }
  
  } 
/* else if (!this.juegoIniciado) {
      // Mostrar las imágenes de perder y ganar antes de iniciar el juego
      // Puedes ajustar esto según tus necesidades específicas
      image(this.pantalla.ag.Juego.perder, 0, 0, width, height);
      image(this.pantalla.ag.Juego.ganar, 0, 0, width, height);
      return;
    }*/

 
 
  crearEnemigos() {
    this.enemigos = [];
    for (let i = 0; i < this.cantidadEnemigos; i++) {
      this.enemigos[i] = new Enemigo(random(20,550), random(-300, -10), random(1, 5));
    }
  }

  
  crearRecolectables(){
   this.recolectables = [];
   for(let i=0; i<this.cantidadRecolectables;i++){
     this.recolectables[i] = new Recolectable(random(20,550), random(-300,-10),random(1,5));
  }
  }
  
  crearPersonaje(){
   this.personaje = new Personaje(width/2,380);
  }
  
teclaPresionada(keyCode) {
    if (this.estado === "perder" || this.estado === "ganar") {
      if (keyCode === ENTER)
      {
        if (this.estado === "perder") {
          this.ag.cambiarEstadoPerder();
         this.mostrarFinales = false;
        } else if (this.estado === "ganar") {
         this.ag.cambiarEstadoGanar(); 
       
           this.mostrarFinales = false;
        //función para reiniciar el juego
        }
      }
    }
    this.personaje.teclaPresionada(keyCode);
  }
  
 

 
  iniciarNuevoJuego() {
     this.mostrarFinales = true;
      this.estado = "jugando";
      this.personaje.vida = this.vidaInicial;
      this.crearEnemigos();
      this.crearRecolectables();
      this.puntos = 0;
      this.hud.mostrar(this.vidaInicial, this.puntos);
    }
   
}
