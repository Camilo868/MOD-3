const notas = [];
const inputNota = document.getElementById('inputNota');
const btnAgregar = document.querySelector('button');
const listaNotas = document.getElementById('listaNotas');

console.log('Referencia del input:', inputNota);
console.log('Referencia del botón:', btnAgregar);
console.log('Referencia de la lista <ul>:', listaNotas);

btnAgregar.addEventListener('click', function() {
    if (inputNota.value === '') {
        alert('Está vacío, ingresa una nota por favor');
    } else {
        const notaNueva = document.createElement('li');
        notaNueva.textContent = inputNota.value;

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        notaNueva.appendChild(btnEliminar);
        listaNotas.appendChild(notaNueva);

        notas.push(inputNota.value);
        localStorage.setItem("notas", JSON.stringify(notas));

        inputNota.value = '';
        inputNota.focus();
        

        btnEliminar.addEventListener('click', function() {
            const index = notas.indexOf(notaNueva.textContent);
            notas.splice(index, 1);
            localStorage.setItem("notas", JSON.stringify(notas));
            listaNotas.removeChild(notaNueva);
            console.log(`Se eliminó: ${notaNueva.textContent}`);
        });
    }
});

if (localStorage.getItem("notas")) {
    const notasGuardadas = JSON.parse(localStorage.getItem("notas"));
    notasGuardadas.forEach(function(texto) {
        const notaNueva = document.createElement('li');
        notaNueva.textContent = texto;

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        notaNueva.appendChild(btnEliminar);
        listaNotas.appendChild(notaNueva);

        btnEliminar.addEventListener('click', function() {
            const index = notas.indexOf(texto);
            notas.splice(index, 1);
            localStorage.setItem("notas", JSON.stringify(notas));
            listaNotas.removeChild(notaNueva);
        });
    });
    notas.push(...notasGuardadas);
    console.log(`Se cargaron ${notasGuardadas.length} notas`);
}