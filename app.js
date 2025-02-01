// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];

function agregarAmigo() {
    const nuevoAmigo = document.getElementById('amigo');

    if (nuevoAmigo.value === '') {
        alert('Debes ingresar un nombre');
        return;
    }

    amigos.push(nuevoAmigo.value);
    nuevoAmigo.value = '';

    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}