var d=document.getElementById("dibujar");
        var lienzo=d.getContext("2d");
        var lineasFinal=50;
        var lineasInicio=0;

        while (lineasInicio<lineasFinal) {
            var sumaX=10*lineasInicio;
            var sumaY=10*(lineasInicio+1);
            dibujarEnPantalla("blue", 0, sumaX, sumaY, 500);
            lineasInicio++;
        }
        
        function dibujarEnPantalla(color, inicioX, inicioY, finalX, finalY){
            lienzo.beginPath();
            lienzo.strokeStyle=color;
            lienzo.moveTo(inicioX, inicioY);
            lienzo.lineTo(finalX, finalY);
            lienzo.stroke();
            lienzo.closePath();
        }