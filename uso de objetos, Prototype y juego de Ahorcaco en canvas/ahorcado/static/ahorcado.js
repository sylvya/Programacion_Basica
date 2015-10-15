/*
1.- Dibujar el Poste
2.- Determinar la palbra
3.- Pasos para ahorcar:
	1.- Cabeza
	2.- Torso
	3.- Brazos
	4.- Pies
	5.- Ojos muertos
4.- Elegir las letras
	Si la letra existe:
		Pongo en la lista
	Si no existe
		Agrego un trazo al ahorcado
	Si ya dibuje el ahoracado completo
		Perdi
	Si Adivine la palabra 
		Entonces gané
*/
var palabra= "Tamarindo";
var hombre;

//Declaración de la clase ahorcado
var ahorcado=function (con) 
{
	this.contexto = con;
	this.maximo = 5;
	this.intentos = 0;
}


function iniciar(){
	var canvas = document.getElementById("c");
	canvas.width = 500;
	canvas.height = 400;
	var contexto = canvas.getContext("2d");
	hombre = new ahorcado(contexto);

}
