// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function sum (a, b) {
    return a + b
}

console.log(sum(10, 12))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

let myArray = [1322, 254, 32, 444]

function higher (myArray) {
    let high = 0
    for (let i = 0; i < myArray.length; i++){
        if (high < myArray[i]){
            high = myArray [i]
        }
    }
    return high
}

console.log(higher(myArray))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

let myString = "Caperuza Roja"

function vocals (palabra) {

    let countVocals = 0;

    for (let valor of palabra) {
        if (valor == "a" || valor == "e" || valor == "i" || valor == "o" || valor == "u" ){
            countVocals ++
        }
    }

    return countVocals
}

console.log(vocals(myString))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

let myArray2 = ["Tiburon","Pezcado","Gato","Perro","Elefante"]

function upperCase (myArray2) {
    let arrayUpperCase = []
    for (let valor of myArray2) {
        arrayUpperCase.push(valor.toUpperCase())
    }
    return arrayUpperCase
}

console.log(upperCase(myArray2))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function esPrimo(numero) {
  // El 0, el 1 y los números negativos no son primos
    if (numero <= 1) return false;

  // Comprobamos divisores desde 2 hasta la raíz cuadrada del número
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                return false; // Si es divisible, no es primo
            }
    }

  return true; // Si no encontró divisores, es primo
}

console.log(esPrimo(7));
console.log(esPrimo(10));
console.log(esPrimo(2));


// 1. Pedir el número al usuario
let input = prompt("Ingresa un número:");

// 2. Convertir el texto a un número (por si acaso)
let numero = Number(input);

// 3. Multiplicarlo por sí mismo (elevar al cuadrado)
let resultado = numero * numero;

// 4. Mostrar el resultado
alert("El resultado de multiplicar " + numero + " por sí mismo es: " + resultado);
console.log(resultado);
// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado