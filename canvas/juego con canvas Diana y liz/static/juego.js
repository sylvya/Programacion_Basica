var tablero, direccion;//declaramos una variable global, no precisamente una buena practica.

var teclas = 
	{
		UP:38,
		DOWN:40,
		LEFT:37,
		RIGHT:39
	};

var fondo={//Creamos un objeto para almacenar una variable que contenga la ruta de mi imagen.
	imagenURL:"../img/fondo.png", //cargar la url de la imagen que quiero cargar.
	imagenOK:false
};
var tifis={
	x:100,
	y:100,
	frenteURL:"../img/diana-frente.png",
	frenteOK:false,
	atrasURL:"../img/diana-atras.png",
	atrasOK:false,
	izqURL:"../img/diana-izq.png",
	izqOK:false,
	derURL:"../img/diana-der.png",
	derOK:false,
	velocidad:50
};

var liz={
	lizURL:"../img/liz.png",
	lizOK: false,
	x:"400",
	y:"200"

};

 function inicio()
 {
 	var canvas=document.getElementById("campo"); //obtener el elemento de mi canvas de html.
 	tablero = canvas.getContext("2d"); //obtener el contexto bidimensional de canvas de html.

 	fondo.imagen = new Image(); //yo puedo crear variables tipo JSON que a su vez puedo crearles variables arc¿bitrarias
 	//new Image es un OBJETO interno de javascript que me permite cargagr imagenes por dentro.
 	fondo.imagen.src = fondo.imagenURL;//a esta imagen con esta ulr coloque esta imagen.
 	fondo.imagen.onload =confirmarFondo;//Este evento ocurre cuando la imagen cargue.

 	tifis.frente = new Image(); //yo puedo crear variables tipo JSON que a su vez puedo crearles variables arc¿bitrarias
 	//new Image es un OBJETO interno de javascript que me permite cargagr imagenes por dentro.
 	tifis.frente.src = tifis.frenteURL;//a esta imagen con esta ulr coloque esta imagen.
 	tifis.frente.onload =confirmarFrente;//Este evento ocurre cuando la imagen cargue.

 	tifis.atras = new Image();
 	tifis.atras.src = tifis.atrasURL;
 	tifis.atras.onload = confirmarAtras;

 	tifis.izq = new Image();
 	tifis.izq.src = tifis.izqURL;
 	tifis.izq.onload = confirmarIzq;

 	tifis.der = new Image();
 	tifis.der.src = tifis.derURL;
 	tifis.der.onload = confirmarDer;

 	liz.enemiga = new Image();
 	liz.enemiga.src =liz.lizURL;
 	liz.enemiga.onload = confirmarLiz;



 	document.addEventListener("keydown", teclado);
 }
 function teclado(datos)
 {
 	var codigo = datos.keyCode;
 	if (codigo == teclas.UP)
 	 {
 	 	tifis.y -= tifis.velocidad;
 	 }
 	 if (codigo == teclas.DOWN)
 	 {
 	 	tifis.y += tifis.velocidad;
 	 }
 	 if (codigo == teclas.LEFT)
 	 {
 	 	tifis.x -= tifis.velocidad;
 	 }
 	 if (codigo == teclas.RIGHT)
 	 {
 	 	tifis.x += tifis.velocidad;
 	 }

 	 direccion = codigo;
 	 
 	 dibujar();

 }

 function confirmarFondo()
 {
 	fondo.imagenOK=true;
 	dibujar();
 }
 function confirmarFrente()
 {
 	tifis.frenteOK=true;
 	dibujar();
 }
 function confirmarAtras()
 {
 	tifis.atrasOK = true;
 	dibujar();
 }
 function confirmarIzq()
 {
 	tifis.izqOK = true;
 	dibujar();
 }
 function confirmarDer()
 {
 	tifis.derOK = true;
 	dibujar();
 }
function confirmarLiz()
{
	liz.lizOK = true;
	dibujar();
}

function dibujar()
{
	//Capa 1: Fondo
	if (fondo.imagenOK==true) //pregunta si el fondo.imagenOK es igual a verdadero es de cir si ya cargo.== es comparar.
		{
			tablero.drawImage(fondo.imagen, 0,0);//entonces dibujame en tablero, fondo.imagen en la posicion 0,0 de X y Y
		}
		//CApa 2: Liz
	//Como lizOK es booleana (verdadera o falsa), no necesito comprar
	if (liz.lizOK) 
		{
			tablero.drawImage(liz.enemiga, liz.x, liz.y);
		};
	//Capa 3: Tifis
	var tifiDibujo = tifis.frente;
	if (tifis.frenteOK && tifis.atrasOK && tifis.izqOK && tifis.derOK)
		 {
		 	if (direccion == teclas.UP)
		 	 {
		 	 	tifiDibujo = tifis.atras;
		 	 }
		 	 if (direccion == teclas.DOWN)
		 	 {
		 	 	tifiDibujo = tifis.frente;
		 	 }
		 	 if (direccion == teclas.LEFT)
		 	 {
		 	 	tifiDibujo = tifis.izq;
		 	 }
		 	 if (direccion == teclas.RIGHT)
		 	 {
		 	 	tifiDibujo = tifis.der;
		 	 }
			tablero.drawImage(tifiDibujo, tifis.x,tifis.y);		 	
		 }
}




 /*function dibujarFondo()
 {
 	tablero.drawImage(fondo.imagen, 0,0);//Dibujame una imagen, para esto tengo 3 parametros
 	//1.- Que imagen voy a dibujar fondo.iamgen, 2.- posición en X de la imagen y 3.- La posicion en Y de la imagen.
 }*/