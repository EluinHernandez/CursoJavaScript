// Strings

// Concatenacion

let myName = "Dasch"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

//Longitud

console.log(greeting.length)

//Acceso a caracteres

console.log(greeting[0])
console.log(greeting[11])

// Metodos comunes

console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Hola"))
console.log(greeting.indexOf("Dasch"))
console.log(greeting.indexOf("MoureDev"))
console.log(greeting.includes("Hola"))
console.log(greeting.includes("Dasch"))
console.log(greeting.includes("MoureDev"))
console.log(greeting.slice(0,10))
console.log(greeting.replace("Dasch" , "MoureDev"))

//Template literals (plantilas literales)

let message = `Hola este es mi
curso de Java Scipt`

console.log(message)

let email = "daschhernandez@gmail.com"

console.log(`Hola, ${myName}! Tu email es ${email}`)