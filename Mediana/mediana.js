function calcularPromedio(lista){
    let sumaLista = 0;
    lista.forEach(elemento => {
        sumaLista += elemento;
    })
    const promedio = sumaLista / lista.length;
    return promedio;
}

function calcularMediana(lista){
    lista = lista.sort((a, b) => {
        return a - b;
    })
    const mitadLista = parseInt(lista.length / 2);

    let mediana = 0;
    
    if(esPar(lista.length)){
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];
        mediana = calcularPromedio([elemento1, elemento2])
    } else {
        mediana = lista[mitadLista];
    }
    console.log(lista);
    return mediana;
}

function esPar(numero){
    if(numero % 2 === 0){
        return true;
    } else {
        return false;
    }
}


