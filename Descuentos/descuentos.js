function calcularPrecioDescuento(precio, descuento, cupon){
    switch(cupon){
        case 'DIEZ':
            cupon = 10;
            break;
        case 'QUINCE':
            cupon = 15;
            break;
        case 'VEINTE':
            cupon = 20;
            break;
        default:
            cupon = 0;
            break;
    }
    
    const descuentoTotal = descuento + cupon;
    const precioConDescuento = precio - ((precio * descuentoTotal) / 100);
    return precioConDescuento;
}

function calcularPrecioConCupon(){

}

function calcularPrecioAPagar(){
    const precio = Number(document.getElementById('precio').value);
    const descuento = Number(document.getElementById('descuento').value);
    const cupon = document.getElementById('cupon').value;
    
    const precioConDescuento = calcularPrecioDescuento(precio, descuento, cupon);

    const resultadoHTML = document.getElementById('resultadoPrecio');
    resultadoHTML.innerHTML = `El valor total a pagar es de $${precioConDescuento} pesos.`;
}