/*
5) El programa “elige” un número al azar entre uno y un millón y pregunta por el mismo. El
visitante intenta acertar en una ventana emergente. Tras cada respuesta, una nueva
ventana dice “el número es Mayor” o “el número es Menor” y se pide un nuevo número,
hasta que el usuario lo acierta. En ese momento una ventana lo felicita y muestra el número
de intentos que ha realizado hasta el acierto.
*/

var num = parseInt(Math.random(1 - 20) * 20);
var armado = document.getElementById("salida");

console.log(num);


function evaluar(elValor){
    armado = ' ';
    //document.getElementById("salida").innerHTML = armado;
    if(elValor > num){
        armado += 'El número ingresado ' + elValor + ' es mayor que el número secreto <br>';
    } else if (elValor < num) {
        armado += 'El número ingresado ' + elValor + ' es menor que el número secreto <br>';
    } else {
        armado += '¡Felicitaciones! - ' + elValor + ' es el número secreto';
    }
    return document.getElementById("salida").innerHTML = armado;
}
