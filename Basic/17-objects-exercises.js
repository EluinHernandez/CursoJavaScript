// 1. Crea un objeto con 3 propiedades

let person = {
    name : "Dasch",
    age : 21,
    alias : "Dasher"
}

// 2. Accede y muestra su valor

console.log(person.age)

// 3. Agrega una nueva propiedad

person.email = "daschhernandez@gmail.com"
console.log(person)

// 4. Elimina una de las 3 primeras propiedades

delete person.age
console.log(person)

// 5. Agrega una función e invócala

person.walk = function () {
    console.log("La persona camina")
}
console.log(person)

person.walk()

// 6. Itera las propiedades del objeto

for (let key in person) {
    console.log(key + ": " + person[key])
}

// 7. Crea un objeto anidado

let person2 = {
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
            console.log(`La persona de ${this.exp} años de experiencia  trabaja`)
        }
    }
}

console.log(person2)

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(person2.job.name)

// 9. Comprueba si los dos objetos creados son iguales

console.log(person == person2)
console.log(person === person2)

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(person.name == person2.name)