/*
10) Realice una página que permita cargar una fecha en el formato DD-MM-YYYY y diga
cuántos días faltan o ya pasaron respecto del día de hoy.
*/

function valido(vieneFecha){
    let laFecha = new Date(vieneFecha);
    let esHoy = new Date();
    let referencia = 86400000;
    let dif = esHoy.getTime() - laFecha.getTime();
    let difFinal = parseInt(dif/referencia);
    let elHtml = '';
    if(difFinal > 0){
        elHtml += "Entre la fehca ingresada y la fecha de hoy han pasado " + difFinal + " días";
    } else if(difFinal < 0){
        elHtml += "Faltan para que llegue la fecha ingresada " + (-1 * difFinal) + " días";
    } else {
        elHtml += "Las fechas ingresadas son las mismas";
    }
    return document.getElementById("salida").innerHTML = elHtml;
}