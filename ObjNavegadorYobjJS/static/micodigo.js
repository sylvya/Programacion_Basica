// alert("si funciona!!!");



//DOCUMENT OBJECT MODEL: todo el modelo de como 
//esta organizada la informacion para un navegador
//dentro de javaScript. un elemento del dom puede ser:

//ejemplo: Un document Object Model es:document.write
//el objeto document, es un objeto del navegador que
//determina el contenido del html, lo tienen todos los javascrip
// y write es una funcion del ojeto. los objetos pueden tener dos tipos de elementos
// Variables y Funciones
// y el parametro es lo que le vamos a escribir dentro de la funcioncion
// en el ejemplo siguiente seria "Hola Mamá"

//document.write("Hola Mamá ");

//var pi=3.1416

//Los objetos casi siempre empiezan con Mayusculas
//Math es un objeto (estatico)
//floor es una funcion de las matematicas de javascript
// floor un método estatico. y lo que hace es redondear al minimmo
//el decimal que le pase
//tambien existe la funcion ceil y lo que hace es mandarmelo al techo osea 
//al numero de mas arriba
// para ver todas las opciones de Math como javascript Math

//pi=Math.floor(pi);

//document.write(pi);

//objetos del navegador: 
//
//SACAR EL MAXIMO
//

/*var maxima;
maxima=Math.max( 5,23,4,5,12,23);
document.write(maxima)*/

/*Los 3 objetos de java escript son:

navigatos: Me controla las funciones especiales del navegador
Window: Me controla la ventana, puedo controlar el ancho y alto d ela ventana.
Document: Me controla el codigo Html.
*/

//obtener la localización de gps.


//ejemplo de lo que puedes hacer con navigator


/*function mostrar(pos)
{
	document.write(pos.coords.latitude+","+pos.coords.longitude);

}
navigator.geolocation.getCurrentPosition( mostrar );
*/
//EXISTEN2 TIPOS DE VARIABLE:
// variables de Asignación por Valor
//Variables de asignación pór Referencia

/*function Pokemon(nombrePokemon, vidaPoque, ataPoque)
{
	var estructuraPokemon=
	{
		nombre:nombrePokemon,
		vida:vidaPoque,
		ataque:ataPoque,
		datos: { tipo: "Tierra", debilidad: "Fuego"}
	};
	return estructuraPokemon;
}

var pikachu = Pokemon("Pikachu", 100, 55 );
var bulbasaur = Pokemon("Bulbasaur", 90, 50);*/
var pikachu3 = {
	nombre:"pikachu",
	vida:100,
	ataque:55,
	grito:"pikaaaa!!!!",
	imagen:"../static/pikachu.jpg"
}
var bulbasaur3 = {
	nombre:"Bulbasaur",
	vida:90,
	ataque:50,
	grito:"nose!!!!",
	imagen:"../static/bulbasaur.jpg"
}



function pokemon(n,v,a,g)
{
	this.grito=g;
	this.nombre=n;
	this.vida=v;
	this.ataque=a;
	this.gritar= function()
	{
		alert(this.grito);
	}
}
function inicio(){

	var seleccion = prompt("Elige tu Pokempon \n  1=Pikachu\n 2=Bulbasaur " );
	validaPokemon(seleccion);
	//var rattata = new pokemon("Rattata", 40, 2);
	//rattata.vida=rattata.vida-13;
	//rattata.grito = "Paredes!!";
	//nombrePokemon.innerText = rattata.nombre;

	//datos();

}
//function datos(){
	//var pikachu1 = new pokemon("Pikachu", 100, 55, "Pika");
	//document.write("nombre: "+pikachu1.nombre, "</br>Vida: "+pikachu1.vida, "</br>Ataque: "+pikachu1.ataque,  "</br>Grito: "+pikachu1.grito);
	//pikachu1.gritar();
	//   }

function validaPokemon(selec){

	if (selec==1)
	 {
	 	var pikachu1 = new pokemon(pikachu3.nombre, pikachu3.vida, pikachu3.ataque, pikachu3.grito);
	document.write("nombre: "+pikachu1.nombre, "</br>Vida: "+pikachu1.vida, "</br>Ataque: "+pikachu1.ataque, "</br>Grito: "+pikachu1.grito);
	nombrePokemon.innerText = pikachu1.nombre;
	var texto="</br><img src='"+ pikachu3.imagen +"' alt='Imagen' />";
    document.write(texto);
    
	 }
	 else if (selec==2) { 

	 	var bulbasaur1 = new pokemon("Bulbasaur", 90, 50,"nose");
	document.write("nombre: "+bulbasaur1.nombre, "</br>Vida: "+bulbasaur1.vida, "</br>Ataque: "+bulbasaur1.ataque, "</br>Grito: "+bulbasaur1.grito);
	 nombrePokemon.innerText = bulbasaur1.nombre;
	 var texto="</br><img src='"+ bulbasaur3.imagen +"' alt='Imagen' />";
	 document.write(texto);
	 }
	 else{
	 	alert("Error");
	 }
}




//en id datos de prueba ataque vida y grito del pokemon
//en base al nombre del po kemon  crear imagen adjuntar la imagen del pokemon
//e inserten una imagen del pokemon

/*
La funcion gritar es un método, 
un objeto que tiene un metodo.

Un Método es un Función metida dentro de un objeto.
Atributo = Variable, cuando la variable es parte de
un objeto se llama atributo.

Cuando la función es parte de un Objeto se le 
llama Método.

Una función es la que ocurre fuera de un objeto y
un método es el que ocurre por dentro de un Objeto.

Un atrubito es loq ue ocurre por dentro de un Objeto y 
una variable es la que ocurre por fuera de un Objeto.

*/