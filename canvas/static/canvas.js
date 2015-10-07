//alert("fuera");



var dibujo, lienzo;

function inicio()
{
	dibujo = document.getElementById("dibujito");
	lienzo = dibujo.getContext("2d");

	dibujarGrilla(lienzo);

	/*lienzo.moveTo(0,0);
	lienzo.lineTo(300,0);
	lienzo.lineTo(300,300);
	lienzo.lineTo(0,300);
	lienzo.lineTo(0,0);
	lienzo.strokeStyle ="#F00";
	lienzo.stroke();*/

	//para hacer un circulo!!!

	lienzo.beginPath();//inicio de camino
	lienzo.strokeStyle = "#00F";
	lienzo.arc(150,150,100, (Math.PI * 2), false);
	lienzo.closePath();//cerrar camino
	lienzo.stroke();


}

function dibujarGrilla(pony){
	var ancho = 300, alto=300;
	var linea;
	var anchoLinea = 27;
	var limiteX = ancho /anchoLinea;
	var limiteY = alto /anchoLinea;


	for (linea = 0; linea <= limiteX; linea++)
	{
		punto = linea *anchoLinea;
		pony.beginPath();
		pony.strokeStyle="#AAA";
		pony.moveTo(punto+(linea*30), 0);
		pony.lineTo(punto - (linea *30), ancho);
		pony.stroke();
		pony.closePath();
	}

	for (linea = 0; linea <= limiteY; linea++)
	{
		punto = linea * anchoLinea;
		pony.beginPath();
		pony.strokeStyle="#AAA";
		pony.moveTo(0, punto +(linea*30);
		pony.lineTo(alto, punto - (linea *30));
		pony.stroke();
		pony.closePath();
	}
}