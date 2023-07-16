//Funciones asignables para la creacion del boton:
void dibujaBotonRectangular(float x, float y, float ancho, float alto, String texto) {
  // Establecer colores para el botón
  //Colores para los diferentes estados del mismo segun interaccion:
  color fondo = color(#B3B799,150);
  color borde = color(100);
  color seleccionado = color(#53A590);

  // Dibuja el fondo del botón
  if ( colisionConBotonRectangular(x, y, ancho, alto) ) {
    fill(seleccionado);
  } else {
    fill(fondo);
  }
  stroke(borde);
  rectMode(CENTER);
  rect(x, y, ancho, alto);

  // Dibujar el texto dentro del botón
  fill(0); // Establecer color negro para el texto
  textAlign(CENTER, CENTER); // Alinear el texto al centro del botón
  textSize(18); // Tamaño del texto
  text(texto, x, y ); // Posicionar el texto en el centro del botón
}

//Establecemos la colision del boton:
boolean colisionConBotonRectangular(float x, float y, float ancho, float alto ) {
  return( mouseX>x-ancho/2 && mouseX<x+ancho/2 && mouseY>y-alto/2 && mouseY<y+alto/2 );  
}
