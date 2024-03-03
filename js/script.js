//Empezamos por asignar eventos a los botones de el menu

var prod = document.getElementById("productos");
var servicio = document.getElementById("eletro");
var contacto = document.getElementById("acceso");
var registro = document.getElementById("registro");
const manejador = document.getElementById("mostrar-modal");
const elSubmit = document.getElementById("vaRegistro");
const cierroModal = document.getElementById("cerrar");
prod.addEventListener("click", navProd);
servicio.addEventListener("click", navS);
contacto.addEventListener("click", navA);
registro.addEventListener("click", abrir);
cierroModal.addEventListener("click", cierroM);
elSubmit.addEventListener("submit", validar);

function abrir() {
    manejador.classList.add("muestro");
}

function cierroM() {
    manejador.classList.remove("muestro");
}

function validar() {
    return true;
}

function cargarFunciones(){
    navProd();
}

function navS(){

}

function navA(){

}

function navProd() {
    let elemProd = document.createElement("a");
    elemProd.setAttribute("onclick", "cargoProd()");
    elemProd.text = "Productos";
    elemProd.className = "itemsMenu";
    prod.innerHTML = elemProd.outerHTML;
}

function mensaje() {
    console.log("funcionó");
}


//Armamos el carrusel 

var ruta = "img/";

var imagenes = [];
imagenes[0] = ruta + "tv01.png";
imagenes[1] = ruta + "tv02.png";
imagenes[2] = ruta + "tv03.png";

for(let i = 0; i < imagenes.length;i++){
    console.log(imagenes[i]);
}


var ubicacion = document.getElementById("carrusel");
var irAtras = document.getElementById("atras");
var irAdelante = document.getElementById("adelante");
var contador = 0;
//var elemento;
irAdelante.addEventListener("click",voyAdelante);
irAtras.addEventListener("click",voyAtras);
function voyAdelante() {
    if (contador < 2) {
        let elemento = document.createElement("img");
        elemento.src = imagenes[contador];
        contador++;
        ubicacion.innerHTML = elemento.outerHTML;
    } else {
        contador = 0;
        let elemento = document.createElement("img");
        elemento.src = imagenes[contador];
        ubicacion.innerHTML = elemento.outerHTML;
    }

}

function voyAtras() {
    if(contador > 0){
        contador--;
        let elemento = document.createElement("img");
        console.log("a ver el contador " + contador);
        elemento.src = imagenes[contador];
        console.log("a ver el vector " + imagenes[contador]);
        ubicacion.innerHTML = elemento.outerHTML;
    } else {
        contador = 2;
        let elemento = document.createElement("img");
        console.log("a ver el contador " + contador);
        elemento.src = imagenes[contador];
        console.log("a ver el vector " + imagenes[contador]);
        ubicacion.innerHTML = elemento.outerHTML;
    }
}


//Creamos el iframe
var ubicacionProd = document.getElementById("paraCarru")
console.log("todavia no entiendo como tomar un valor " + ubicacionProd);
function cargoProd(){
    let elemento = document.createElement("iframe");
    elemento.className = "claseIframe"
    elemento.src = "paginas/productos.html";
    ubicacionProd.innerHTML = elemento.outerHTML;
}