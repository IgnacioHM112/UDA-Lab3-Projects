// Ejercicio 1: funci�n que muestra el tipo de dato recibido por par�metro
function mostrarTipoDato() {
    const valor = prompt("Ingrese un dato:");
    console.log("Tipo de dato:", typeof valor);
}

mostrarTipoDato(); // Muestra: string

// Ejercicio 2: funci�n que devuelve la resta de dos n�meros
function restarNumeros() {
    const numero1 = parseFloat(prompt("Ingrese el primer número:"));
    const numero2 = parseFloat(prompt("Ingrese el segundo número:"));
    const resultado = numero1 - numero2;
    console.log("Resultado de la resta:", resultado);
    return resultado;
}

restarNumeros(); // Muestra: 7
                                
// Ejercicio 3: funci�n que intercambia dos valores y los muestra
function intercambiarValores() {
    let a = prompt("Ingrese el primer valor:");
    let b = prompt("Ingrese el segundo valor:");
    const temp = a;
    a = b;
    b = temp;
    console.log("Valor a después del intercambio:", a);
    console.log("Valor b después del intercambio:", b);
}

intercambiarValores();

// Ejercicio 4: funci�n para calcular per�metro y superficie de un cuadrado
function calcularCuadrado() {
    const lado = parseFloat(prompt("Ingrese el lado del cuadrado:"));
    const perimetro = lado * 4;
    const superficie = lado * lado;
    console.log(`Perímetro del cuadrado: ${perimetro}`);
    console.log(`Superficie del cuadrado: ${superficie}`);
}

calcularCuadrado(); // Lado 5

// Ejercicio 5: funci�n que convierte de Fahrenheit a Celsius
function fahrenheitACelsius() {
    const fahrenheit = parseFloat(prompt("Ingrese la temperatura en Fahrenheit:"));
    const celsius = (fahrenheit - 32) * 5 / 9;
    console.log(`${fahrenheit} °F equivale a ${celsius.toFixed(2)} °C`);
    return celsius;
}

fahrenheitACelsius();

// Ejercicio 6: funci�n que calcula el factorial de un n�mero con validaci�n hasta 10
function calcularFactorial() {
    const numero = parseInt(prompt("Ingrese un número para calcular factorial (0-10):"));
    if (numero < 0 || numero > 10 || !Number.isInteger(numero)) {
        console.log("N�mero inv�lido. Debe ser un entero entre 0 y 10.");
        return null;
    }
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    console.log(`Factorial de ${numero}: ${factorial}`);
    return factorial;
}

calcularFactorial();

// Ejercicio 7: script que indica si un texto es un pal�ndromo
function esPalindromo() {
    const texto = prompt("Ingrese un texto para verificar si es palíndromo:");
    const textoNormalizado = texto
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");
    const textoInvertido = textoNormalizado.split("").reverse().join("");
    const resultado = textoNormalizado === textoInvertido;
    console.log(`"${texto}" es pal�ndromo? ${resultado}`);
    return resultado;
}

esPalindromo();

// Ejercicio 8: mostrar una cadena en may�sculas y luego en min�sculas
function mostrarMayusculasMinusculas() {
    const texto = prompt("Ingrese una cadena de caracteres:");
    console.log("May�sculas:", texto.toUpperCase());
    console.log("Min�sculas:", texto.toLowerCase());
}

mostrarMayusculasMinusculas();

// Ejercicio 9: mostrar calificaci�n en base a una nota num�rica
function calificarNota() {
    const nota = parseFloat(prompt("Ingrese la nota numérica:"));
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
        calificacion = "Nota inv�lida";
    }
    console.log(`Nota: ${nota} - Calificaci�n: ${calificacion}`);
    return calificacion;
}

calificarNota();

// Ejercicio 10: script que indica si un mes tiene 30 o 31 d�as
function diasDelMes() {
    const numeroMes = parseInt(prompt("Ingrese el número del mes (1-12):"));
    if ([4, 6, 9, 11].includes(numeroMes)) {
        console.log(`El mes ${numeroMes} tiene 30 d�as.`);
    } else if ([1, 3, 5, 7, 8, 10, 12].includes(numeroMes)) {
        console.log(`El mes ${numeroMes} tiene 31 d�as.`);
    } else if (numeroMes === 2) {
        console.log(`El mes ${numeroMes} tiene 28 o 29 d�as.`);
    } else {
        console.log("N�mero de mes inv�lido. Debe ser entre 1 y 12.");
    }
}

diasDelMes();

// Ejercicio 11: script que genera una pir�mide de n�meros hasta el valor ingresado
function generarPiramide() {
    const numero = parseInt(prompt("Ingrese un número para la pirámide (1-10):"));
    if (numero < 1 || numero > 10 || !Number.isInteger(numero)) {
        console.log("N�mero inv�lido. Debe ser un entero entre 1 y 10.");
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

generarPiramide();

// Ejercicio 12: calcular cajas completas y bultos sueltos
function calcularCajas() {
    const stockBultos = parseInt(prompt("Ingrese la cantidad de bultos en stock:"));
    const bultosPorCaja = parseInt(prompt("Ingrese la cantidad de bultos por caja:"));
    const cajasCompletas = Math.floor(stockBultos / bultosPorCaja);
    const bultosSueltos = stockBultos % bultosPorCaja;
    console.log(`Cajas completas: ${cajasCompletas}`);
    console.log(`Bultos sueltos: ${bultosSueltos}`);
    return { cajasCompletas, bultosSueltos };
}

calcularCajas();

// Ejercicio 13: descuento para Ford Fiesta y Ford Focus
function aplicarDescuentoAuto() {
    const codigoAuto = prompt("Ingrese el código del auto (fiesta o focus):").toLowerCase();
    const precio = parseFloat(prompt("Ingrese el precio del auto:"));
    let descuento = 0;
    if (codigoAuto === "fiesta") {
        descuento = 0.05;
    } else if (codigoAuto === "focus") {
        descuento = 0.10;
    }
    const descuentoPesos = precio * descuento;
    const precioFinal = precio - descuentoPesos;
    console.log(`C�digo: ${codigoAuto} - Descuento aplicado: ${descuento * 100}% - Precio final: ${precioFinal}`);
    return precioFinal;
}

aplicarDescuentoAuto();
