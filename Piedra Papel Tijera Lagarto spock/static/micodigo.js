//Genera un número aleatorio entre un rango de enteros
function aleatorio(minimo, maximo){
	var numero=Math.floor(Math.random()
		*(maximo - minimo + 1) + minimo);
	return numero;
}

var piedra=0;
var papel=1;
var tijera=2;
var lagarto=3;
var spock=4;
var opciones=["Piedra", "Papel","Tijera","Lagarto","Spock"];


  
var opcionUsuario;
var opcionMaquina=aleatorio(0,4);

opcionUsuario=prompt("¿Qué elegiste? \n Piedra: 0 \n Papel: 1 \n Tijera: 2 \n Lagarto: 3 \n Spock: 4", 0);

alert("Elegiste" + " " + opciones[opcionUsuario]);
alert("JavaScript eligio" + " " +opciones[opcionMaquina]);

if (opcionUsuario == 0) 
{

	if (opcionMaquina==piedra) {
		alert("Empate");
	}
	else if (opcionMaquina==papel) {
		alert("Perdiste");
	}
	else if (opcionMaquina==tijera) {
		alert("Ganaste!");
	}
	else if (opcionMaquina==lagarto) {
		alert("Ganaste");
	}
	else if (opcionMaquina==spock) {
		alert("Perdiste");
	}
}
else if (opcionUsuario == 1) 
{

	if (opcionMaquina==piedra) {
		alert("Ganaste");
	}
	else if (opcionMaquina==papel) {
		alert("Empate");
	}
	else if (opcionMaquina==tijera) {
		alert("Perdiste");
	}
	else if (opcionMaquina==lagarto) {
		alert("Perdiste");
	}
	else if (opcionMaquina==spock) {
		alert("Ganaste");
	}
}
else if (opcionUsuario == 2) 
{
	if (opcionMaquina==piedra) {
		alert("Perdiste");
	}
	else if (opcionMaquina==papel) {
		alert("Ganaste");
	}
	else if (opcionMaquina==tijera) {
		alert("Empate");
	}
	else if (opcionMaquina==lagarto) {
		alert("Ganaste");
	}
	else if (opcionMaquina==spock) {
		alert("Perdiste");
	}
}
else if (opcionUsuario == 3) 
{
	if (opcionMaquina==piedra) {
		alert("Perdiste");
	}
	else if (opcionMaquina==papel) {
		alert("Ganaste");
	}
	else if (opcionMaquina==tijera) {
		alert("Perdiste");
	}
	else if (opcionMaquina==lagarto) {
		alert("Empate");
	}
	else if (opcionMaquina==spock) {
		alert("Ganaste");
	}
}
else if (opcionUsuario == 4) 
{
	if (opcionMaquina==piedra) {
		alert("Ganaste");
	}
	else if (opcionMaquina==papel) {
		alert("Perdiste");
	}
	else if (opcionMaquina==tijera) {
		alert("Ganaste");
	}
	else if (opcionMaquina==lagarto) {
		alert("Perdiste");
	}
	else if (opcionMaquina==spock) {
		alert("Empate");
	}
}