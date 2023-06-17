// Verificar si el mouse está dentro del rectángulo
void mouse(float x, float y) {
  if (dist(mouseX, mouseY, x + ancho * 40, y + largo / 4) < tam *1) {
    // Cambiar el color del rectángulo actual
    cambiarColorRectangulo(x, y);
  }
}
