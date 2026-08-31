// 1.

let variable = 1

if (variable == 1) {
    console.log("Dasch")
}

// 2.

let user = "dasch78"
let password = "1234"

if (user == "dasch78" && password == "1234") {
    console.log("Usuario encontrado")
} else {
    console.log("Error de usuari@ o contraseña")
}

// 3.

let number = 4

if (number % 2 == 0) {
    console.log("Es par")
} else if (number == 0) {
    console.log("Es cero")
} else {
    console.log("Es impar")
}

// 4.

let age = 18

if (age >= 18) {
    console.log("Es mayor de edad, puede votar")
} else {
    console.log("Es menor de edad, le faltan " + (18 - age) + " años")
}

// 5.

const message = age >= 18 ? "Es mayor" : "Es menor"
console.log(message)

// 6.

let mes = 3

if (mes == 12 || mes >= 1 && mes < 3) {
    console.log("Invierno")
} else if (mes >= 3 && mes < 6) {
    console.log("Primavera")
} else if (mes >= 6 && mes < 9) {
    console.log("Verano")
} else if (mes >= 9 && mes < 12) {
    console.log("Otoño")
} else {
    console.log("Mes Invalido")
}

// 7.

if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12) {
    console.log("31 días");
} else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
    console.log("30 días");
} else if (mes === 2) {
    console.log("28 días (29 si es año bisiesto)");
} else {
    console.log("Mes inválido");
}

// 8.

let idioma = "es";

switch (idioma) {
    case "es":
        console.log("¡Hola!");
        break;
    case "en":
        console.log("Hello!");
        break;
    case "fr":
        console.log("Bonjour!");
        break;
    case "de":
        console.log("Hallo!");
        break;
    default:
        console.log("Idioma no reconocido");
}

// 9.

switch (mes) {
    case 12: case 1: case 2:
        console.log("Invierno");
        break;
    case 3: case 4: case 5:
        console.log("Primavera");
        break;
    case 6: case 7: case 8:
        console.log("Verano");
        break;
    case 9: case 10: case 11:
        console.log("Otoño");
        break;
    default:
        console.log("Mes inválido");
}

// 10.
switch (mes) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        console.log("31 días");
        break;
    case 4: case 6: case 9: case 11:
        console.log("30 días");
        break;
    case 2:
        console.log("28 días (29 si es bisiesto)");
        break;
    default:
        console.log("Mes inválido");
}
