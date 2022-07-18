
function calcularPromedio(lista){
    let sumaLista = 0;
    lista.forEach(elemento => {
        sumaLista += elemento;
    })
    const promedio = sumaLista / lista.length;
    return promedio;
}
