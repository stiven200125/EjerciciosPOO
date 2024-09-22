// Clase Cafetera
class Cafetera {
    constructor(capacidadMaxima, cantidadActual) {
        this.capacidadMaxima = capacidadMaxima;
        this.cantidadActual = cantidadActual;
    }

    llenarCafetera() {
        this.cantidadActual = this.capacidadMaxima;
        return "La cafetera está llena.";
    }

    servirTaza(tamanioTaza) {
        if (this.cantidadActual >= tamanioTaza) {
            this.cantidadActual -= tamanioTaza;
            return `Se sirvió una taza de ${tamanioTaza}ml.`;
        } else {
            let servido = this.cantidadActual;
            this.cantidadActual = 0;
            return `Solo quedaban ${servido}ml de café.`;
        }
    }

    vaciarCafetera() {
        this.cantidadActual = 0;
        return "La cafetera está vacía.";
    }

    agregarCafe(cantidad) {
        if (this.cantidadActual + cantidad <= this.capacidadMaxima) {
            this.cantidadActual += cantidad;
            return `Se agregaron ${cantidad}ml de café.`;
        } else {
            this.cantidadActual = this.capacidadMaxima;
            return "La cafetera está llena, no se puede agregar más café.";
        }
    }
}


let cafetera = new Cafetera(1000, 500); // Capacidad máxima 1000ml, cantidad actual 500ml

document.getElementById("llenar").addEventListener("click", function() {
    alert(cafetera.llenarCafetera());
    actualizarEstadoCafetera();
});

document.getElementById("servir").addEventListener("click", function() {
    let tamanioTaza = parseInt(document.getElementById("tamanioTaza").value);
    alert(cafetera.servirTaza(tamanioTaza));
    actualizarEstadoCafetera();
});

document.getElementById("vaciar").addEventListener("click", function() {
    alert(cafetera.vaciarCafetera());
    actualizarEstadoCafetera();
});

document.getElementById("agregar").addEventListener("click", function() {
    let cantidad = parseInt(document.getElementById("cantidadCafe").value);
    alert(cafetera.agregarCafe(cantidad));
    actualizarEstadoCafetera();
});

function actualizarEstadoCafetera() {
    document.getElementById("estadoCafetera").innerText = `Cantidad actual de café: ${cafetera.cantidadActual}ml`;
}

actualizarEstadoCafetera(); 