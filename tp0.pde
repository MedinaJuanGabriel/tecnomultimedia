/*
Juan Gabriel Medina
Legajo:93530/3
Comision 3
tp0 - Retrato
*/

PImage img;

void setup(){
size(800,400);
img = loadImage("retrato.jpeg");
}

void draw(){
  println(mouseX); //guia de coordenadas xy
  println("y:"); //guia de coordenadas xy
  println(mouseY); //guia de coordenadas xy
  background(19,80,32); //Color fondo
  fill(226,168,152); //Color piel 1
  ellipse(200,170,248,250); //cabeza
  ellipse(200,190,250,237); //cabeza
  rect(175,300,50,50); //cuello
  rect(150,323,100,100); //torso superior
  ellipse(76,159,30,50); //oreja izquierda
  ellipse(320,159,30,50); //oreja derecha
  fill(216,150,145); //Color piel 2
  ellipse(198,255,70,13); //labios
  triangle(177,218,200,169,216,216); //nariz
  fill(255); //color blanco
  ellipse(160,170,50,40); //esclerotica izquierda
  ellipse(240,170,50,40); //esclerotica derecha
  fill(126,76,34); //color marron cafe
  ellipse(160,170,20,20); //iris izquierdo
  ellipse(240,170,20,20); //iris derecho
  fill(0); //color negro
  ellipse(160,170,10,10); //pupila izquierda
  ellipse(240,170,10,10); //pupila derecha
  fill(0,0,0,200); //Color negro translucido
  stroke(0); //aplicar linea
  ellipse(160,170,70,40); //lente de sol izquierdo
  ellipse(240,170,70,40); //lente de sol derecho
  fill(0); //color negro
  rect(190,157,20,10); //Parte de lentes 1
  rect(110,160,17,10); //Parte de lentes 2
  rect(275,160,17,10); //Parte de lentes 3
  rect(120,154,163,2); //Parte de lentes 4
  strokeWeight(5); //grosor de la linea y bordes
  line(110,160,81,139); //Parte de lentes 5
  line(291,158,313,123); //Parte de lentes 6
  line(157,255,240,255); //Boca
 point(96,253); //Barba1(B1)
 point(102,255); //B2
 point(101,261); //B3
 point(108,261); //B4
 point(107,268); //B5
 point(114,269); //B6
 point(116,276); //B7
 point(123,275); //B8
 point(124,281); //B9
 point(129,278); //B10
 point(130,285); //B11
 point(136,281); //B12
 point(136,288); //B13
 point(142,284); //B14
 point(143,292); //B15
 point(92,246); //B16
 point(149,286); //B17
 point(151,295); //B18
 point(156,290); //B19
 point(157,299); //B20
 point(164,295); //B21
 point(168,302); //B22
 point(175,295); //B23
 point(176,302); //B24
 point(184,295); //B25
 point(184,302); //B26
 point(193,304); //B27
 point(193,295); //B28
 point(200,304); //B29
 point(200,294); //B30
 point(206,303); //B31
 point(207,294); //B32
 point(213,302); //B33
 point(216,292); //B34
 point(221,300); //B35
 point(226,292); //B36
 point(229,299); //B37
 point(235,293); //B38
 point(238,299); //B39
 point(243,291); //B40
 point(193,295); //B41
 point(248,296); //B42
 point(251,287); //B43
 point(257,291); //B44
 point(261,284); //B45
 point(268,286); //B46
 point(216,292); //B47
 point(270,277); //B48
 point(277,279); //B49
 point(280,271); //B50
 point(287,272); //B51
 point(288,262); //B52
 point(295,258); //B53
 point(292,266); //B54
 point(301,253); //B55
  fill(57,47,26); //Color marron oscuro
  noStroke(); //quita bordes
  rect(100,50,190,50); //cabello 1
  rect(100,40,170,72); //cabello 2
  rect(95,35,50,50); //cabello 3
  fill(255,255,255,160); //Color blanco semitranslucido
  ellipse(176,163,15,7); //reflejo izquierdo
  ellipse(257,162,15,7); //reflejo derecho
  fill(20); //Color Negro grisaceo
  ellipse(126,358,78,87); //remera 1
  ellipse(269,358,78,87); //remera 2
  rect(90,350,217,170); //remera 3
  image(img,400,0,400,400); //retrato.jpeg
}
