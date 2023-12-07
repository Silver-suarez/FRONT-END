function modificar(elemento) {
    
    if(elemento.innerText == "Login") {
        elemento.innerText = "Logout";
    } else {
        elemento.innerText = "Login";
    }
}

function esconder(elemento){
    elemento.remove();
}

function alerta(){
    alert("Ninja was liked");
}