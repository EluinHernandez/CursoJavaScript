// Map

// Declaracion

let myMap = new Map()

console.log(myMap)

// Inicializacion

myMap = new Map([
    ["name","Dasch"],
    ["email","daschhernandez@wgmail.com"],
    ["age", 21]
])

console.log(myMap)

// Metodos y propiedades

// set

myMap.set("alias" , "Eluin")
myMap.set("name" , "Dasch Hernandez")
console.log(myMap)

// get

console.log(myMap.get("name"))
console.log(myMap.get("surname"))

// has

console.log(myMap.has("surname"))
console.log(myMap.get("age"))

// delete

myMap.delete("email")

console.log(myMap)

// keys

console.log(myMap.keys())

// values

console.log(myMap.values())

// entries

console.log(myMap.entries())

// size

console.log(myMap.size)

// clear

myMap.clear()
console.log(myMap)