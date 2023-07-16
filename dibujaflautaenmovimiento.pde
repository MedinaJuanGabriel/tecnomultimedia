//Mapeo y dibujo de la flauta y titulo:
void flauta() {
  //TITULO
  textSize(40);
  text("El flautista de Hamellin", flautaX - -12, 81);

  // Dibujar la flauta
  float mapX = map(flautaX, 0, flautaFinalX, 0, 200); //Funcion map 
  fill(#C4C296);
  //Utilizacion del map para la posicion de los objetos:
  rect(mapX + 232, 115, 10, 22);
  rect(mapX + 237, 116, 10, 32);
  rect(mapX + 247, 117, 9, 37);
  rect(mapX+116, 116, 223, 21);
  rect(mapX - 1, 115, 10, 14);
  rect(mapX - 10, 115, -8, 11);

  fill(0);
  circle(mapX + 30, 114, 10);
  circle(mapX + 60, 115, 10);
  circle(mapX + 90, 115, 10);
  circle(mapX + 120, 115, 10);
  circle(mapX + 150, 115, 10);
  circle(mapX + 180, 115, 10);
  circle(mapX + 210, 115, 10);
}
