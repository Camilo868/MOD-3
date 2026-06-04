
const inputNota = document.getElementById('inputNota');

const btnAgregar = document.querySelector('button'); 

const listaNotas = document.getElementById('listaNotas');

btnAgregar.addEventListener('click', function() {
    if (inputNota.value === ''){
        alert('Esta vacío, ingresa una nota por favor');
    }else{
        const notaNueva=document.createElement('li');
        notaNueva.textContent=inputNota.value;

        const btnEliminar=document.createElement('button');
        btnEliminar.textContent='eliminar';
        notaNueva.appendChild(btnEliminar);
        listaNotas.appendChild(notaNueva);
        inputNota.value='';
        inputNota.focus();
        console.log(`se agrego ${notaNueva.textContent}`);
    }
});