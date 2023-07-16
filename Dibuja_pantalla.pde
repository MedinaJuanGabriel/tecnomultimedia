//Dibuja los fondos y los textos:
void dibujaPantalla( PImage fondo, String texto) {
  //Dibuja imagen con especificaciones:
  push();
  imageMode(CORNER);
  image(fondo, 0, 0, width, height);
  //Dibuja rect con transparencia para nitidez de los textos:
  if(estado !=0)     //Evita que se genere en el estado 0(Inicio)
  if(estado !=21){  //Evita que se genere en el estado 21(Creditos)
  fill(#5D2F67, 120);
  rectMode(CORNER);
   noStroke();
  rect(0, height/3*2, width, height/3);
}
//Crea,Asigna y aplica fuente(Blackwood-castle) y genera los textos con especificaciones
  fill(255);
  PFont fuenteimp;
  fuenteimp= createFont("hamellin.ttf",10);
  fill(#000000);
  textFont(fuenteimp);
  textSize(25);
  textLeading(40);
  textAlign(CENTER, CENTER);
  text( texto, 0, height/3*2, width, height/3);

  pop();
}
