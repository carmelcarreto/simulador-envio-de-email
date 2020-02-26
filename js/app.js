//Variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');

//Event Listener
eventListeners();

function eventListeners(){
    
    //Inicio de la aplicacion y deshabilitar submit
    document.addEventListener('DOMContentLoaded', inicioApp);
}

//Funciones
function inicioApp(){
    //deshabilitar el envio
    btnEnviar.disabled = true;
}