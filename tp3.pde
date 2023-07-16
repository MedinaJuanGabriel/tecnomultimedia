/*
Alumno:Juan Gabriel Medina   Legajo:93530/3    Comision: 3     docente:David Bedoian  Materia: Tecnologia Multimedia 1
Trabajo practico 3: Aventura grafica al estilo de elige tu propia aventura
Cuento elegido: "El flautista de hamellin" de los Hermanos Grimm.
diagrama de flujo: https://drive.google.com/file/d/1TT7S5J29SaWr2R2PPchx2pYuRDyIuytY/view?usp=sharing
ENLACE AL VIDEO PRESENTACION: https://www.youtube.com/watch?v=-DUHCCo5vWE
*/
//Variables mapeo flauta:
float flautaX;
float flautaVelocidad;
float flautaFinalX;
//Variables de arrays fondos y textos
PImage finales4;
PImage[] fondos;
String[] textos;
int cantImagenes = 22;
//Variables para pantallas
//Variables para pantallas
int estado;
//valor false de finales=
boolean final1 = false;
boolean final2 = false;
boolean final3 = false;
boolean final4 = false;
//si los 4 finales son verdaderos retorna true
boolean pngRetornaValor() {
  if (final1 && final2 && final3 && final4) {
    return true;
  } else {
    return false;
  }
}

//Setup:
void setup(){
//Tamaño especificado para las pantallas:
size(600,600);
finales4 = loadImage("4finales.png");
// Configuración inicial de la flauta:
  flautaX = 0;
  flautaVelocidad = 5;
  flautaFinalX = width / 2; // Posición final de la flauta
  //cargo las imagenes en el arreglo fondo:
  fondos = new PImage[22];
  //ahora con un for cargo las imagenes:
  for ( int i=0; i<cantImagenes; i++ ) {
    fondos[i] = loadImage("fondos/fondo_"+nf(i, 2)+".png");
  }

  //carga de los textos y cantidad de casilleros:
  textos = new String[22];
  //ZONA DE ASIGNACION DE TEXTO:
textos[0]="";
textos[1] = "HABIA UNA VEZ,digo,Vives en un pueblo hermoso llamado Hamellin de zonas montañosas por las que fluye el rio Weser,eres el lider del gremio granjero.";
textos[2] = "Te levantas en tu hogar con tu familia,ves a tu hija Sofia y el cuadro con tu difunta esposa,piensas ir al granero a ver tus reservas.";
textos[3] = "Cuando sales a ver tu granero,encuentras muchos desdichados ratones y ratas que comieron todas tus cosechas, ves que está infestado todo el pueblo.";
textos[4] = "Sigues a una rata a traves del bosque detras del granero tratando de matarla hasta que intentando atravesar un hoyo, la rama se parte y caes en el.";
textos[5] = "Caes en la madriguera de la reina ratona,sus subditos te ofrecen en sacrificio,solo necesitan a uno mas para el ratagnarok.";
textos[6] ="FINAL RATAGNAROK: Luego de tu sacrificio, sin nadie que la detenga,vemos a Hammelin en una invasion ratonil a gran escala, y la Reina Ratona reinando sobre el caos.";
textos[7] ="Reunes a los lideres en la iglesia y plantean deshacerse de las ratas cueste lo que cueste,proponen darle una bolsa de monedas de oro al que se deshaga de ellas.";
textos[8] = "El Flautista de Hammelin aparece y se ofrece a ayudarlos a deshacerse de los ratones a cambio de la recompensa, que con su flauta se encargara de ellas.";
textos[9] = "No aceptar su ayuda es lo mismo que provocarlo, y su poder es inconmensurable, el mundo ninja ha llegado,con solo tocar su flauta un poco lo ha logrado.";
textos[10] = "El pueblo se sume en un caos de ratas ninja controladas por el flautista y la reina rata orientalizados.";
textos[11] = "FINAL KONICHIWA: Vemos a Hammelin ardiendo en una infestación de ratas ninja con el flautista y la reina rata orientales reinando sobre el pueblo,probablemente roden una pelicula sobre los hechos despues.";
textos[12] = "El flautista toca una melodía que atrae a las ratas hasta el río Weser provocando que se ahoguen todas y se las lleve la corriente del rio.";
textos[13] = "El pueblo alegre por el exterminio de las ratas,celebra una gran fiesta en el ayuntamiento olvidándose del flautista y la recompensa que aun le deben.";
textos[14] = "Al otro día, el Flautista reclama a ustedes, como lideres que son, que le den su recompensa.";
textos[15] = "El flautista agradece su generosidad pero se niega a recibirla, solo probaba su compromiso, manda saludos a los niños del pueblo de los cuales nunca le dijeron sus nombres.";
textos[16] = "FINAL BONDADOSO: Y colorín colorado, este cuento se ha acabado. Las ratas ya se han ido. Por suerte fuiste agradecido. El que a mí no me agradece, tal vez desaparece y como escuché mi melodía, que no espere un nuevo día.";
textos[17] = "El Flautista enojado por su avaricia y ingratitud jura venganza y sale del pueblo murmurando exaltado.";
textos[18] = "La mañana siguiente, los adultos se encuentran en la iglesia, mientras el flautista regresa al pueblo y con la melodía de su flauta atrae a los niños del pueblo.";
textos[19] = "Con la melodía, los atrae a las afueras,hasta la montaña Koppelberg y los atrae a la cueva,para luego cerrarse tras su entrada en la misma junto con el flautista.";
textos[20] = "FINAL DE FABULA: El pueblo vive en tristeza por la perdida y ausencia de los niños,nunca encuentran dónde están ellos ni el flautista como para pagarle para que los devuelva. Aprenden a no repetir sus errores y desde ese momento dejan de ser avariciosos y desagradecidos.";
textos[21] = "";
}

//Draw:
void draw() {

  //Movimiento de la flauta:
   if (flautaX < flautaFinalX) {
    flautaX += flautaVelocidad;
  }
  //estados para crear pantallas y asignacion de textos,imagenes y botones para la construccion de las mismas:
  //Pantalla inicio(0)
  if ( estado == 0 ) {
    dibujaPantalla( fondos[0], textos[0] );
    dibujaBotonRectangular( width/4*2, height/3, 200, 80, "JUGAR");
    dibujaBotonRectangular( width/2, height/2, 200, 80, "CREDITOS");
    //llama a la funcion flauta
     flauta();
     //genera la imagen si se pasaron los 4 finales
     if (pngRetornaValor()) {
      image(finales4, 0, 0, width, height);
    }

  }
  //Pantalla 1 (introductoria)
  else if ( estado== 1){
    dibujaPantalla(fondos[1],textos[1]);
    dibujaBotonRectangular(550,580,130,30,"SIGUIENTE");
  }
  //Pantalla 2 (introductoria)
  else  if ( estado == 2 ) {
    dibujaPantalla( fondos[2], textos[2] );
    dibujaBotonRectangular(550,580,130,30,"SIGUIENTE");
  }
  //Pantalla 3 (BIFURCACION 1)
  else  if ( estado == 3 ) {
    dibujaPantalla( fondos[3], textos[3] );
    dibujaBotonRectangular( width/4*3, height/20, 300, 60, "Si decides convocar una junta\ncon los lideres del pueblo presiona aqui");
    dibujaBotonRectangular( width/4, height/20, 300, 60, "Si decides combatir a las\nratas por tu cuenta presiona aqui");
  }
  //Pantalla 4 (Ratagnarok 1)
  else  if ( estado == 4 ) {
    dibujaPantalla( fondos[4], textos[4] );
    dibujaBotonRectangular(550,580,130,30,"SIGUIENTE");
  }
  //Pantalla 5 (Ratagnarok 2)
  else  if ( estado == 5 ) {
    dibujaPantalla( fondos[5], textos[5] );
    dibujaBotonRectangular(550,580,130,30,"SIGUIENTE");
  }
  //Pantalla 6 (Ratagnarok 3(Final 1))
  else  if ( estado == 6 ) {
    dibujaPantalla( fondos[6], textos[6] );
    dibujaBotonRectangular(530,580,150,30,"Volver al inicio");
  }
  //Pantalla 7 (Desarrollo)
  else  if ( estado == 7 ) {
    dibujaPantalla( fondos[7], textos[7] );
    dibujaBotonRectangular(550,580,130,30,"SIGUIENTE");
  }
  //Pantalla 8 (BIFURCACION 2)
  else  if ( estado == 8 ) {
    dibujaPantalla( fondos[8], textos[8] );
    dibujaBotonRectangular( width/4*3, height/20, 300, 60, "Si decides rechazar su ayuda presiona aqui");
    dibujaBotonRectangular( width/4, height/20, 300, 60, "Si decides aceptar su ayuda presiona aqui");
  }
  //Pantalla 9 (Konichiwa 1)
  else  if ( estado == 9 ) {
    dibujaPantalla( fondos[9], textos[9] );
    dibujaBotonRectangular(550,580,130,30,"SIGUIENTE");
  }
  //Pantalla 10(Konichiwa 2)
  else  if ( estado == 10 ) {
    dibujaPantalla( fondos[10], textos[10] );
    dibujaBotonRectangular(550,580,130,30,"SIGUIENTE");
  }
   //Pantalla 11(Konichiwa 3(Final 2))
  else  if ( estado == 11 ) {
    dibujaPantalla( fondos[11], textos[11] );
    dibujaBotonRectangular(530,580,150,30,"Volver al inicio");
  }
  //Pantalla 12(Desarrollo)
  else  if ( estado == 12 ) {
    dibujaPantalla( fondos[12], textos[12] );
    dibujaBotonRectangular(550,580,130,30,"SIGUIENTE");
  }
  //Pantalla 13(Desarrollo)
  else  if ( estado == 13 ) {
    dibujaPantalla( fondos[13], textos[13] );
    dibujaBotonRectangular(550,580,130,30,"SIGUIENTE");
  }
  //Pantalla 14(BIFURACION 3)
  else  if ( estado == 14 ) {
    dibujaPantalla( fondos[14], textos[14] );
    dibujaBotonRectangular( width/4*3, height/20, 300, 60, "Si deciden darle la\n recompensa prometida presiona aqui");
    dibujaBotonRectangular( width/4, height/20, 300, 60, "Si deciden no darle la \nrecompensa prometida presiona aqui");
  }
  //Pantalla 15(Bondadoso 1)
  else  if ( estado == 15 ) {
    dibujaPantalla( fondos[15], textos[15] );
    dibujaBotonRectangular(550,580,130,30,"SIGUIENTE");
  } 
  //Pantalla 16(Bondadoso 2(Final 3))
  else  if ( estado == 16 ) {
    dibujaPantalla( fondos[16], textos[16] );
    dibujaBotonRectangular(530,580,150,30,"Volver al inicio");
  }
  //Pantalla 17(Fabula 1)
  else  if ( estado == 17 ) {
    dibujaPantalla( fondos[17], textos[17] );
    dibujaBotonRectangular(550,580,130,30,"SIGUIENTE");
  }
  //Pantalla 18(Fabula 2)
  else  if ( estado == 18 ) {
    dibujaPantalla( fondos[18], textos[18] );
    dibujaBotonRectangular(550,580,130,30,"SIGUIENTE");
  } 
  //Pantalla 19(Fabula 3)
  else  if ( estado == 19 ) {
    dibujaPantalla( fondos[19], textos[19] );
    dibujaBotonRectangular(550,580,130,30,"SIGUIENTE");
  }
  //Pantalla 20(Fabula 4(Final 4))
  else  if ( estado == 20 ) {
    dibujaPantalla( fondos[20], textos[20] );
    dibujaBotonRectangular(530,580,150,30,"Volver al inicio");
  } 
  //Pantalla 21(Creditos)
  else  if ( estado == 21 ) {
    dibujaPantalla( fondos[21], textos[21] );
    dibujacreditos();
    dibujaBotonRectangular(530,580,150,30,"Volver al inicio");
  }
}
