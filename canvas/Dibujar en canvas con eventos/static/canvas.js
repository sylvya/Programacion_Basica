//alert("fuera");



var dibujo, lienzo, t, b;

function inicio()
{
	t = document.getElementById("usuario");//Obteniendo el elemento del html con id usuario.
	b = document.getElementById("dibujalo");//Obteniendo el elemento del html con id dibujalo.
	dibujo = document.getElementById("dibujito");//Obteniendo el elemento del html con id dibujito.
	lienzo = dibujo.getContext("2d");//Obtener el cotexto bidimensional.



	b.addEventListener("click",  dibujarGrilla)//El evento está a la escucha de un clic sobre el boton y despues ejecuta la función dibujarGrilla.
	//dibujarGrilla(lienzo); 

	/*lienzo.moveTo(0,0);//a 0,0
	lienzo.lineTo(300,0);//linea hasta 300,0
	lienzo.lineTo(300,300);//linea hasta 300,300
	lienzo.lineTo(0,300);//linea hasta 0, 300
	lienzo.lineTo(0,0);//linea hasta 0,0
	lienzo.strokeStyle ="#F00";//
	lienzo.stroke();*/

	//para hacer un circulo!!!
	lienzo.beginPath();//inicio de camino
	lienzo.strokeStyle = "#00F";//se trabaja en hexadecimal
	lienzo.arc(150,150,100, (Math.PI * 2), false);//un arco con parametro usando la funcion Math.PI
	lienzo.closePath();//cerrar camino
	lienzo.stroke();


}


function dibujarGrilla(pony){

	var pony = lienzo;
	var rayas= Number(t.value);//conversion
	var ancho = 300, alto=300;
	var linea;
	var anchoLinea = ancho / rayas;
	var limiteX = ancho /anchoLinea;
	var limiteY = alto /anchoLinea;
	lienzo.clearRect(0,0, dibujo.width, dibujo.height);

	pony.strokeStyle = "AAA";


	for (linea = 0; linea <= limiteX; linea++)//la condicion siempre es un mientras, no un hasta.
	{
		
		pony.strokeStyle="#AAA";//comenzar trazo o camino
		pony.moveTo(linea*10, 0);
		pony.lineTo(alto -(linea * 10), alto, ancho);
		pony.stroke();
		pony.closePath();//cerrar trazo o camino
	}

	for (linea = 0; linea <= limiteY; linea++)//la condicion siempre es un mientras, no un hasta.
	{
		
		pony.beginPath();//comenzar trazo
		pony.strokeStyle="#AAA";
		pony.moveTo(0,linea * 10);
		pony.lineTo( ancho, alto - (linea * 10));
		pony.stroke();
		pony.closePath();//finalizar trazo
	}

}