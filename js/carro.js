var precioTotal = 0;

function añadirProducto(titulo, imagen, precio) {
    // Crea un nuevo elemento
    var elementoNuevo = document.createElement("div");
    elementoNuevo.className = "containerProductos2";
    
    // Set inner HTML for the product element
    elementoNuevo.innerHTML = `
        <span class="tituloProducto">${titulo}</span>
        <img class="imagenProducto" src="${imagen}">
        <div class="detallesProducto">
            <span class="precioProducto">${precio}</span>
            <button class="botonRemover" type="button">Remover</button>
        </div>
    `;

    // agrega el nuevo elemento hijo a un div que no contenía nada con clase 'itemsCarro'
    document.querySelector(".itemsCarro").appendChild(elementoNuevo);


    var precioNumerico = parseFloat(precio.replace('$', '').trim());
    precioTotal += precioNumerico; 
    actualizarTotalCarroPrecio(); // Actualiza el precio

  //agrega un boton remover a cada producto que elimina el producto si así se lo desea.
    var removeButton = elementoNuevo.querySelector('.botonRemover');
    removeButton.addEventListener('click', function () {  
        removerProductoDelCarro(elementoNuevo)
            
        });


function removerProductoDelCarro(elementoNuevo){elementoNuevo.remove()
    //sustrae el precio si el producto es removido
    precioTotal -= precioNumerico;
    actualizarTotalCarroPrecio(); // Update the displayed total price
        };
}

   
 // Function to update the displayed total price
function actualizarTotalCarroPrecio() {
    var totalCarroPrecioElement = document.querySelector('.totalCarroPrecio');
    totalCarroPrecioElement.textContent = `$${precioTotal.toFixed(2)}`;

}

// Agrega el even listener a los botones añadir
var añadirAlCarro = document.querySelectorAll('.botonAñadir');



añadirAlCarro.forEach(function(button) {
      // Toma los detalles de los productos y los agrega al elemento nuevo creado en js.
    button.addEventListener('click', function() {
        var productContainer = button.closest('.containerProductos2');
        var titulo = productContainer.querySelector('.tituloProducto').innerText;
        var imagen = productContainer.querySelector('.imagenProducto').src;
        var precio = productContainer.querySelector('.precioProducto').innerText;

        // llama a la función anterior que añade el producto.
        añadirProducto(titulo, imagen, precio);
    });
});

//Agrega un alert al botón comprar
var botonComprar = document.querySelector('.botonComprar');
botonComprar.addEventListener('click',function(){
    comprar();
})
function comprar(){
    alert("¡Gracias por su compra! El total es: $"+Math.round(precioTotal*100)/100);
}
