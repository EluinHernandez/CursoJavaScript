for (let i = 0; i < 10; i++) {
    console.log(`${i+1}`)
}

let x = 0
for (i = 1; i <= 100; i++) {
    x += i
}
console.log(`${x}`)

for (i = 1; i <= 50; i++) {
    if (i % 2 == 0){
        console.log(`${i}`)
    }
}

let myArray = new Array("Dasch", "Pedro", "Juan")

for (let valor of myArray) {
    console.log(valor)
}

let myString = "Hola, JavaScript!"

let countVocals = 0;

for (let valor of myString) {
    if (valor == "a" || valor == "e" || valor == "i" || valor == "o" || valor == "u" ){
        countVocals ++
    }
}

console.log(countVocals)

myArray = [1, 2, 3, 4]

x = 1

for (let valor of myArray) {
    x *= valor
}

console.log(x)

i = 1

while(i <= 10){
    x = 5 * i
    console.log(`5 x ${i} = ${x}`)
    i++
}

const texto = "Hola mundo";

let invertida = "";
for (let i = texto.length - 1; i >= 0; i--) {
    invertida += texto[i];
}

console.log(invertida);

let secuencia = [0, 1];

for (let i = 2; i < 10; i++) {
    secuencia.push(secuencia[i - 1] + secuencia[i - 2]);
}

console.log(secuencia);

myArray = [21, 12, 5, 8, 9, 10, 21]

let myArray2 = new Array()

for (let valor of myArray) {
    if (valor > 10){
        myArray2.push(valor)
    }
}

console.log(myArray2)