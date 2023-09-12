window.onload = function(){
    fondo1=document.getElementById("fondouno")
    fondo2=document.getElementById("fondodos")
    paramover=setInterval(mover,50);
    setInterval(repetir,2250);
}
desplazar=0;
function mover(){
        desplazar-=10;
        desplazar2=desplazar+450;
        posicion1=desplazar+"px";
        posicion2=desplazar2+"px";
        fondo1.style.left=posicion1;
        fondo2.style.left=posicion2;
    }
    function repetir(){
        fondo1.style.left="0px";
        fondo2.style.left="450px";
        desplazar=0;
    }
