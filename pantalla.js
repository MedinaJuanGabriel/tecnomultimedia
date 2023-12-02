class Pantalla {
  constructor(aventuraGrafica) {
    this.ag = aventuraGrafica;
 
    this.carga();
    this.botonVolverInicio = new Boton(440, 550, 150, 45, "Volver al Inicio", this.accionVolverInicio.bind(this));
    this.boton = new Boton(440, 550, 150, 45, "Siguiente", this.accionBoton1.bind(this));
    this.botones = [
      new Boton(200, height / 3, 200, 80, "JUGAR", this.accionOpcion1.bind(this)),
      new Boton(200, height / 2, 200, 80, "CREDITOS", this.accionOpcion2.bind(this)),
    ];
  }

  carga() {
    this.letraMedieval = loadFont('assets/hamellin.ttf');
    this.fondoinicio = loadImage('assets/fondo_inicio.png');
    this.imagenFinal = loadImage('assets/4finales.png');
    this.cred = loadImage('assets/fondo_cr.png');
  }

  
  pantallainicio() {
    if (this.ag.estado === 0) {
      loop();
      image(this.fondoinicio, 0, 0, width, height);
      textFont(this.letraMedieval);
      this.botones.forEach(boton => boton.mostrar());
    }
  }

  pantallacreditos() {
   if (this.ag.estado === 26) {
     image(this.cred, 0, 0, width, height);
   }
  }
   

pantallapantalla4() {
  if (this.ag.estado === 4) {
 
    fill(255);
    textSize(12);

    let botonOpcion3 = new Boton(100, height / 5, 210, 80, "Convocar a la junta de lideres", this.accionOpcion3.bind(this));
    let botonOpcion4 = new Boton(350, height / 5, 200, 80, "Combatir las ratas solo", this.accionOpcion4.bind(this));

    botonOpcion3.mostrar();
    botonOpcion4.mostrar();

    botonOpcion3.clicEnBoton();
    botonOpcion4.clicEnBoton();
  }
 
}

pantallapantalla10() {
  if (this.ag.estado === 10) {

    fill(255);
    textSize(12);

    let botonOpcion5 = new Boton(100, height / 5, 210, 80, "Aceptas su ayuda", this.accionOpcion5.bind(this));
    let botonOpcion6 = new Boton(350, height / 5, 200, 80, "Rechazas su ayuda", this.accionOpcion6.bind(this));

    botonOpcion5.mostrar();
    botonOpcion6.mostrar();

  
    botonOpcion5.clicEnBoton();
    botonOpcion6.clicEnBoton();
  }
}



pantallapantalla17() {
  if (this.ag.estado === 17) {
   
    fill(255);
    textSize(12);

    let botonOpcion7 = new Boton(100, height / 5, 210, 80, "Darle recompensa", this.accionOpcion7.bind(this));
    let botonOpcion8 = new Boton(350, height / 5, 200, 80, "No darsela", this.accionOpcion8.bind(this));

    botonOpcion7.mostrar();
    botonOpcion8.mostrar();

    botonOpcion7.clicEnBoton();
    botonOpcion8.clicEnBoton();
  }
}


accionOpcion1() {
    this.ag.estado = 1;
    console.log('Opción 1');
  }
  accionVolverInicio() {
  this.ag.estado = 0;
}

  accionOpcion2() {
    // Lógica para la opción 2
    this.ag.estado = 26;
    console.log('Opción 2');
  }
  
    accionBoton1() {
    if (this.ag.estado < this.ag.cantPantallas - 1) {
      this.ag.estado++;
    }
  }

  accionOpcion3() {
    // Lógica para la opción 3
    this.ag.estado = 8; 
    console.log('Opción 3');
  }

  accionOpcion4() {
    // Lógica para la opción 4
    this.ag.estado = 5;
    console.log('Opción 4');
  }
  
  accionOpcion5() {
  // Lógica para la opción 5

  this.ag.estado= 24;
  this.ag.Juego.iniciarNuevoJuego(); // Usa iniciarNuevoJuego en lugar de iniciar
  console.log('Opción 5');
}
/*
 if ( this.estado == "instrucciones" ) {
       image(this.instrucciones, 0, 0, width, height);
     if(keyCode === ENTER){
     this.estado = "jugando";
     }*/

  accionOpcion6() {
    // Lógica para la opción 6
    this.ag.estado = 11;
    console.log('Opción 6');
  }
  
    accionOpcion7() {
    // Lógica para la opción 7
    this.ag.estado = 18; 
    console.log('Opción 7');
  }

  accionOpcion8() {
    // Lógica para la opción 8
    this.ag.estado = 20;
    console.log('Opción 8');
  }

dibujar(fondo_, texto_) {
  if (this.ag.estado === 0) {
    this.pantallainicio();
    this.botones.forEach(boton => boton.clicEnBoton());
  } else if (this.ag.estado === 4) {
    this.pantallapantalla4();
  } else if (this.ag.estado === 10) {
    this.pantallapantalla10();
  } else if (this.ag.estado === 17) {
    this.pantallapantalla17();
  } else {
    push(); 
    image(fondo_, 0, 0, width, height);
    fill(93, 47, 103, 120);
    noStroke();
    if(this.ag.estado !== 24){
    rect(0, height / 3 * 2, width, height / 3);
    }
    fill(0);
    textFont(this.letraMedieval);
    textSize(24);
    textAlign(CENTER, CENTER);
    text(texto_, 0, 0, width, height * 1.6);
    
    
  
    if (this.ag.estado === 7 || this.ag.estado === 13 || this.ag.estado === 19 || this.ag.estado === 23 || this.ag.estado === 26) {
      this.botonVolverInicio.mostrar();
      this.botonVolverInicio.clicEnBoton();  
}


    
    if (this.ag.estado !== 7 && this.ag.estado !== 13 && this.ag.estado !== 19 && this.ag.estado !== 23 && this.ag.estado !== 24 && this.ag.estado !== 26 ) {
      this.boton.mostrar();
      this.boton.clicEnBoton(); 
    } else {
      this.boton.noClicEnBoton();  
    }

    pop();
  }
}



}
