// CLASE: Declaracion de clase 

class Cuenta { 
    // CLASE: Metodo constructor 
    constructor(nroCuenta, identificacionCliente, saldo, interesAnual){
        this.nroCuenta = nroCuenta; 
        this.identificacionCliente = identificacionCliente; 
        this.saldo = saldo; 
        this.interesAnual = interesAnual; 
    } 

    // CLASE: Metodo consignar() 
    consignar(cantidad){ 
        this.saldo += cantidad; 
    } 

    // CLASE: metodo retirar() 
    retirar(cantidad){ 
        if (this.saldo > cantidad){
            this.saldo -= cantidad; 
            return true;  
        }
        return false; 
    }   
}

// VARIABLE5: Declaracidon de variables
let miCuenta = new Cuenta("0001", "768955621", 200000, 5); 
//let cuentaNubia = new Cuenta("0002", "762368945", 200000, 4);
const botonRetirar = document.getElementById("retirar");
const botonConsignar = document.getElementById("consignar"); 

//FUNCION_JS: Declaracion de funcion acumular() 
function acumular(numeroNuevo){ 
    let numero = parseInt(document.getElementById("inputCantidad").value); 
    if (isNaN(numero)) numero = numeroNuevo;
    else numero = numero + numeroNuevo; 

    document.getElementById("inputCantidad").value = numero;
    document.getElementById("saldo").value = miCuenta.saldo;
    botonRetirar.removeAttribute("disabled");
    botonConsignar.removeAttribute("disabled");
} 

// FUNCION_JS: Declaracion de función transaccionRetirar() 
function transaccionRetirar(){
    let numero = parseInt(document.getElementById("inputCantidad").value); 
    if (miCuenta.retirar(numero) == true)
        document.getElementById("inputSalida").value = 
    `Retiro exitoso por $${numero}`; 
    else 
        document.getElementById("inputSalida").value = 
    `Saldo insuficiente $${miCuenta.saldo}`; 

    document.getElementById("saldo").value = miCuenta.saldo; 
    document.getElementById("inputCantidad").value = ``; 
}



