var dibujo, lienzo;
function inicio() 
{
 dibujo = document.getElementById("dibujito");
 lienzo = dibujo.getContext("2d");
 lienzo.moveTo(0,0);
 lienzo.lineTo(300,0);
 lienzo.lineTo(300,300);
 lienzo.lineTo(0,300);
 lienzo.lineTo(0,0);
 lienzo.strokeStyle = "#666FFF";
 lienzo.stroke();


 
 dibujarGrilla(lienzo);

 lienzo.beginPath();
 lienzo.strokeStyle = "green";
 lienzo.fillStyle="green";
 lienzo.arc(150, 150, 100, (Math.PI *2),false);
 lienzo.fill();
 lienzo.closePath();
 lienzo.stroke();


}

function dibujarGrilla(l)
{
    var ancho = 300, alto = 300;
    var linea, punto;
    var anchoLinea = 50;
    var limiteX = ancho / anchoLinea;
    var limiteY = alto / anchoLinea;
    for(linea =0; linea <= limiteX*2; linea++)
    {
        punto = linea*anchoLinea;
        l.beginPath();
        l.strokeStyle="blue";
        l.moveTo(0, punto);
        l.lineTo(punto, 0);
        l.stroke();
        l.closePath();
    }

    for(linea =0; linea <= limiteY*2; linea++)
    {
        punto1 =anchoLinea*linea;
        punto2 =ancho-(linea*anchoLinea);
        l.beginPath();
        l.strokeStyle="blue";
        l.moveTo(punto1, 300);
        l.lineTo(0,punto2);
        l.stroke();
        l.closePath();
    }
}