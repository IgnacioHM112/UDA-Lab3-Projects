document.addEventListener('DOMContentLoaded', function () {
    const btnCambiarTexto = document.getElementById('btnCambiarTexto');
    const btnMostrarMensaje = document.getElementById('btnMostrarMensaje');
    const btnAgregarLista = document.getElementById('btnAgregarLista');
    const cajaFondo = document.getElementById('cajaFondo');
    const btnToggleElemento = document.getElementById('btnToggleElemento');
    const formValidacion = document.getElementById('formValidacion');

    btnCambiarTexto.addEventListener('click', cambiarTexto);
    btnMostrarMensaje.addEventListener('click', mostrarMensaje);
    btnAgregarLista.addEventListener('click', agregarElementoLista);
    cajaFondo.addEventListener('click', cambiarFondo);
    btnToggleElemento.addEventListener('click', toggleElemento);
    formValidacion.addEventListener('submit', validarFormulario);
});

function cambiarTexto() {
    const texto = document.getElementById('textoEj1');
    texto.textContent = 'El texto ha sido cambiado por DOM.';
}

function mostrarMensaje() {
    const mensaje = document.getElementById('mensajeEj2');
    mensaje.textContent = '¡Se detectó el clic correctamente!';
}

function agregarElementoLista() {
    const itemInput = document.getElementById('itemLista');
    const valor = itemInput.value.trim();
    if (valor === '') {
        return;
    }

    const lista = document.getElementById('listaDinamica');
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = valor;
    lista.appendChild(nuevoElemento);
    itemInput.value = '';
}

function cambiarFondo() {
    const caja = document.getElementById('cajaFondo');
    caja.style.backgroundColor = caja.style.backgroundColor === 'rgb(255, 235, 59)' ? '#e1f5fe' : '#ffeb3b';
}

function validarFormulario(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombreForm');
    const correo = document.getElementById('correoForm');
    const resultado = document.getElementById('resultadoValidacion');

    if (nombre.value.trim() === '' || correo.value.trim() === '') {
        resultado.textContent = 'Por favor completa todos los campos requeridos.';
        resultado.style.color = '#d32f2f';
        return;
    }

    resultado.textContent = 'Formulario válido. Se puede enviar.';
    resultado.style.color = '#388e3c';
}

function toggleElemento() {
    const elemento = document.getElementById('elementoToggle');
    elemento.classList.toggle('hidden');
}
