class Fraccionario { 
    constructor(numerador, denominador) {
        this.numerador = numerador; 
        this.denominador = denominador; 
    } 
    sumar(numerador) { 
        this.numerador += numerador; 
        //this.numerador=this.numerador+numerador; 
    } 
    restar(numerador) {
        this.numerador -= numerador; 
    } 
}

function operar() {
    let PrimerFraccionario = new Fraccionario(0,1); 
    let SdoFraccionario = new Fraccionario(3,1); 
    let TercerFraccionario = new Fraccionario(0,1); 

    const numeros = document.querySelectorAll(".numero"); 

    PrimerFraccionario.numerador = parseInt(numeros[0].value); 
    PrimerFraccionario.denominador = parseInt(numeros[3].value);

    SdoFraccionario.numerador = parseInt(numeros[1].value); 
    SdoFraccionario.denominador = parseInt(numeros[3].value); 

    TercerFraccionario.sumar(PrimerFraccionario.numerador); 
    TercerFraccionario.sumar(SdoFraccionario.numerador);
    TercerFraccionario.denominador = numeros[3].value;

    console.log(numeros); //console.log(TercerFraccionario); 

    document.getElementById("numerador3").value = TercerFraccionario.numerador; 
    document.getElementById("denominador2").value = TercerFraccionario.denominador; 
    document.getElementById("denominador3").value = TercerFraccionario.denominador; 

    console.log(TercerFraccionario); 
}
