let amigos = [];
let lista = document.getElementById('listaAmigos');
function agregarAmigo() {
    let nombre = document.getElementById('amigo').value
    if(nombre == ''){
        alert('Por favor, inserte un nombre');
    } else if (amigos.includes(nombre)) {
        alert('Error este nombre ya está en la lista')
    } else {
        amigos.push(nombre);
        document.getElementById('amigo').value = '';
        actualizarAmigos();
    }
}

function actualizarAmigos() {
    lista.innerHTML = ""
    
    for(let i = 0; i < amigos.length; i++){
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}