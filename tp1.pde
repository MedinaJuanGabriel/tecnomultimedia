/* tecnomultimedia
Alumno: Juan Gabriel Medina      NºLegajo:93530/3
Profesor: David Bedoian          Comision: 3
*/
String estado = "inicio";
float x;
PImage img1;
PImage img2;
PImage img3;
PFont font;
void setup(){
  size(640,480);
  frameRate(30);
  img1 = loadImage("pantalla1.jpg");
  img1.resize(width, height);
  img2 = loadImage("pantalla2.jpg");
  img2.resize(width,height);
  img3 = loadImage("pantalla3.jpg");
  img3.resize(width,height);
  font = loadFont("font.vlw");
  textFont(font);
  x=0;
}

void draw(){
  println(mouseX); //guia de coordenadas xy
  println("y:"); //guia de coordenadas xy
  println(mouseY); //guia de coordenadas xy
  //Pantalla inicio
  background(100); //fondo
  fill(#584848);//color del suelo
  rect(0,326,640,326); //suelo
  fill(170); //color grisaceo
  rect(433,148,350,300); //archivero metalico
  fill(165); //color grisaceo livianamente mas oscuro
  rect(448,269,170,80); //gaveta 2
  rect(517,277,20,20); //marbete 2
  rect(448,363,170,80); //gaveta 3
  rect(517,372,20,20); //marbete 3
  fill(#C1AEAE); //color de la gaveta 1
  rect(448,166,170,80); //gaveta 1(Boton de inicio)
  rect(517,175,20,20); //marbete 1
  if (estado.equals("inicio")) {
    fill(0);
    textAlign(CENTER);
    textSize(50);
    text("Revelar,Rebelar", width/3, height/3);
    textSize(30);
    text("obra de arte",140,215);
    text("electronico",140,240);
    text("INICIAR",529,220);
   }
   //Pantalla 1
   else if (estado.equals("pantalla 1")) {
    fill(245);
    textAlign(LEFT);
    image(img1,0,0);
    
    textSize(25);
    text("Autores:\nDirección: Biopus (Emiliano Causa) Producción: Biopus (Matías Romero Costas)\nIdea original: Emiliano Causa, Matías Jauregui Lorda y Daniel Loaiza\nEscenografía y montaje de equipo técnico: David Bedoian\nEdición de contenidos yanimación: Matías Jauregui Lorda\nProgramación software mapping y algoritmos de animación:\n Daniel Loaiza\nSonido: Matías Romero Costas", x/1, height/2);
    x-=1;
    
    if (x<-200)  {
      estado = "pantalla 2";
      x = 0;
     }
   }
       //Pantalla 2
 else if (estado.equals("pantalla 2")) {
    fill(#830122);
    textAlign(CENTER);
    image(img2,0,0);
    textSize(33);
    text("una interesante experiencia\n que`permite sacar a la luz,\n a través de la apertura de un archivero,\n las fotos y documentos que prueban\n la persecución y el espionaje ilegal\n de la policía bonaerense\n cometido contra\n estudiantes, trabajadores, militantes y políticos\ndurante la última dictadura militar.", width/2, x/2);
    
         x += 1; 
  if (x > height) { 
    x = 0;
      estado = "pantalla 3";
     }
    } 
    //Pantalla 3
    else if (estado.equals("pantalla 3")) {
    fill(234);
    textAlign(CENTER);
    image(img3,0,0);
    textSize(40);
    text("Se trata de\n un novedoso dispositivo\nideado especialmente\n por el grupo de artistas Biopus\npara el Museo de la Memoria\n de la Comisión Provincial por la Memoria", x/1, x/3);
    textSize(20);
    x += 1; 
  if (x > height) { 
    x = 0;
    estado = "reinicio";
  }
    }
  //pantalla reinicio
 else if (estado.equals("reinicio")) {
background(100);
  fill(#584848);
  rect(0,326,640,326);
  fill(170);
  rect(433,148,350,300);
  fill(165);
   rect(448,363,170,80);
  rect(517,372,20,20);
  fill(#E3C7C7);
  rect(448,269,170,80);
  rect(517,277,20,20);
  fill(#C1AEAE);
  rect(448,166,170,80);
  rect(517,175,20,20);
  textAlign(CENTER);
    textSize(50);
    text("¿Quieres reiniciar?", width/3, height/3);
    fill(20);
    textSize(25);
   text("REINICIA",529,220);
   textSize(23);
   text("Vuelve Al Inicio",529,320);
 }
    }
 
void mousePressed(){
 if (estado.equals("inicio")) {
    if (mouseX > 448 && mouseX < 618 && mouseY > 166 && mouseY < 246) {
      estado = "pantalla 1";
    }
  }  else if (estado.equals("reinicio")) {
    if (mouseX > 448 && mouseX < 618 && mouseY > 166 && mouseY < 246) {
      estado = "pantalla 1";
    } else if (mouseX > 448 && mouseX < 618 && mouseY > 269 && mouseY < 349) {
      estado = "inicio";
    }
  }
}
