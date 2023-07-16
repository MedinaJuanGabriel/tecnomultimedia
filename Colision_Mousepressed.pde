//Cambio de estados a traves de colision para realizar el pase de pantallas y mantener un flujo en la historia:

void mousePressed() {
  if (estado == 0) {
    if (colisionConBotonRectangular(width/4*2, height/3, 200, 80)) {
      println("CLICK en boton de jugar");
      estado = 1;
    } else if (colisionConBotonRectangular(width/2, height/2, 200, 80)) {
      println("CLICK en boton de creditos");
      estado = 21;
    }
  }
  else if (estado == 1) {
    if (colisionConBotonRectangular(550, 580, 130, 30)) {
      println("pantalla 1 a 2");
      estado = 2;
    }
  } else if (estado == 2) {
    if (colisionConBotonRectangular(550, 580, 130, 30)) {
      println("pantalla 2 a 3");
      estado = 3;
    }    
  } else if (estado == 3) {
   if (colisionConBotonRectangular(width/4, height/20, 300, 60)) {
    estado = 4;
   }else if (colisionConBotonRectangular(width/4*3, height/20, 300, 60)) {
    estado = 7;
  }
  }
  else if (estado == 4) {
    if (colisionConBotonRectangular(550, 580, 130, 30)) {
      println("pantalla 4 a 5");
      estado = 5;
    }
  } else if (estado == 5) {
    if (colisionConBotonRectangular(550, 580, 130, 30)) {
      println("pantalla 5 a 6");
      estado = 6;
    }
  }
  else if (estado == 6) {
    if (colisionConBotonRectangular(550, 580, 130, 30)) {
      println("volver al inicio");
      estado = 0;
      final1=true;
      
    }
  }
 else if (estado == 7) {
    if (colisionConBotonRectangular(550, 580, 130, 30)) {
      println("pantalla 7 a 8");
      estado = 8;
    }
 }
 else if (estado == 8) {
   if (colisionConBotonRectangular(width/4*3, height/20, 300, 60)) {
    estado = 9;
   }else if (colisionConBotonRectangular(width/4, height/20, 300, 60)) {
    estado = 12;
  }
  }
 else if (estado == 9) {
    if (colisionConBotonRectangular(550, 580, 130, 30)) {
      println("pantalla 9 a 10");
      estado = 10;
    }
  }
  else if (estado == 10) {
    if (colisionConBotonRectangular(550, 580, 130, 30)) {
      println("pantalla 10 a 11");
      estado = 11;
    }
  }
   else if (estado == 11) {
    if (colisionConBotonRectangular(550, 580, 130, 30)) {
      println("volver al inicio");
      estado = 0;
   final2=true;
    }
  }
 
 else if (estado == 12) {
    if (colisionConBotonRectangular(550, 580, 130, 30)) {
      println("pantalla 12 a 13");
      estado = 13;
    }
  }
  else if (estado == 13) {
    if (colisionConBotonRectangular(550, 580, 130, 30)) {
      println("pantalla 13 a 14");
      estado = 14;
    }
  }
 else if (estado == 14) {
   if (colisionConBotonRectangular(width/4*3, height/20, 300, 60)) {
    estado = 15;
   }else if (colisionConBotonRectangular(width/4, height/20, 300, 60)) {
    estado = 17;
  }
  }
 else if (estado == 15) {
    if (colisionConBotonRectangular(550, 580, 130, 30)) {
      println("pantalla 15 a 16");
      estado = 16;
    }
  }
  else if (estado == 16) {
    if (colisionConBotonRectangular(550, 580, 130, 30)) {
      println("volver al inicio");
      estado = 0;
   final3=true;
    }
  }
 else if (estado == 17) {
    if (colisionConBotonRectangular(550, 580, 130, 30)) {
      println("pantalla 17 a 18");
      estado = 18;
    }
  }
  else if (estado == 18) {
    if (colisionConBotonRectangular(550, 580, 130, 30)) {
      println("pantalla 18 a 19");
      estado = 19;
    }
  }
  else if (estado == 19) {
    if (colisionConBotonRectangular(550, 580, 130, 30)) {
      println("pantalla 19 a 20");
      estado = 20;
    }
  }
  else if (estado == 20) {
    if (colisionConBotonRectangular(550, 580, 130, 30)) {
      println("volver al inicio");
      estado = 0;
    final4=true;
    }
  }
   else if (estado == 21) {
    if (colisionConBotonRectangular(550, 580, 130, 30)) {
      println("volver al inicio");
      estado = 0;
    }
  }
}
