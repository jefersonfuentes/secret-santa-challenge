let amigos = [];
function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    if(nombre == '') {
        alert('Por favor, inserte un nombre');
    } else if (amigos.includes(nombre)) {
        alert('Error, este nombre ya esta en la lista');
    } else {
        amigos.push(nombre);
        console.log(amigos);
        document.getElementById('amigo').value = '';
    }
}

