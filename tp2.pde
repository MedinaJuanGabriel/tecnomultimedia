/*
Alumno:Juan Gabriel Medina   Legajo:93530/3    Comision: 3     docente:David Bedoian
Trabajo practico 2
autor, obra de arte elegida: Yaacov Agam, Homage to Federico Garcia Lorca II
Enlace al video presentacion: https://www.youtube.com/watch?v=FmJCqdG0GRw
*/
int cant = 11;  // Cantidad de rectángulos en el eje x
int anid = 6;  // Cantidad de rectángulos en el eje y
int tam;  // Tamaño de cada rectángulo
int ancho = 12;  // Ancho de cada rectángulo
int largo = 24;  // Alto de cada rectángulo
int espaciadoVertical = 23;  // Espaciado vertical entre rectángulos
int frameCounter = 0;  // Contador de frames
color colorPrincipal = color(37, 45, 92);  // Color principal
color colorAmarillo = color(246, 201, 82);  // Color amarillo
color colorRojo = color(227, 65, 76);  // Color rojo
color colorCeleste = color(68, 132, 204);  // Color celeste
PImage YaacovAgamHomagetoFedericoGarciaLorcaII;  // Imagen a cargar

void setup() {
  size(800, 400);  // Tamaño de la ventana
  YaacovAgamHomagetoFedericoGarciaLorcaII = loadImage("Yaacov-Agam-Homage-to-Federico-Garcia-Lorca-II.jpg");  // Cargar la imagen
  tam = width / (2 * cant);  // Calcular el tamaño de cada rectángulo
}

void draw() {
  background(255);  // Fondo blanco
  image(YaacovAgamHomagetoFedericoGarciaLorcaII, 0, 0, width/2, height/1.2);  // Mostrar la imagen
  
  // Incrementar el contador de frames
  frameCounter = contarFrames();
  
  // Imprimir el contador de frames en la consola
  println("Frames: " + frameCounter);
  
  pushMatrix();
  translate(width / 2 + 24, 24);  // Alinear los rectángulos
  
  for (int i = 0; i < cant; i++) {  // Iterar sobre los rectángulos en el eje x
    for (int j = 0; j < anid; j++) {  // Iterar sobre los rectángulos en el eje y
      float x = i * tam;  // Posición x del rectángulo
      float y = j * (largo + espaciadoVertical);  // Posición y del rectángulo
      
      // Dibujar el rectángulo principal con el color principal
      fill(colorPrincipal);
      rect(x, y, ancho, largo);
      
      mouse(x, y);  // Verificar si se hizo clic sobre el rectángulo
    }
  }
  
  dibujarRectanguloAmarillo();  // Dibuja rectángulos amarillos
  dibujarRectanguloRojo();  // Dibujar rectángulos rojos
  dibujarRectanguloCeleste();  // Dibujar rectángulos celestes
  tamañoaumdis();  // Evento de stroke y aumento/disminucion de tamaño
  
  popMatrix();
}

int contarFrames() {
  // Incrementar el contador de frames
  frameCounter++;
  // Devolver el valor actual del contador
  return frameCounter;
}

void cambiarColorRectangulo(float x, float y) {
  // Seleccionar un color aleatorio entre los colores disponibles
  color nuevoColor;
  int randomColorMode = int(random(3));
  
  if (randomColorMode == 0) {
    nuevoColor = colorAmarillo;
  } else if (randomColorMode == 1) {
    nuevoColor = colorRojo;
  } else {
    nuevoColor = colorCeleste;
  }
  
  // Mapear el color aleatorio a un rango de colores específico
  float mapeo = map(random(1), 0, 1, 0, 255);
  nuevoColor = lerpColor(colorPrincipal, nuevoColor, mapeo);
  
  // Dibujar el rectángulo con el nuevo color
  fill(nuevoColor);
  rect(x, y, ancho, largo);
}
