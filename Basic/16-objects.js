// Objects

// Sintaxis

let person = {
    name : "Dasch",
    age : 21,
    alias : "Dasher"
}

// Acceso a propiedades

// Notacion punto

console.log(person.name)

// Notacion de corchetes

console.log(person["name"])

//Modificacion de propiedades

person.name = "Eluin"
console.log(person.name)

console.log(typeof person.age)
person.age = "42"
console.log(person.age)
console.log(typeof person.age)

// Eliminacion de propiedades

delete person.age
console.log(person)

// Nueva propiedad

person.email = "daschhernandez@gmail.com"
console.log(person)

person["age"] = 32
console.log(person)

// Metodos (funciones)

let person2 = {
    name : "Dasch",
    age : 21,
    alias : "Dasher",
    walk : function () {
        console.log("La persona camina")
    }
}

person2.walk()

// Anidacion de objects

let person3 = {
    name : "Dasch",
    age : 21,
    alias : "Dasher",
    walk : function () {
        console.log("La persona camina")
    },
    job : {
        name : "Programador",
        exp : 0,
        work : function () {
            console.log(`La persona de ${this.age} años de experiencia  trabaja`)
        }
    }
}

console.log(person3)

console.log(person3.name)
console.log(person3.job)
console.log(person3.job.name)
person3.job.work()

// Igualdad de Objects

console.log(person)

let person4 = {
    name : "Eluin",
    alias : "Dasher",
    email : "daschhernandez@gmail.com",
    age : 32,
}

console.log(person4)

console.log(person == person4)
console.log(person === person4)

console.log(person.name == person4.name)

// Iteracion

for (let key in person4) {
    console.log(key + ": " + person4[key])
}

// Funciones como objects

function Person (name, age) { // Deberia ser una clase
    this.name = name
    this.age = age
}

let person5 = new Person("Eluin", 21)
console.log(person5)
console.log(person5.name)

console.log(typeof person4)
console.log(typeof person5)