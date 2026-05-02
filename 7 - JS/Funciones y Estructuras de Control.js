/* ---------- pedir datos al usuario de forma compatible tanto en navegador como en Node.js ---------- */
let promptFunction;
if (typeof globalThis.prompt === "function") {
    promptFunction = globalThis.prompt.bind(globalThis);
} else {
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    promptFunction = (query) => new Promise((resolve) => rl.question(query, resolve));
    process.on("exit", () => rl.close());
}

/* ---------- EJERCICIO 1 ---------- */
async function mostrarTipoDato() {
    const valor = await promptFunction("Ingrese un dato: ");
    console.log("Tipo de dato:", typeof valor);
}

/* ---------- EJERCICIO 2 ---------- */
async function restarNumeros() {
    const numero1 = parseFloat(await promptFunction("Ingrese el primer número: "));
    const numero2 = parseFloat(await promptFunction("Ingrese el segundo número: "));
    const resultado = numero1 - numero2;
    console.log("Resultado de la resta:", resultado);
    return resultado;
}

/* ---------- EJERCICIO 3 ---------- */
async function intercambiarValores() {
    let a = await promptFunction("Ingrese el primer valor: ");
    let b = await promptFunction("Ingrese el segundo valor: ");
    const temp = a;
    a = b;
    b = temp;
    console.log("Valor a después del intercambio:", a);
    console.log("Valor b después del intercambio:", b);
}

/* ---------- EJERCICIO 4 ---------- */
async function calcularCuadrado() {
    const lado = parseFloat(await promptFunction("Ingrese el lado del cuadrado: "));
    const perimetro = lado * 4;
    const superficie = lado * lado;
    console.log(`Perímetro del cuadrado: ${perimetro}`);
    console.log(`Superficie del cuadrado: ${superficie}`);
}

/* ---------- EJERCICIO 5 ---------- */
async function fahrenheitACelsius() {
    const fahrenheit = parseFloat(await promptFunction("Ingrese la temperatura en Fahrenheit: "));
    const celsius = (fahrenheit - 32) * 5 / 9;
    console.log(`${fahrenheit} °F equivale a ${celsius.toFixed(2)} °C`);
    return celsius;
}

/* ---------- EJERCICIO 6 ---------- */
async function calcularFactorial() {
    const numero = parseInt(await promptFunction("Ingrese un número para calcular factorial (0-10): "));
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

/* ---------- EJERCICIO 7 ---------- */
async function esPalindromo() {
    const texto = await promptFunction("Ingrese un texto para verificar si es palíndromo: ");
    const textoNormalizado = texto
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");
    const textoInvertido = textoNormalizado.split("").reverse().join("");
    const resultado = textoNormalizado === textoInvertido;
    console.log(`"${texto}" es palíndromo? ${resultado}`);
    return resultado;
}

/* ---------- EJERCICIO 8 ---------- */
async function mostrarMayusculasMinusculas() {
    const texto = await promptFunction("Ingrese una cadena de caracteres: ");
    console.log("Mayúsculas:", texto.toUpperCase());
    console.log("Minúsculas:", texto.toLowerCase());
}

/* ---------- EJERCICIO 9 ---------- */
async function calificarNota() {
    const nota = parseFloat(await promptFunction("Ingrese la nota numérica: "));
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

/* ---------- EJERCICIO 10 ---------- */
async function diasDelMes() {
    const numeroMes = parseInt(await promptFunction("Ingrese el número del mes (1-12): "));
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

/* ---------- EJERCICIO 11 ---------- */
async function generarPiramide() {
    const numero = parseInt(await promptFunction("Ingrese un número para la pirámide (1-10): "));
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

/* ---------- EJERCICIO 12 ---------- */
async function calcularCajas() {
    const stockBultos = parseInt(await promptFunction("Ingrese la cantidad de bultos en stock: "));
    const bultosPorCaja = parseInt(await promptFunction("Ingrese la cantidad de bultos por caja: "));
    const cajasCompletas = Math.floor(stockBultos / bultosPorCaja);
    const bultosSueltos = stockBultos % bultosPorCaja;
    console.log(`Cajas completas: ${cajasCompletas}`);
    console.log(`Bultos sueltos: ${bultosSueltos}`);
    return { cajasCompletas, bultosSueltos };
}

/* ---------- EJERCICIO 13 ---------- */
async function aplicarDescuentoAuto() {
    const codigoAuto = (await promptFunction("Ingrese el código del auto (fiesta o focus): ")).toLowerCase();
    const precio = parseFloat(await promptFunction("Ingrese el precio del auto: "));
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

async function runAll() {
    await mostrarTipoDato();
    await restarNumeros();
    await intercambiarValores();
    await calcularCuadrado();
    await fahrenheitACelsius();
    await calcularFactorial();
    await esPalindromo();
    await mostrarMayusculasMinusculas();
    await calificarNota();
    await diasDelMes();
    await generarPiramide();
    await calcularCajas();
    await aplicarDescuentoAuto();
}

runAll();