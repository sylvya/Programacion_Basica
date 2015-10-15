//Clase: Objeto maestro, del que se deriban otros objetos.
//Clase: Definición del Objeto.
//nombre es una variable global.
var nombre = "frisco";
var Mascota = function (n, v) {
	this.nombre = n;
	this.voz = v;
} 
Mascota.prototype.hablar = function ()
{
	alert(this.nombre + " Dice: " +this.voz);
}
//perro es un objeto de la clase Mascota
var perro = new Mascota ("roco", "Guau!!");
var gato = new Mascota ("misifu", "miau");
perro.hablar();
gato.hablar();


	alert("El nombre del perro es: " + perro.nombre);