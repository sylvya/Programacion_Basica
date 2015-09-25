
var pokemon1={

	nombre:"Pikachu",
	vida:100,
	ataque:55,
	grito:"Pikaaaaa!!!!",
	imagen:"../static/img/pikachu.png"
}
var pokemon2={

	nombre:"Squitle",
	vida:95,
	ataque:50,
	grito:"Pikaaaaa!!!!",
	imagen:"../static/img/squitle.jpg"
}
var pokemon3={

	nombre:"Charmander",
	vida:90,
	ataque:45,
	grito:"Pikaaaaa!!!!",
	imagen:"../static/img/Charmander.png"
}
var pokemon4={

	nombre:"Bulbasaur",
	vida:85,
	ataque:40,
	grito:"Pikaaaaa!!!!",
	imagen:"../static/img/bulbasaur.jpg"
}
var pokemon5={

	nombre:"Chikorita",
	vida:80,
	ataque:40,
	grito:"Pikaaaaa!!!!",
	imagen:"../static/img/chikorita.png"
}
var pokemon6={

	nombre:"Totodile",
	vida:80,
	ataque:40,
	grito:"Pikaaaaa!!!!",
	imagen:"../static/img/totodile.png"
}
var pokemon7={

	nombre:"Charizard",
	vida:80,
	ataque:40,
	grito:"Pikaaaaa!!!!",
	imagen:"../static/img/charizard.jpg"
}

function pokemon(n,v,a,g){
	this.nombre=n;
	this.vida=v;
	this.ataque=a;
	this.grito=g;

}

function mostrar(){
	var seleccionPokemon=prompt("Elige tu Pokemon: \n 1=Pikachu, \n 2=Squitle \n3=Charmander \n4=bulbasaur \n 5=Chikorita \n 6=Totodile \n 7=Charizard");
	validaPokemon(seleccionPokemon);
}

function validaPokemon(seleccionar){
	if (seleccionar==1) {
		var pikachu= new pokemon(pokemon1.nombre, pokemon1.vida, pokemon1.ataque, pokemon1.grito);
		document.write("Nombre: " + pikachu.nombre, "</br>Vida: " + pikachu.vida,  "</br>Ataque: " + pikachu.ataque, "</br>Grito: " + pikachu.grito);
		nombrePokemon.innerText = pikachu.nombre;
		var imagen="</br><img src='"+ pokemon1.imagen +"' alt='imagen' />";	
		document.write(imagen);

	}
	else if (seleccionar==2) {
		var squitle= new pokemon(pokemon2.nombre, pokemon2.vida, pokemon2.ataque, pokemon2.grito);
		document.write("Nombre: " + squitle.nombre, "</br>Vida: " + squitle.vida,  "</br>Ataque: " + squitle.ataque, "</br>Grito: " + squitle.grito);
		nombrePokemon.innerText = squitle.nombre;
		var imagen="</br><img src='"+ pokemon2.imagen +"' alt='imagen' />";	
		document.write(imagen);
	}
	else if (seleccionar==3) {
		var charmander= new pokemon(pokemon3.nombre, pokemon3.vida, pokemon3.ataque, pokemon3.grito);
		document.write("Nombre: " + charmander.nombre, "</br>Vida: " + charmander.vida,  "</br>Ataque: " + charmander.ataque, "</br>Grito: " + charmander.grito);
		nombrePokemon.innerText = charmander.nombre;
		var imagen="</br><img src='"+ pokemon3.imagen +"' alt='imagen' width='300' />";	
		document.write(imagen);
	}
	else if (seleccionar==4) {
		var bulbasaur= new pokemon(pokemon4.nombre, pokemon4.vida, pokemon4.ataque, pokemon4.grito);
		document.write("Nombre: " + bulbasaur.nombre, "</br>Vida: " + bulbasaur.vida,  "</br>Ataque: " + bulbasaur.ataque, "</br>Grito: " + bulbasaur.grito);
		nombrePokemon.innerText = bulbasaur.nombre;
		var imagen="</br><img src='"+ pokemon4.imagen +"' alt='imagen' width='300' />";	
		document.write(imagen);
	}
	else if (seleccionar==5) {
		var chikorita= new pokemon(pokemon5.nombre, pokemon5.vida, pokemon5.ataque, pokemon5.grito);
		document.write("Nombre: " + chikorita.nombre, "</br>Vida: " + chikorita.vida,  "</br>Ataque: " + chikorita.ataque, "</br>Grito: " + chikorita.grito);
		nombrePokemon.innerText = chikorita.nombre;
		var imagen="</br><img src='"+ pokemon5.imagen +"' alt='imagen' width='300' />";	
		document.write(imagen);
	}
	else if (seleccionar==6) {
		var totodile= new pokemon(pokemon6.nombre, pokemon6.vida, pokemon6.ataque, pokemon6.grito);
		document.write("Nombre: " + totodile.nombre, "</br>Vida: " + totodile.vida,  "</br>Ataque: " + totodile.ataque, "</br>Grito: " + totodile.grito);
		nombrePokemon.innerText = totodile.nombre;
		var imagen="</br><img src='"+ pokemon6.imagen +"' alt='imagen' width='300'/>";	
		document.write(imagen);
	}
	else if (seleccionar==7) {
		var charizard= new pokemon(pokemon7.nombre, pokemon7.vida, pokemon7.ataque, pokemon7.grito);
		document.write("Nombre: " + charizard.nombre, "</br>Vida: " + charizard.vida,  "</br>Ataque: " + charizard.ataque, "</br>Grito: " + charizard.grito);
		nombrePokemon.innerText = charizard.nombre;
		var imagen="</br><img src='"+ pokemon7.imagen +"' alt='imagen' />";	
		document.write(imagen);
	}
	else{
		alert("ERROR");
	}
}