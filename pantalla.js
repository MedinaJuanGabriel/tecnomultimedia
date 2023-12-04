class Pantalla {
  constructor(aventuraGrafica) {
    //Conector con la clase aventura grafica:
    this.ag = aventuraGrafica;
    //declaracion del metodo carga:
    this.carga();
    //declaracion de botones para la aventura grafica:
    //Array de botones
    this.botones = [
      //Boton jugar
      new Boton(200, height / 3, 200, 80, "JUGAR", this.accionOpcion1.bind(this)),
      //Boton creditos
      new Boton(200, height / 2, 200, 80, "CREDITOS", this.accionOpcion2.bind(this)),
    ];
    //Boton siguiente
    this.boton = new Boton(440, 550, 150, 45, "Siguiente", this.accionBoton1.bind(this));
    //Boton volver inicio
    this.botonVolverInicio = new Boton(440, 550, 150, 45, "Volver al Inicio", this.accionVolverInicio.bind(this));
  }
  //Metodo carga
  carga() {
    this.letraMedieval = loadFont('assets/hamellin.ttf');
    this.fondoinicio = loadImage('assets/fondo_inicio.png');
    this.imagenFinal = loadImage('assets/4finales.png');
    this.cred = loadImage('assets/fondo_cr.png');
  }

  //Metodo pantalla inicio
  pantallainicio() {
    if (this.ag.estado === 0) {
      loop();
      image(this.fondoinicio, 0, 0, width, height);
      textFont(this.letraMedieval);
      this.botones.forEach(boton => boton.mostrar());
    }
  }
  //Metodo pantalla creditos
  pantallacreditos() {
    if (this.ag.estado === 26) {
      image(this.cred, 0, 0, width, height);
    }
  }

  //Metodo pantalla 4
  pantallapantalla4() {
    if (this.ag.estado === 4) {

      fill(255);
      textSize(12);
      //Declaracion de botones de opciones:
      let botonOpcion3 = new Boton(100, height / 5, 210, 80, "Convocar a la junta de lideres", this.accionOpcion3.bind(this));
      let botonOpcion4 = new Boton(350, height / 5, 200, 80, "Combatir las ratas solo", this.accionOpcion4.bind(this));

      botonOpcion3.mostrar();
      botonOpcion4.mostrar();

      botonOpcion3.clicEnBoton();
      botonOpcion4.clicEnBoton();
    }
  }
  //Metodo pantalla 10
  pantallapantalla10() {
    if (this.ag.estado === 10) {

      fill(255);
      textSize(12);
      //Declaracion de botones de opciones:
      let botonOpcion5 = new Boton(100, height / 5, 210, 80, "Aceptas su ayuda", this.accionOpcion5.bind(this));
      let botonOpcion6 = new Boton(350, height / 5, 200, 80, "Rechazas su ayuda", this.accionOpcion6.bind(this));

      botonOpcion5.mostrar();
      botonOpcion6.mostrar();


      botonOpcion5.clicEnBoton();
      botonOpcion6.clicEnBoton();
    }
  }


  //Metodo pantalla 17
  pantallapantalla17() {
    if (this.ag.estado === 17) {

      fill(255);
      textSize(12);
      //Declaracion de botones de opciones:
      let botonOpcion7 = new Boton(100, height / 5, 210, 80, "Darle recompensa", this.accionOpcion7.bind(this));
      let botonOpcion8 = new Boton(350, height / 5, 200, 80, "No darsela", this.accionOpcion8.bind(this));

      botonOpcion7.mostrar();
      botonOpcion8.mostrar();

      botonOpcion7.clicEnBoton();
      botonOpcion8.clicEnBoton();
    }
  }

  //Botones(Pase de estados):
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
    //Boton siguiente recorre a traves de todas las pantallas
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

  //Metodo que dibuja pantallas:
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
      //Fondo
      image(fondo_, 0, 0, width, height);
      fill(93, 47, 103, 120);
      noStroke();
      if (this.ag.estado !== 24) {
        rect(0, height / 3 * 2, width, height / 3);
      }
      fill(0);
      //Texto
      textFont(this.letraMedieval);
      textSize(24);
      textAlign(CENTER, CENTER);
      text(texto_, 0, 0, width, height * 1.6);


      //asignacion de Botones de volver al inicio a estados
      if (this.ag.estado === 7 || this.ag.estado === 13 || this.ag.estado === 19 || this.ag.estado === 23 || this.ag.estado === 26) {
        this.botonVolverInicio.mostrar();
        this.botonVolverInicio.clicEnBoton();
      }

      //Anula aparicion de boton siguiente
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
