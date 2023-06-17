
 
 
 
 
 
 
 //Dibuja rectangulos amarillos
void dibujarRectanguloAmarillo() {
  fill(246, 201, 82);
  
  // Rectángulo en la 1era fila horizontal, al lado izquierdo del noveno rectángulo
  rect(9 * tam - tam - ancho, 0, ancho, largo);
  
  // Rectángulo en la segunda fila horizontal, al lado izquierdo del sexto rectángulo
  rect(6 * tam - tam - ancho, (largo + espaciadoVertical), ancho, largo);
  
  // Rectángulo en la tercera fila horizontal, al lado izquierdo del segundo rectángulo
  rect(2 * tam - tam - ancho, (2 * (largo + espaciadoVertical)), ancho, largo);
  
  pushMatrix();
  translate(width / 2 + 26, 24*11);
  rotate(radians(145));
  // Rectángulo en la quinta fila horizontal, al lado izquierdo del sexto rectángulo
  rect(6 * tam - tam - ancho, (4 * (largo + espaciadoVertical)), ancho, largo);
  popMatrix();
  // Rectángulo en la quinta fila horizontal, al lado izquierdo del octavo rectángulo
  rect(8 * tam - tam - ancho, (4 * (largo + espaciadoVertical)), ancho, largo);
}
//Dibuja rectangulos rojos
void dibujarRectanguloRojo() {
  fill(227, 65, 76);
  
  // Rectángulo en la segunda fila horizontal, al lado izquierdo del octavo rectángulo
  rect(8 * tam - tam - ancho, (largo + espaciadoVertical), ancho, largo);
  
  // Rectángulo en la tercera fila horizontal, al lado izquierdo del cuarto rectángulo
  rect(4 * tam - tam - ancho, (2 * (largo + espaciadoVertical)), ancho, largo);
  
  // Rectángulo en la cuarta fila horizontal, al lado izquierdo del octavo rectángulo
  rect(8 * tam - tam - ancho, (3 * (largo + espaciadoVertical)), ancho, largo);
  
  // Rectángulo en la quinta fila horizontal, al lado derecho del tercer rectángulo
  rect(2 * tam + ancho, (4 * (largo + espaciadoVertical)), ancho, largo);
}
//Dibuja rectangulos celestes
void dibujarRectanguloCeleste() {
  fill(68, 132, 204);
 
  // Rectángulo en la segunda fila horizontal, al lado derecho del segundo rectángulo
  rect(1 * tam + ancho, (largo + espaciadoVertical), ancho, largo);
  
  // Rectángulo en la tercera fila horizontal, al lado izquierdo del décimo rectángulo
  rect(10 * tam - tam - ancho, (2 * (largo + espaciadoVertical)), ancho, largo);
  
  // Rectángulo en la quinta fila horizontal, al lado izquierdo del séptimo rectángulo
  rect(7 * tam - tam - ancho, (4 * (largo + espaciadoVertical)), ancho, largo);
}
