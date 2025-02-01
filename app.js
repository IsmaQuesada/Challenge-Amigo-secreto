// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const amigos = [];

function agregarAmigo() {
    const nuevoAmigo = document.getElementById('amigo').value;
    const listaAmigos = document.getElementById('listaAmigos');

    console.log('Amigos:', nuevoAmigo);

    if (nuevoAmigo === '') {
        alert('Debes ingresar un nombre');
        return;
    }

    listaAmigos.innerHTML = nuevoAmigo;
    amigos.push(nuevoAmigo);

    console.dir(amigos);
}