// set

// Declaracion

let mySet = new Set()
console.log(mySet)
//let mySet2 = {}         //Forma Incorrecta
//console.log(mySet2)

// Inicializacion

mySet = new Set(["Dasch", "Hernandez", "Curso Js", 21, true, "daschhernandez@gmail.com"])
console.log(mySet)

// Metodos comunes

// add y delete

mySet.add("https://moure.dev")
console.log(mySet)

mySet.delete("https://moure.dev")
console.log(mySet)

console.log(mySet.delete("Dasch"))
console.log(mySet.delete(4))

console.log(mySet)

// has

console.log(mySet.has("Hernandez"))
console.log(mySet.has("Dasch"))

// size

console.log(mySet.size)

// Converitr un set a array

let myArray = Array.from(mySet)
console.log(myArray)

mySet = new Set(myArray)
console.log(mySet)

// No admite duplicados

mySet.add("Hernandez")
mySet.add("Hernandez")
mySet.add("Hernandez")
mySet.add("hernandez")
console.log(mySet)