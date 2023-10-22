class Juego{
  constructor(){
    this.cantidadEnemigos = 3;
    this.cantidadRecolectables = 1;
    this.crearEnemigos();
    this.crearPersonaje();
    this.crearRecolectables();
    this.carga();
    this.puntos = 0;
    this.hud = new HUD();
    this.personajeSprites = []; // Array para almacenar las imágenes del personaje
    this.estado = "instrucciones";
    
   }
   carga(){
   this.fondoBosque = loadImage('assets/fondoBosque.png');
    this.decoPasto = loadImage('assets/decoPasto.png');
     this.instrucciones = loadImage('assets/inst.png');
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
        this.personaje.loGolpeoRata(this.enemigos[i]); // Pasar el objeto de enemigo
      }
    }
    
     if (this.puntos >= 26) {
      this.estado = "ganar"; // Cambia al estado "ganar"
    }
    
  }
}

   actualizarPuntaje(cantidad) {
    this.puntos += cantidad;
  }
  
  dibujar(){
     if ( this.estado == "instrucciones" ) {
       image(this.instrucciones, 0, 0, width, height);
     if(keyCode === ENTER){
     this.estado = "jugando";
     }
     }
    else if ( this.estado == "jugando" ) {    
  image(this.fondoBosque, 0, 0, width, height);
  this.hud.mostrar(this.personaje.vida, this.puntos);
  this.personaje.dibujar();
   for (let i = 0; i < this.cantidadEnemigos; i++) {
      this.enemigos[i].dibujar(); // Dibuja el enemigo
    }
    for(let i=0; i< this.cantidadRecolectables;i++){
    this.recolectables[i].dibujar();
  }
    image(this.decoPasto, 0, 0, width, height);
 
  }
  else if (this.estado == "perder"){
   image(this.perder, 0, 0, width, height);
  
  }
  else if (this.estado == "ganar"){
  image(this.ganar, 0, 0, width, height);
  
  }
     }
 /*    
  iniciar(){
  
  }
*/  
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
      if (keyCode === ENTER) {
        if (this.estado === "perder") {
          this.estado = "instrucciones";
        } else if (this.estado === "ganar") {
          this.iniciarNuevoJuego(); // Agrega esta función para reiniciar el juego
        }
      }
    }
    this.personaje.teclaPresionada(keyCode);
  }

  iniciarNuevoJuego() {
    this.crearEnemigos();
    this.crearPersonaje();
    this.crearRecolectables();
    this.puntos = 0;
    this.estado = "instrucciones";
  }
}
