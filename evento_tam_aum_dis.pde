void tamañoaumdis(){
int tamInicial = 1;
int tamMaximo=10;
int tamaño= 0;
noStroke();


  // Calcular la cercanía del mouse a la zona de cambio
  float cercania = map(mouseX, width / 2, width, 0, 1);
  
  // Calcular el grosor del trazo según la cercanía
  float grosor = map(cercania, 0, 1, tamInicial, tamMaximo);
  
 
  if (cercania < 0.5) {
    tamaño = color(0);
  } else {
    tamaño = color(255);
  // Cambiar el grosor y el color del trazo
  strokeWeight(grosor);
  stroke(tamaño);
}
}
