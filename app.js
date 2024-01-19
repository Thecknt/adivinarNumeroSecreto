let numeroSecreto =0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto){
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo+1);

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
      }
    }
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); 
    console.log("Cantidad de Intentos: " + intentos);
    if (numeroDeUsuario == numeroSecreto) {
       asignarTextoElemento('p',`Acertaste el Número en ${intentos} ${(intentos ===1)? 'vez' : 'veces'}!`);
       limpiarImput();
       document.getElementById('reiniciar').removeAttribute('disabled');
       document.getElementById('intentar').setAttribute("disabled",true);
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
    asignarTextoElemento('p',`Ingrese un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    document.getElementById('intentar').removeAttribute("disabled");
}

function reiniciarJuego() {
    limpiarImput();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

condicionesIniciales();