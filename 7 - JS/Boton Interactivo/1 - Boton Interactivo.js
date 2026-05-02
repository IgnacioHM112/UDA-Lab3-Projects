function accion() {
    
    // 1. Probamos por consola como pide el ejercicio
    console.log('Está funcionando mi botón');

    // 2. Obtenemos todos los elementos con la clase 'nav-enlace'
    var ancla = document.getElementsByClassName('nav-enlace');

    // 3. Usamos un ciclo FOR para recorrer cada uno
    for (var i = 0; i < ancla.length; i++) {
        // 4. Toggle agrega la clase si no está, y la quita si ya está
        ancla[i].classList.toggle('desaparece');
    }
}