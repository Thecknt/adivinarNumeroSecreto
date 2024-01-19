
let numeroSecreto =0;
let intentos = 0;


function asignarTextoElemento(elemento, texto){
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10+1);
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); 
    console.log("Cantidad de Intentos: " + intentos);
    if (numeroDeUsuario == numeroSecreto) {
       asignarTextoElemento('p',`Acertaste el Número en ${intentos} ${(intentos ===1)? 'vez' : 'veces'}!`);
       limpiarImput();
       document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
       if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento('p','El Número Secreto es menor!');
       } else {
        asignarTextoElemento('p','El Número Secreto es Mayor!');
        
       }
       intentos++;
       limpiarImput();
    }
    return;
}

function limpiarImput() {
  document.getElementById('valorUsuario').value = "";
}

function condicionesIniciales(){
    asignarTextoElemento('h1',"Juego del numero secreto");
    asignarTextoElemento('p',"Ingrese un numero del 1 al  10");
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarImput();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

condicionesIniciales();
console.log(numeroSecreto);