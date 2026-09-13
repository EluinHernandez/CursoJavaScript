// Funciones (Bloque de codigo)

//Simple

function myFunc () {
    console.log("Hola, funcion!")
}

for (let i = 0; i < 5; i++){
    myFunc()
}

// Con parametros

function myFuncWithParams (name) {
    console.log(`Hola, ${name}`)
}

myFuncWithParams("Eluin")
myFuncWithParams("Dasch")

// Funciones anonimas

const myFunc2 = function (name) {
    console.log(`Hola, ${name}`)
}

myFunc2("Eluin Dasch")

// Arrow functions

const myFunc3 = (name) => {
    console.log(`Hola, ${name}`)
}

myFunc3("Eluin Dasch")

const myFunc4 = (name) => console.log(`Hola, ${name}`)

myFunc4("Eluin Dasch")

// Parametros

function sum (a, b) {
    console.log(a + b)
}

sum(5, 10)
sum(5)
sum()

// Por defecto

function defaultSum (a = 0, b = 0) {
    console.log(a + b)
}

defaultSum()
defaultSum(5)
defaultSum(5, 10)
defaultSum(b = 5)

// Retorno de valores

function mult (a, b) {
    return a * b
}

let result = mult(5, 10)
console.log(result)

// Funciones anidadas

function extern () {
    console.log("Funcion externa")
    function intern () {
        console.log("Funcion interna")
    }
    intern()
}

extern()
// intern() Error: fuera del scope

// Funciones de orden superior

function applyFunc (func, param) {
    func(param)
}

applyFunc(myFunc4, "Funcion de orden superior")

// forEach

myArray = [1, 2, 3, 4]
mySet = new Set(["Dasch", "Hernandez", "Curso Js", 21, true, "daschhernandez@gmail.com"])
myMap = new Map([
    ["name","Dasch"],
    ["email","daschhernandez@wgmail.com"],
    ["age", 21]
])

myArray.forEach((value) => console.log(value))

myArray.forEach(function (value) {
    console.log(value)
})

mySet.forEach((value) => console.log(value))

myMap.forEach((value) => console.log(value))