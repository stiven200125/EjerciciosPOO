// Clase Hora
class Hora {
    constructor(horas = 0, minutos = 0, segundos = 0) {
        this.horas = horas;
        this.minutos = minutos;
        this.segundos = segundos;
    }

    // Método para mostrar la hora actual en formato 00:00:00
    mostrar() {
        return `${this.horas.toString().padStart(2, '0')}:${this.minutos.toString().padStart(2, '0')}:${this.segundos.toString().padStart(2, '0')}`;
    }

    // Método para avanzar al siguiente segundo
    siguiente() {
        this.segundos++;
        if (this.segundos === 60) {
            this.segundos = 0;
            this.minutos++;
            if (this.minutos === 60) {
                this.minutos = 0;
                this.horas++;
                if (this.horas === 24) {
                    this.horas = 0;
                }
            }
        }
        return this.mostrar();
    }

    // Método para retroceder al segundo anterior
    anterior() {
        this.segundos--;
        if (this.segundos < 0) {
            this.segundos = 59;
            this.minutos--;
            if (this.minutos < 0) {
                this.minutos = 59;
                this.horas--;
                if (this.horas < 0) {
                    this.horas = 23;
                }
            }
        }
        return this.mostrar();
    }
}

// Instancia de la clase Hora con la hora por defecto 00:00:00
let hora = new Hora();

// Función para actualizar la hora en la interfaz
function actualizarHora() {
    document.getElementById("horaActual").innerText = `Hora actual: ${hora.mostrar()}`;
}

// Eventos para avanzar y retroceder segundos
document.getElementById("siguiente").addEventListener("click", function() {
    alert(`Siguiente segundo: ${hora.siguiente()}`);
    actualizarHora();
});

document.getElementById("anterior").addEventListener("click", function() {
    alert(`Segundo anterior: ${hora.anterior()}`);
    actualizarHora();
});

actualizarHora(); // Inicializar la hora al cargar la página
