
//var tomarDatos = localStorage.getItem("vaArray");
var formato;
formato = JSON.parse(localStorage.getItem("vaArray"));
//var size = formato[0];
console.log("Esto está en elmacenamiento " + formato.arrayProd[0].precio)


function muestro(){
    let ubicacion = document.getElementById("salida");
    let elemento = document.createElement("span");
    elemento.textContent = "Precio " + formato.arrayProd[0].precio;
    ubicacion.outerHTML = elemento.innerHTML;

    /*for(let i = 0;i < formato.arrayProd.length;i++){
    console.log("Traigo el dato " + formato.arrayProd[i].precio)
    
}*/
}