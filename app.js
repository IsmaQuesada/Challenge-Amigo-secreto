// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];
const nuevoAmigo = document.getElementById("amigo");
const resultado = document.getElementById("resultado");
const listaAmigos = document.getElementById("listaAmigos");

function agregarAmigo() {
    resultado.textContent = "";

    if (nuevoAmigo.value === "") {
        alert("Debes ingresar un nombre");
        return;
    }

    amigos.push(nuevoAmigo.value);
    nuevoAmigo.value = "";

    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Debes agregar amigos primero");
        return;
    }

    listaAmigos.innerHTML = "";

    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.textContent = `El amigo secreto sorteado es: ${amigoSorteado}`;
}
