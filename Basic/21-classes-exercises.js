// 1. Crea una clase que reciba dos propiedades

// 2. Añade un método a la clase que utilice las propiedades

// 3. Muestra los valores de las propiedades e invoca a la función

// 4. Añade un método estático a la primera clase

// 5. Haz uso del método estático

class Person {
    constructor(altura, peso){
        this.altura = altura
        this.peso = peso
    }

    IMC(){
        return (this.peso / (this.altura * this.altura))
    }

    static clasificarIMC(imcValue) {
        if (imcValue < 18.5) return "Bajo peso";
        if (imcValue < 25) return "Peso normal";
        if (imcValue < 30) return "Sobrepeso";
        return "Obesidad";
    }
}

let person = new Person(1.65, 87)
console.log(person.altura);
console.log(person.peso)
let myIMC = person.IMC()
console.log(`Tu IMC es de: ${myIMC}`)
let myResultado = Person.clasificarIMC(myIMC)
console.log(`Clasificacion: ${myResultado}`)

// 6. Crea una clase que haga uso de herencia

// 7. Crea una clase que haga uso de getters y setters

// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores

// 10. Sobrescribe un método de una clase que utilice herencia