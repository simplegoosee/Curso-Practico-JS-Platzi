
//? Codigo del cuadrado 

console.group('Cuadrado OwO')

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();

//? Codigo del triangulo

console.group('Triangulo OwO')

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.groupEnd();

//? Codigo del circulo

console.group('Circulo OwO')

const PI = Math.PI;

function circunferenciaCirculo(radio){
    return radio * 2;
}
function perimetroCirculo(radio){
    const diametro = circunferenciaCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI
} 

console.groupEnd();



function calcularPerimetroCuadrado(){
    const inputValue = document.getElementById('inputCuadrado').value;
    const perimetro = perimetroCuadrado(inputValue);
    alert(`El perimetro de tu cuadrado es ${perimetro}cm`);
}

function calcularAreaCuadrado(){
    const inputValue = document.getElementById('inputCuadrado').value;
    const area = areaCuadrado(inputValue);
    alert(`El area de tu cuadrado es ${area}cm^2`);
}



function calcularPerimetroTriangulo(){
    const lado1 = Number(document.getElementById('inputTriangulo1').value);
    const lado2 = Number(document.getElementById('inputTriangulo2').value);
    const base = Number(document.getElementById('inputTriangulo3').value);
    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(`El perimetro de tu triangulo es ${perimetro}cm`);
}

function calcularAreaTriangulo(){
    const base = Number(document.getElementById('inputTriangulo3').value);
    const altura = Number(document.getElementById('inputTriangulo4').value);
    const area = areaTriangulo(base, altura);
    alert(`El area de tu triangulo es ${area}cm^2`);
}



function calcularPerimetroCirculo(){
    const radio = Number(document.getElementById('inputCirculo').value);
    const perimetro = perimetroCirculo(radio);
    alert(`El perimetro de tu circulo es ${perimetro}`);
}

function calcularAreaCirculo(){
    const radio = Number(document.getElementById('inputCirculo').value);
    const area = areaCirculo(radio);
    alert(`El area de tu circulo es ${area}`);
}