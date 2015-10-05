

var c, t, b;

function calcular(){

	var numero = Number(t.value);
	var calculo = 1;
	var n = 1;
	/*while (n <=numero)
	{
		calculo = calculo * n;
		n ++;
	}*/

	for (n=1; n <= numero; n++) {
		calculo = calculo * n;	
	}

	c.innerHTML = calculo;
}

function inicio(){
	c=document.getElementById("caja");
	t=document.getElementById("alejandra");
	b=document.getElementById("botoncito");

	b.addEventListener("click", calcular);


	/*var numero = 1;
	var residuo;
	
	while (numero <= 50)
	{
		residuo = numero  % 2;
		if (residuo == 0) 
			{
				c.innerHTML += " " + numero;
			}
			numero++;
	}*/
}