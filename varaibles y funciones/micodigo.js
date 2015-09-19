
	//alert es una función
	//los () es la instrucción
	//
	//alert("Hola mamá, ya sé programar");

//var nombre="silvia";
//var apellido="López";
//var edad=25;


//alert(nombre +" "+ apellido+" "+'\n'+"edad:"+ edad);

var peso;
var pesoEnMarte; //CamelCase

alert("¿Quieres saber tu peso en Marte");
peso= prompt("¿Cúal es tu peso?","60" );
peso=parseInt(peso);

pesoEnMarte=(peso / 9.81)*3.711;
alert(pesoEnMarte);
