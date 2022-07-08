
//? Codigo del cuadrado 

console.group('Cuadrado OwO')

const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden ${ladoCuadrado}cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perimetro es ${perimetroCuadrado}cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El area es ${areaCuadrado}cm^2`);

console.groupEnd();

//? Codigo del triangulo

console.group('Triangulo OwO')

const ladoTriangulo = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(`Los lados del triangulo son: ${ladoTriangulo}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm y su altura es de ${alturaTriangulo}`);

const perimetroTriangulo = ladoTriangulo + ladoTriangulo2 + baseTriangulo;
console.log(`El perimetro es ${perimetroTriangulo}cm`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El area es ${areaTriangulo}cm^2`);

console.groupEnd();

//? Codigo del circulo

console.group('Circulo OwO')

const radioCirculo = 4;
const diametro = radioCirculo * 2;
const PI = Math.PI;
console.log(`PI vale ${PI}`);

const perimetroCirculo = diametro * PI;
console.log(`la circunferencia del circulo es ${perimetroCirculo}cm`);

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log(`El area es ${areaCirculo}cm^2`);

console.groupEnd();