// 1. Usa desestructuración para extraer los dos primeros elementos de un array

let myArray = [1, 2, 3, 4]
let myArray6 = [14, 22, 31, 41]

let [myArray1, myArray2] = myArray
console.log(myArray1);
console.log(myArray2);

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let [myArray3, myArray4 , , ,myArray5 = 0] = myArray
console.log(myArray3);
console.log(myArray4);
console.log(myArray5);

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let person = {
    name : "Dasch",
    age : 21,
    alias : "Dasher"
}

let {name, age} = person
console.log(name);
console.log(age);

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let {name : name2, age : age2} = person
console.log(name2);
console.log(age2);

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

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
            console.log(`La persona de ${this.age} años de experiencia  trabaja`)
        }
    }
}

let {name : name3, job: {name: jobName} } = person2

console.log(name3)
console.log(jobName)

// 6. Usa propagación para combinar dos arrays en uno nuevo

let newArray = [...myArray, ...myArray6]
console.log(newArray);

// 7. Usa propagación para crear una copia de un array

let newArray2 = [...myArray6, 6, 8, 9]
console.log(newArray2);

// 8. Usa propagación para combinar dos objetos en uno nuevo

let person3 = {...person, ...person2}
console.log(person3);

// 9. Usa propagación para crear una copia de un objeto

// 10. Combina desestructuración y propagación