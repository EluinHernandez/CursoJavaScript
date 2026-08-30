//Operadores

//Operadores Aritmeticos

console.log(5 + 10) //Suma

let a = 5
let b = 10
console.log(a + b) //Sumar
console.log(a - b) //Restar
console.log(a / b) // Dividir
console.log(a * b) //Multiplicar

console.log(a % b) //Modulo, resto de la division
console.log(a ** b) //Exponente

a++ //Incremento
console.log(a)

b-- //Descremento
console.log(b)

//Operadores de asignacion

let myVariable = 2
console.log(myVariable)
myVariable +=2
console.log(myVariable)

myVariable -=2
console.log(myVariable)
myVariable /=2
console.log(myVariable)
myVariable *=2
console.log(myVariable)

//Operadores de Comparacion

console.log(a)

console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == 6) //Igualdad por valor
console.log(a == "6") //Igualdad por valor
console.log(a == a)
console.log(a === a) //Igualdad por identidad (por tipo y valor)
console.log(a === 6)
console.log(a === "6")
console.log(a != 6)
console.log(a !== 6)
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)
console.log(0 == "")
console.log(0 == " ")
console.log(0 == '')
console.log(0 == "Hola")
console.log(0 === "")
console.log(undefined ==  null)
console.log(undefined ===  null)

//Truthy values (valores verdaderos)

// Todos los numeros positivos y negatiuvos menos el cero
// Todas las cadenas de texto menos las vacias
// El boolean true

//Falsy values (Valores falsos)

// 0
// 0n
// null
// undefined
// NaN
// El boolean false
// Cadeans de texto vacias

//Operadores Logicos

// and (&&)
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)
console.log(5 > 10 && 15 > 20 && 30 > 40)

//or (||)
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)
console.log(5 > 10 || 15 > 20 || 30 > 40)

console.log(5 > 10 && 15 > 20 || 30 < 40)

//not (!)
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))

//Operadores ternarios

const isRaining = true

isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo")