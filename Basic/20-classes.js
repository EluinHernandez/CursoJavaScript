// Clases

class Person {
    constructor (name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

// Sintaxis

let person = new Person("Dasch", 21, "Dascher")
let person2 = new Person("Dasch", 21, "Dascher")

console.log(person)
console.log(person2)

console.log(typeof person)

// Valores por defecto

class DefaultPerson {
    constructor (name = "Nombre por defecto", age = 0, alias = "Sin alias"){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

let person3 = new DefaultPerson()
console.log(person3)

// Acceso a propiedades

console.log(person3.alias)
console.log(person3["alias"])

person3.alias = "Dasher"
console.log(person3.alias)

// Funciones en clases

class PersonWithMetod {
    constructor (name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }

    walk() {
        console.log("La persona camina")
    }

}

let person4 = new PersonWithMetod ("Dasch", 21, "Dascher")
person4.walk()

// Propiedades privadas

class PrivatePerson {

    #bank

    constructor (name, age, alias, bank){
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }

    pay() {
        this.bank
    }
}

let person5 = new PrivatePerson ("Dasch", 21, "Dascher", "DHSHH2123141")

// console.log(person5.#bank) // No podemos acceder
// person5.bank = "awdagshrhdtjrawe" // bank no es #bank

console.log(person5);

// Getters y Setters

class GetPerson {

    #name
    #age
    #alias
    #bank

    constructor (name, age, alias, bank){
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    get name() {
        return this.#name
    }

    set bank(bank) {
        this.#bank = bank
    }

}

let person6 = new GetPerson ("Dasch", 21, "Dascher", "EDHH12134455")

console.log(person6)
console.log(person6.name)

person6.bank = "EDHH125551"
console.log(person6.bank)

// Herencia

class Animal {
    constructor(name){
        this.mae = name
    }

    sound(){
        console.log("Ëmite un sonido generico")
    }
}

class Dog extends Animal{
    
    sound() {
        console.log("Guau!")
        
    }
    
    run(){
        console.log("El perro corre")
        
    }
}

let myDog = new Dog("MoureDog")
myDog.run()
myDog.sound()

class Fish extends Animal{

    constructor(name, size){
        super(name)
        this.size = size
    }
    swin(){
        console.log("El pez nada")
        
    }
}

let myFish = new Fish("MoureFish", 10)
myFish.swin()
myFish.sound()

// Metodos estaticos

class MathOperations {
    static sum (a, b){
        return a + b
    }
}

console.log(MathOperations.sum(5, 10))