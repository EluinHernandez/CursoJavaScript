// array

// Declaracion

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

//Inicializacion

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ["Dasch", "Hernandez", 21, true]
myArray2 = new Array("Dasch", "Hernandez", 21, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[2] = "Dasch"
//myArray2[1] = "Hernandez"
myArray2[0] = "mouredev"

console.log(myArray2)

myArray = []
myArray[2] = "Dasch"
//myArray2[1] = "Hernandez"
myArray[0] = "mouredev"

console.log(myArray)

// Metodos Comunes

myArray = []

// push y pop (push agrega elementos al final y pop elimina y devuelve el ultimo elemento)

myArray.push("Dasch")
myArray.push("Hernandez")
myArray.push("Curso JavaScript")
myArray.push("12")

console.log(myArray)

console.log(myArray.pop())
myArray.pop()

console.log(myArray)

// shift y unshift

console.log(myArray.shift())

console.log(myArray)

myArray.unshift("Hernandez", "Dasch")
console.log(myArray)

// length

console.log(myArray.length)

// clear

//myArray = []
//console.log(myArray)

myArray.length = 0 //alternativa
console.log(myArray)

// slice

myArray = ["Dasch", "Hernandez", "Curso Js", 21, true]

let myNewArray = myArray.slice(1,3)
console.log(myNewArray)

// splice

myArray.splice(1,3)
console.log(myArray)

myArray = ["Dasch", "Hernandez", "Curso Js", 21, true]

myArray.splice(1, 2, "Nueva Entrada")
console.log(myArray)