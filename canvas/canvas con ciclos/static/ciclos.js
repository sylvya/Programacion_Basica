var plantilla,lienzo;
function inicio(){

    plantilla=document.getElementById("canvasjs");
    lienzo=plantilla.getContext("2d");
    dibujarGrilla(lienzo);
    dibujarOjo(lienzo);
    diagonal(lienzo);

    /*
    lienzo.beginPath();
    lienzo.moveTo(0,0);
    lienzo.lineTo(300,0);
    lienzo.lineTo(300,300);
    lienzo.lineTo(0,300);
    lienzo.lineTo(0,0);
    lienzo.strokeStyle="#F00";
    lienzo.stroke();
    lienzo.closePath();*/
            
    lienzo.beginPath();
    lienzo.strokeStyle="#00F";
    lienzo.arc(150,150,100,(Math.PI*2),false);
    lienzo.stroke();
    lienzo.closePath();
    
}

function diagonal(l)
{
    var limiteY=300;
    var limiteX;
  l.strokeStyle="#AAA";

    
    for (limiteX =10 ; limiteX <= 300; limiteX+=10) {
        
        l.beginPath();
        l.moveTo(limiteX,300);
        l.lineTo(0,(limiteY-=10));
        l.stroke();
        l.closePath();
        
        
    }
    limiteY=300;
    for(limiteX =10 ; limiteX < 300;limiteX+=10 )
    {
                l.beginPath();
                l.moveTo(300,(limiteY-=10));
                l.lineTo(limiteX,0);
                l.stroke();
                l.closePath();
    }
    limiteX=310;
    for (limiteY =300 ; limiteY >= 0; limiteY-=10) {
        
        l.beginPath();
        l.moveTo((limiteX-=10),300);
        l.lineTo(300,limiteY);
        l.stroke();
        l.closePath();
    }
    limiteX=300;
    for (limiteY =290 ; limiteY >= 0;limiteY-=10) {
        
        l.beginPath();
        l.moveTo(0,limiteY);
        l.lineTo((limiteX-=10),0);
        l.stroke();
        l.closePath();
    }


    
}

function dibujarGrilla(l)
{
    
    var linea;
    l.strokeStyle="#AAA";
    for (linea = 0; linea <= 300; linea+=10)
    {
    ///Lineas Horizontales 
        l.beginPath();
        l.moveTo(0,linea);
        l.lineTo(300,linea);
        l.stroke();
        l.closePath();
    ///Lineas Verticales
        l.beginPath();
        l.moveTo(linea,0);
        l.lineTo(linea,300);
        l.stroke();
        l.closePath();
    }
}    
function dibujarOjo(l)
{
    
    var linea;
    
    for (linea = 0; linea <= 300; linea+=10)
    {
    
        l.beginPath();
        l.strokeStyle="#AAA";
        l.moveTo(0,linea);
        l.lineTo(linea,300);
        l.stroke();
        l.closePath();    
    }
    for (linea = 300; linea >= 0; linea-=10)
    {
        l.beginPath();
        l.strokeStyle="#AAA";
        l.moveTo(linea,0);
        l.lineTo(300,linea);
        l.stroke();
        l.closePath();
    }

}