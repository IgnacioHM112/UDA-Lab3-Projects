// Función auxiliar para mostrar resultados en HTML
function mostrarResultado(texto) {
    document.getElementById('resultados').innerHTML += texto + '<br>';
}

// Ejercicio 1: Función sumaArray que recibe un array de números y devuelve la suma
function sumaArray(arr) {
    let suma = 0;
    for (let num of arr) {
        suma += num;
    }
    return suma;
}

// Ejercicio 2: Función encontrarMayor que recibe un array de números y devuelve el mayor
function encontrarMayor(arr) {
    if (arr.length === 0) return null;
    let mayor = arr[0];
    for (let num of arr) {
        if (num > mayor) mayor = num;
    }
    return mayor;
}

// Ejercicio 3: Función duplicarElementos que duplica cada elemento
function duplicarElementos(arr) {
    return arr.map(num => num * 2);
}

// Ejercicio 4: Array con 5 colores
let colores = ["rojo", "azul", "verde", "amarillo", "morado"];
mostrarResultado("Ejercicio 4 - Array de colores: " + colores.join(", "));

// Ejercicio 5: Guardar el tercer elemento
let tercerColor = colores[2]; // "verde"
mostrarResultado("Ejercicio 5 - Tercer color: " + tercerColor);

// Ejercicio 6: Acceder a la posición 0 del string en posición 0 del array
mostrarResultado("Ejercicio 6 - Primera letra del primer color: " + colores[0][0]);

// Ejercicio 7: Generar número aleatorio entre 1 y 99
function numeroAleatorio() {
    return Math.floor(Math.random() * 99) + 1;
}
mostrarResultado("Ejercicio 7 - Número aleatorio: " + numeroAleatorio());

// Ejercicio 8: Array con números del 1 al 10
let numeros1a10 = [];
for (let i = 1; i <= 10; i++) {
    numeros1a10.push(i);
}
mostrarResultado("Ejercicio 8 - Array 1-10: " + numeros1a10.join(", "));

// Ejercicio 9: Array con 10 números aleatorios
let numerosAleatorios = [];
for (let i = 0; i < 10; i++) {
    numerosAleatorios.push(Math.floor(Math.random() * 100));
}
mostrarResultado("Ejercicio 9 - Array aleatorios: " + numerosAleatorios.join(", "));

// Ejercicio 10: Copia del array anterior
let copiaNumerosAleatorios = [...numerosAleatorios];
mostrarResultado("Ejercicio 10 - Original: " + numerosAleatorios.join(", "));
mostrarResultado("Ejercicio 10 - Copia: " + copiaNumerosAleatorios.join(", "));

// Ejercicio 11: Variables para almacenar cadenas
let cadenas = [];

// Función para agregar cadena
function agregarCadena() {
    const input = document.getElementById('cadenaInput').value;
    if (input.trim() !== "") {
        cadenas.push(input);
        document.getElementById('resultadoCadenas').textContent = "Cadenas: " + cadenas.join(" - ");
        document.getElementById('cadenaInput').value = "";
    }
}

// Función para finalizar y mostrar resultado
function finalizarCadenas() {
    document.getElementById('resultadoCadenas').textContent = "Resultado final: " + cadenas.join("-");
    cadenas = []; // Resetear
}

// Ejercicio 12: Convertir dólares a pesos (1 USD = 300 ARS)
function convertirDolaresAPesos() {
    const dolares = parseFloat(document.getElementById('dolares').value);
    const pesos = dolares * 300;
    document.getElementById('resultadoDolares').textContent = `Resultado: ${pesos} pesos`;
}

// Ejercicio 13: Convertir pesos a dólares
function convertirPesosADolares() {
    const pesos = parseFloat(document.getElementById('pesos').value);
    const dolares = pesos / 300;
    document.getElementById('resultadoPesos').textContent = `Resultado: ${dolares.toFixed(2)} dólares`;
}

// Ejercicio 14: Convertir °C a °F
function convertirCelsiusAFahrenheit() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('resultadoCelsius').textContent = `Resultado: ${fahrenheit.toFixed(2)} °F`;
}

// Ejercicio 15: Pedido de caja
function enviarPedidoCaja() {
    const nombre = document.getElementById('nombreCliente').value.trim();
    const material = document.getElementById('materialCaja').value;
    const comentarios = document.getElementById('comentariosCaja').value.trim();
    const dimensiones = document.querySelector('input[name="dimensionCaja"]:checked').value;

    document.getElementById('resultadoCaja').value = `${nombre} ha pedido una caja de ${material} con unas dimensiones ${dimensiones}. ${comentarios}`;
}

// Ejercicio 16: Juego de número secreto
let numeroSecretoValor = null;
let intentosRestantes = 3;

function establecerNumeroSecreto() {
    const valor = parseInt(document.getElementById('numeroSecreto').value);
    if (isNaN(valor) || valor < 0 || valor > 5) {
        document.getElementById('resultadoJuego').textContent = 'Resultado: El número secreto debe estar entre 0 y 5.';
        return;
    }
    numeroSecretoValor = valor;
    intentosRestantes = 3;
    document.getElementById('resultadoJuego').textContent = 'Resultado: Número secreto guardado. Tienes 3 intentos.';
    document.getElementById('numeroAdivinar').value = '';
}

function intentarAdivinar() {
    if (numeroSecretoValor === null) {
        document.getElementById('resultadoJuego').textContent = 'Resultado: Primero debes establecer el número secreto.';
        return;
    }
    if (intentosRestantes <= 0) {
        document.getElementById('resultadoJuego').textContent = 'Resultado: Perdiste. No quedan intentos.';
        return;
    }
    const intento = parseInt(document.getElementById('numeroAdivinar').value);
    if (isNaN(intento) || intento < 0 || intento > 5) {
        document.getElementById('resultadoJuego').textContent = 'Resultado: Ingresa un número entre 0 y 5.';
        return;
    }
    if (intento === numeroSecretoValor) {
        document.getElementById('resultadoJuego').textContent = 'Resultado: ¡Ganaste! Adivinaste el número.';
        numeroSecretoValor = null;
        return;
    }
    intentosRestantes -= 1;
    if (intentosRestantes === 0) {
        document.getElementById('resultadoJuego').textContent = 'Resultado: Perdiste. Se agotaron los intentos.';
        numeroSecretoValor = null;
    } else {
        document.getElementById('resultadoJuego').textContent = `Resultado: Fallaste. Te quedan ${intentosRestantes} intentos.`;
    }
}

// Ejercicio 17: Lista de nombres
function agregarNombre() {
    const nombre = document.getElementById('nombreInput').value.trim();
    if (nombre === '') {
        return;
    }
    const lista = document.getElementById('listaNombres');
    const item = document.createElement('li');
    item.textContent = nombre;
    lista.appendChild(item);
    document.getElementById('nombreInput').value = '';
}