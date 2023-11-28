class AventuraGrafica {
  constructor() {
    this.estado = 0;
  /*  this.Juego= new Juego()*/
    this.pantalla = new Pantalla(this);
    this.cantPantallas = 24;
    this.fondos = [];

    for (let i = 0; i < this.cantPantallas; i++) {
      this.fondos[i] = loadImage(`./assets/fondo_${nf(i, 2)}.png`);
    }

    //los textos:
   this.textos = [
   "Inicio",
  "HABIA UNA VEZ,digo,Vives en un pueblo hermoso llamado Hamellin de zonas montañosas por las que fluye el rio Weser,eres el lider del gremio granjero.",
  "Te levantas en tu hogar con tu familia,ves a tu hija Sofia y el cuadro con tu difunta esposa,piensas ir al granero a ver tus reservas.",
  "Cuando sales a ver tu granero,encuentras muchos desdichados ratones y ratas que comieron todas tus cosechas, ves que está infestado todo el pueblo.",".",
  "Sigues a una rata a través del bosque detrás del granero tratando de matarla hasta que intentando atravesar un hoyo, la rama se parte y caes en él.",
  "Caes en la madriguera de la reina ratona,sus subditos te ofrecen en sacrificio,solo necesitan a uno más para el ratagnarok.",
  "FINAL RATAGNAROK: Luego de tu sacrificio, sin nadie que la detenga,vemos a Hammelin en una invasión ratonil a gran escala, y la Reina Ratona reinando sobre el caos.",
  "Reúnes a los líderes en la iglesia y plantean deshacerse de las ratas cueste lo que cueste, proponen darle una bolsa de monedas de oro al que se deshaga de ellas.",
  "El Flautista de Hammelin aparece y se ofrece a ayudarlos a deshacerse de los ratones a cambio de la recompensa, que con su flauta se encargará de ellas.",".",
  "No aceptar su ayuda es lo mismo que provocarlo, y su poder es inconmensurable, el mundo ninja ha llegado, con solo tocar su flauta un poco lo ha logrado.",
  "El pueblo se sume en un caos de ratas ninja controladas por el flautista y la reina rata orientalizados.",
  "FINAL KONICHIWA: Vemos a Hammelin ardiendo en una infestación de ratas ninja con el flautista y la reina rata orientales reinando sobre el pueblo, probablemente rueden una película sobre los hechos después.",
  "El flautista toca una melodía que atrae a las ratas hasta el río Weser provocando que se ahoguen todas y se las lleve la corriente del río.",
  "El pueblo alegre por el exterminio de las ratas, celebra una gran fiesta en el ayuntamiento olvidándose del flautista y la recompensa que aún le deben.",
  "Al otro día, el Flautista reclama a ustedes, como líderes que son, que le den su recompensa.",".",
  "El flautista agradece su generosidad pero se niega a recibirla, solo probaba su compromiso, manda saludos a los niños del pueblo de los cuales nunca le dijeron sus nombres.",
  "FINAL BONDADOSO: Y colorín colorado, este cuento se ha acabado. Las ratas ya se han ido. Por suerte fuiste agradecido. El que a mí no me agradece, tal vez desaparece y como escuché mi melodía, que no espere un nuevo día.",
  "El Flautista enojado por su avaricia y ingratitud jura venganza y sale del pueblo murmurando exaltado.",
  "La mañana siguiente, los adultos se encuentran en la iglesia, mientras el flautista regresa al pueblo y con la melodía de su flauta atrae a los niños del pueblo.",
  "Con la melodía, los atrae a las afueras, hasta la montaña Koppelberg y los atrae a la cueva, para luego cerrarse tras su entrada en la misma junto con el flautista.",
  "FINAL DE FABULA: El pueblo vive en tristeza por la perdida y ausencia de los niños, nunca encuentran dónde están ellos ni el flautista como para pagarle para que los devuelva. Aprenden a no repetir sus errores y desde ese momento dejan de ser avariciosos y desagradecidos.",
  ""
    ];  
    
    this.botones = [];
  }
  actualizarjuego(){
  
   this.Juego.actualizarjuego();
}
  dibujar() {
   /* this.Juego.dibujar();*/
    this.pantalla.dibujar( this.fondos[ this.estado ] , this.textos[ this.estado ] );
  }
  teclaPresionada(keyCode){
  this.Juego.teclaPresionada(keyCode);
  }
  /*
   actualizarjuego(){
  
   this.pantalla.actualizarjuego();
}
dibujarJuego(){
  this.pantalla.dibujarJuego();
}
  dibujar() {
    this.pantalla.dibujar( this.fondos[ this.estado ] , this.textos[ this.estado ] );
  }
  teclaPresionada(keyCode){
   this.pantalla.teclaPresionada(keyCode)
  }
*/  
}
