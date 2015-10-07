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
	var linea, punto;
	var anchoLinea = ancho / rayas;
	var limiteX = ancho /anchoLinea;
	var limiteY = alto /anchoLinea;

	pony.strokeStyle = "AAA";


	for (linea = 0; linea <= limiteX; linea++)//la condicion siempre es un mientras, no un hasta.
	{
		punto = linea * anchoLinea;
		pony.beginPath();
		pony.strokeStyle="#000";
		pony.moveTo(punto, 0+(linea*50));
		pony.lineTo(punto, alto);
		pony.stroke();
		pony.closePath();
	}

	for (linea = 0; linea <= limiteY; linea++)//la condicion siempre es un mientras, no un hasta.
	{
		punto = linea * anchoLinea;
		pony.beginPath();//comenzar trazo
		pony.strokeStyle="#000";
		pony.moveTo(0, punto +(linea * 50));
		pony.lineTo(alto, punto);
		pony.stroke();
		pony.closePath();//finalizar trazo
	}
}