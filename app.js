// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let cantidad_amigos = amigos.length;

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;

    if (amigo == "") {
        alert("Por favor, inserte un nombre");        
    } else {
        amigos.push(amigo);
        cantidad_amigos = amigos.length;
        actualizarListaAmigos();
    }

    limpiarCaja();
    console.log(amigos);
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

function sortearAmigo() {
    if (verificaListaVacia()){
        asignarTextoElemento('resultado', `Amigo sorteado: ${seleccionarAmigo()}`);
    }
}

function verificaListaVacia() {
    if (amigos.length == 0) {
        alert("Debes agregar al menos un amigo");
        return false
    } else {
        return true
    }
}

function generarIndiceAleatorio() {
    return Math.floor(Math.random() * cantidad_amigos);
}

function seleccionarAmigo() {
    return amigos[generarIndiceAleatorio()];
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
}

function actualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
}