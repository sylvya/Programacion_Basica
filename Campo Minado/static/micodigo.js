//var menu=["Productos","Ventas","Contacto"];
//document.write(menu[0]);


//var minado = [["Fortaleza","Oportunidades"],["Debilidades","Amenaza"]];
//document.write(foda [1] [1] );

function explosion(){
	alert("BOOM!!");
	document.write("<h1>BOOM!! Elegiste un area minada</h1>");
};

function ganaste(){
	document.write(" Eres un ganador!!!");

}

//1=bomba
//0=No hay Bomba

var campo=[ [ 1 , 0 , 0 ] ,
			[ 0 , 1 , 0 ] ,
			[ 1 , 1 , 1 ] ];

var textos=["Cesped","Bomba"]
var x, y;

alert("Estas en un campo minado,\n"+" elige una posición entre el 0 y el 2 para X y para Y");

x=prompt("Posicion en X (entre 0 y 2");

y=prompt("Posicion en Y (entre 0 y 2");


if ( x <= 2 && y <= 2 )
{
	var posicion=campo[x][y];
	document.write("Elegiste: " + textos[posicion]);
	if (posicion==1) {
		explosion();
	}
	else{
		ganaste();
	}
}
else 
{
	document.write("Te saliste del campo");
	explosion();
}
