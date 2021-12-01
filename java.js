class Producto {
    constructor(nombre , cantidad , precio ) {
        this.nombre = nombre;  
        this.cantidad = cantidad;  
        this.precio = parseFloat (precio);
        this.disponible = true; 
    }

    precioFinal() {
        let iva = this.precio * 0.21
        return this.precio + iva
    }
    vender () {
        this.disponible = false;
    }
    precioSugerido () {
        return this.precio * 1.21 * 1.25;
    }
}

let arrayProductos = [];
let product = 0 ; 

do {
    let product = prompt ("Ingrese el producto que desea comprar o fin para terminar de agregar"); 
    if (product === "fin" || product === "FIN" || product ==="Fin"){
        break;
    }
    else {
        const nombreP = product;
        const precioP = prompt ("Ingrese el precio del producto");
        const cantidadP = prompt ("Ingrese la cantidad comprada del producto");
        arrayProductos.push(new Producto(nombreP, precioP, cantidadP ));
    }
    
} 

while (product != "fin" || product != "Fin" || product != "FIN" );

console.log (arrayProductos);

for (let Producto of arrayProductos) {
    let contenedor = document.createElement("p"); 
    //Inner
    contenedor.innerHTML = `<h5> Nombre: ${Producto.nombre}</h5>
                            <p> Precio: ${Producto.precio} </p>
                            <p> Cantidad: ${Producto.cantidad} </p>`;

    document.body.appendChild (contenedor); 
}

