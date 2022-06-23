var btns = document.getElementById('md'),
    cajas = document.getElementById('fond'),
    contador = 0;

function cambiar() {
    if (contador == 0) {
        cajas.classList.add('blue');
        contador = 1;
        localStorage.setItem('blue', 'true');
    } else {
        cajas.classList.remove('blue');
        contador = 0;
        localStorage.setItem('blue', 'false');
    }
}

btns.addEventListener('click', cambiar, true)

// btns.addEventListener('click', cambiar, true)

// document.addEventListener("DOMContentLoaded", function() {
//     if (localStorage.getItem("oscuro")) {
//         cambiarModo();
//     }
// });

if (localStorage.getItem('blue') === 'true') {
    document.body.classList.add('blue');
} else {
    document.body.classList.remove('blue');
}