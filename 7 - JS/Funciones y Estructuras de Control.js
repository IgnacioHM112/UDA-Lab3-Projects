// Ejercicio 1: función que muestra el tipo de dato recibido por parámetro
function mostrarTipoDato(valor) {
    console.log("Tipo de dato:", typeof valor);
}

const datoEj1 = "Texto de ejemplo";
mostrarTipoDato(datoEj1); // Muestra: string

// Ejercicio 2: función que devuelve la resta de dos números
function restarNumeros(numero1, numero2) {
    const resultado = numero1 - numero2;
    console.log("Resultado de la resta:", resultado);
    return resultado;
}

const numA = 12;
const numB = 5;
restarNumeros(numA, numB); // Muestra: 7

// Ejercicio 3: función que intercambia dos valores y los muestra
function intercambiarValores(a, b) {
    const valorOriginalA = a;
    const valorOriginalB = b;
    a = valorOriginalB;
    b = valorOriginalA;
    console.log("Valor a después del intercambio:", a);
    console.log("Valor b después del intercambio:", b);
}

intercambiarValores("primerValor", "segundoValor");

// Ejercicio 4: función para calcular perímetro y superficie de un cuadrado
function calcularCuadrado(lado) {
    const perimetro = lado * 4;
    const superficie = lado * lado;
    console.log(`Perímetro del cuadrado: ${perimetro}`);
    console.log(`Superficie del cuadrado: ${superficie}`);
}

calcularCuadrado(5); // Lado 5

// Ejercicio 5: función que convierte de Fahrenheit a Celsius
function fahrenheitACelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    console.log(`${fahrenheit} °F equivale a ${celsius.toFixed(2)} °C`);
    return celsius;
}

fahrenheitACelsius(77);

// Ejercicio 6: función que calcula el factorial de un número con validación hasta 10
function calcularFactorial(numero) {
    if (numero < 0 || numero > 10 || !Number.isInteger(numero)) {
        console.log("Número inválido. Debe ser un entero entre 0 y 10.");
        return null;
    }
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    console.log(`Factorial de ${numero}: ${factorial}`);
    return factorial;
}

calcularFactorial(6);

// Ejercicio 7: script que indica si un texto es un palíndromo
function esPalindromo(texto) {
    const textoNormalizado = texto
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");
    const textoInvertido = textoNormalizado.split("").reverse().join("");
    const resultado = textoNormalizado === textoInvertido;
    console.log(`"${texto}" es palíndromo? ${resultado}`);
    return resultado;
}

esPalindromo("Somos o no somos");

// Ejercicio 8: mostrar una cadena en mayúsculas y luego en minúsculas
function mostrarMayusculasMinusculas(texto) {
    console.log("Mayúsculas:", texto.toUpperCase());
    console.log("Minúsculas:", texto.toLowerCase());
}

mostrarMayusculasMinusculas("JavaScript es Genial");

// Ejercicio 9: mostrar calificación en base a una nota numérica
function calificarNota(nota) {
    let calificacion;
    if (nota >= 0 && nota < 3) {
        calificacion = "Muy deficiente";
    } else if (nota >= 3 && nota < 5) {
        calificacion = "Insuficiente";
    } else if (nota >= 5 && nota < 6) {
        calificacion = "Suficiente";
    } else if (nota >= 6 && nota < 7) {
        calificacion = "Bien";
    } else if (nota >= 7 && nota < 9) {
        calificacion = "Notable";
    } else if (nota >= 9 && nota <= 10) {
        calificacion = "Sobresaliente";
    } else {
        calificacion = "Nota inválida";
    }
    console.log(`Nota: ${nota} - Calificación: ${calificacion}`);
    return calificacion;
}

calificarNota(8.5);

// Ejercicio 10: script que indica si un mes tiene 30 o 31 días
function diasDelMes(numeroMes) {
    if ([4, 6, 9, 11].includes(numeroMes)) {
        console.log(`El mes ${numeroMes} tiene 30 días.`);
    } else if ([1, 3, 5, 7, 8, 10, 12].includes(numeroMes)) {
        console.log(`El mes ${numeroMes} tiene 31 días.`);
    } else if (numeroMes === 2) {
        console.log(`El mes ${numeroMes} tiene 28 o 29 días.`);
    } else {
        console.log("Número de mes inválido. Debe ser entre 1 y 12.");
    }
}

diasDelMes(11);

// Ejercicio 11: script que genera una pirámide de números hasta el valor ingresado
function generarPiramide(numero) {
    if (numero < 1 || numero > 10 || !Number.isInteger(numero)) {
        console.log("Número inválido. Debe ser un entero entre 1 y 10.");
        return;
    }
    for (let i = 1; i <= numero; i++) {
        let linea = "";
        for (let j = 1; j <= i; j++) {
            linea += j;
        }
        console.log(linea);
    }
}

generarPiramide(7);

// Ejercicio 12: calcular cajas completas y bultos sueltos
function calcularCajas(stockBultos, bultosPorCaja) {
    const cajasCompletas = Math.floor(stockBultos / bultosPorCaja);
    const bultosSueltos = stockBultos % bultosPorCaja;
    console.log(`Cajas completas: ${cajasCompletas}`);
    console.log(`Bultos sueltos: ${bultosSueltos}`);
    return { cajasCompletas, bultosSueltos };
}

calcularCajas(53, 8);

// Ejercicio 13: descuento para Ford Fiesta y Ford Focus
function aplicarDescuentoAuto(codigoAuto, precio) {
    let descuento = 0;
    if (codigoAuto === "fiesta") {
        descuento = 0.05;
    } else if (codigoAuto === "focus") {
        descuento = 0.10;
    }
    const descuentoPesos = precio * descuento;
    const precioFinal = precio - descuentoPesos;
    console.log(`Código: ${codigoAuto} - Descuento aplicado: ${descuento * 100}% - Precio final: ${precioFinal}`);
    return precioFinal;
}

aplicarDescuentoAuto("focus", 25000);
