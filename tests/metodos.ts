const persona = new Persona ("Alice", 30);
persona.mostrarDetalles();

// Una simple función
function sumar(a: number, b: number): number {
    return a + b;
}

const resultadoSuma = sumar(5, 3);
console.log("El resultado de la suma es:", resultadoSuma);

// Función flecha basica
const suma = (a: number, b: number): number => {
    return a + b;
}

const resultadoSumaFlecha = suma(5, 3);
console.log("El resultado de la suma es:", resultadoSuma);

// Función flecha sin parentesis alrededor de un solo parametro
const esPar = num => num % 2 === 0;
console.log("¿El número 6 es par?", esPar(4));

// función fecha con cuerpo implicito 
const saludar = nombre => `Hola, \${nombre}!`;

console.log (saludar("Alice"));

// función fecha en mapeo arreglo
const numeros = [1, 2, 3, 4, 5];
const alCuadrado = numeros.map(num => num * num);

console.log("Arreglo original:", numeros);
console.log("Arreglo al cuadrado:", alCuadrado);
