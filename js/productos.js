var formProductos = document.forms["productos"];
var comprar = document.getElementById("compra");
var sumatoria = 0;
var elObjeto = {};
comprar.addEventListener("click", armarCompra);
contador = 0;
//Voy a chequear como viene el dato
/*let chequeo = formProductos["tvSamsung55"];
let otro = formProductos["celSony5RG"];
console.log("Miro el dato " + chequeo.checked);
console.log("Miro el vacio " + otro.checked);*/

//Tomo los checkbox
var prod0 = formProductos["tvSamsung55"];
var prod1 = formProductos["celSony5RG"];
var prod2 = formProductos["dell16GW"];
var suma = document.getElementById("sumaTotal");
prod0.addEventListener("click", checkprod0);
prod1.addEventListener("click", checkprod1);
prod2.addEventListener("click", checkprod2);
var valorP1 = parseFloat(document.getElementById("precio1").innerHTML);
var valorP2 = parseFloat(document.getElementById("precio2").innerHTML);
var valorP3 = parseFloat(document.getElementById("precio3").innerHTML);

//console.log("A ver como vien eñ dato de los productos " + prod0.value);

//Armo el array de los productos
var arrayInicial = [];
arrayInicial[0] = prod0;
arrayInicial[1] = prod1;
arrayInicial[2] = prod2;

for (let k = 0; k < arrayInicial.length; k++) {

  console.log("Entro a ver el array " + arrayInicial[k].value);
  /*if(arrayInicial[k].checked){
    console.log("A ver si entro en el if de el for")
  }*/
}

//var elemento = document.createElement("label");
function checkprod0() {
  for (let k = 0; k < arrayInicial.length; k++) {
    
    if (arrayInicial[k].checked == true) {
      console.log("A ver que me muestra como chequeado o no " + arrayInicial[k].checked);
      sumatoria += valorP1;
      contador++;
      console.log(sumatoria);
      let elemento = document.createElement("label");
      elemento.innerHTML = "$" + sumatoria;
      suma.outerHTML = elemento.innerHTML;
      //console.log("muestro el contador para saber si llega hasta acá " + elemento)
    } else if (arrayInicial[k].checked == false) {
      console.log("A ver que me muestra como chequeado o no " + arrayInicial[k].checked);
        if (sumatoria == 0) {
          let valor = "";
          suma.innerHTML = valor
        } else {
          sumatoria -= valorP1;
          contador--;
          let elemento = document.createElement("label");
          elemento.innerHTML = "$" + sumatoria;
          suma.outerHTML = elemento.innerHTML;
          //console.log("A ver si detecta la deselección " + elemento)
        }
    }
  }
  /*if (prod0.checked) {
    sumatoria += valorP1;
    contador++;
    console.log(sumatoria);
    //console.log("como se ve el checkbox seleccionado " + prod0.value);
    let elemento = document.createElement("label");
    elemento.innerHTML = "$" + sumatoria;
    suma.innerHTML = elemento.outerHTML;
  } else {
    if (sumatoria == 0) {
      let valor = "";
      suma.innerHTML = valor
    } else {
      sumatoria -= valorP1;
      contador--;
      let elemento = document.createElement("label");
      elemento.innerHTML = "$" + sumatoria;
      suma.innerHTML = elemento.outerHTML;
    }

  }*/
}

function checkprod1() {
  if (prod1.checked) {
    sumatoria += valorP2;
    contador++;
    console.log(sumatoria);
    let elemento = document.createElement("label");
    elemento.innerHTML = "$" + sumatoria;
    suma.innerHTML = elemento.outerHTML;
  } else {
    if (sumatoria == 0) {
      let valor = "";
      suma.innerHTML = valor
    } else {
      sumatoria -= valorP2;
      contador--;
      let elemento = document.createElement("label");
      elemento.innerHTML = "$" + sumatoria;
      suma.innerHTML = elemento.outerHTML;
    }

  }
}

function checkprod2() {
  if (prod2.checked) {
    sumatoria += valorP3;
    contador++;
    console.log(sumatoria);
    let elemento = document.createElement("label");
    elemento.innerHTML = "$" + sumatoria;
    suma.innerHTML = elemento.outerHTML;
  } else {
    if (sumatoria == 0) {
      let valor = "";
      suma.innerHTML = valor
    } else {
      sumatoria -= valorP3;
      contador--;
      let elemento = document.createElement("label");
      elemento.innerHTML = "$" + sumatoria;
      suma.innerHTML = elemento.outerHTML;
    }

  }
}

//Armamos el objeto de la compra para crear el local storage
var arrayCompra = [contador];



function armarCompra() {
  try {
    if (!prod0.checked && !prod1.checked && !prod2.checked) {
      throw "Debe elegir algún producto";
    } else {
      //Tiene productos seleccionadxos
      for (let i = 0; i < arrayCompra.length; i++) {

      }

      if (prod0.checked && prod1.checked && prod2.checked) {
        let nom1 = document.getElementById("nomPro1").innerHTML;
        let nom2 = document.getElementById("nomPro2").innerHTML;
        let nom3 = document.getElementById("nomPro3").innerHTML;
        elObjeto = { nomprod0: nom1, elValor1: valorP1, nomprod1: nom2, elValor2: valorP2, nomprod2: nom3, elValor3: valorP3 };
        localStorage.setItem("compra", JSON.stringify(elObjeto));
      } else if (prod1.checked) {

      } else if (prod2.checked) {

      }
    }

  } catch (er) {
    alert(er);
  }


}