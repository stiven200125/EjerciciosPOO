// Clase Fecha
class Fecha {
    constructor(dia = 1, mes = 1, año = 2000) {
        this.dia = dia;
        this.mes = mes;
        this.año = año;
    }

    leer(dia, mes, año) {
        this.dia = dia;
        this.mes = mes;
        this.año = año;
    }

    bisiesto() {
        if ((this.año % 4 === 0 && this.año % 100 !== 0) || this.año % 400 === 0) {
            return `${this.año} es un año bisiesto.`;
        } else {
            return `${this.año} no es un año bisiesto.`;
        }
    }

    diasMes(mes) {
        const diasEnMes = [31, (this.bisiesto() ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        return diasEnMes[mes - 1];
    }

    corta() {
        return `${this.dia.toString().padStart(2, '0')}-${this.mes.toString().padStart(2, '0')}-${this.año}`;
    }

    diasTranscurridos() {
        const fechaInicio = new Date(2000, 0, 1);
        const fechaActual = new Date(this.año, this.mes - 1, this.dia);
        const diferenciaTiempo = fechaActual - fechaInicio;
        const diferenciaDias = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));
        return `Han transcurrido ${diferenciaDias} días desde el 01-01-2000.`;
    }

    siguiente() {
        const fechaActual = new Date(this.año, this.mes - 1, this.dia);
        fechaActual.setDate(fechaActual.getDate() + 1);
        this.dia = fechaActual.getDate();
        this.mes = fechaActual.getMonth() + 1;
        this.año = fechaActual.getFullYear();
        return this.corta();
    }

    anterior() {
        const fechaActual = new Date(this.año, this.mes - 1, this.dia);
        fechaActual.setDate(fechaActual.getDate() - 1);
        this.dia = fechaActual.getDate();
        this.mes = fechaActual.getMonth() + 1;
        this.año = fechaActual.getFullYear();
        return this.corta();
    }
}

// Instancia de la clase Fecha con la fecha por defecto 01-01-2000
let fecha = new Fecha();

// Actualizar la interfaz con la fecha actual
function actualizarFecha() {
    document.getElementById("fechaActual").innerText = `Fecha actual: ${fecha.corta()}`;
}

// Asignar eventos a los botones
document.getElementById("leerFecha").addEventListener("click", function() {
    const dia = parseInt(document.getElementById("dia").value);
    const mes = parseInt(document.getElementById("mes").value);
    const año = parseInt(document.getElementById("año").value);
    fecha.leer(dia, mes, año);
    actualizarFecha();
});

document.getElementById("bisiesto").addEventListener("click", function() {
    alert(fecha.bisiesto());
});

document.getElementById("diasMes").addEventListener("click", function() {
    const mes = parseInt(document.getElementById("mesConsulta").value);
    alert(`El mes ${mes} tiene ${fecha.diasMes(mes)} días.`);
});

document.getElementById("diasTranscurridos").addEventListener("click", function() {
    alert(fecha.diasTranscurridos());
});

document.getElementById("siguiente").addEventListener("click", function() {
    alert(`Día siguiente: ${fecha.siguiente()}`);
    actualizarFecha();
});

document.getElementById("anterior").addEventListener("click", function() {
    alert(`Día anterior: ${fecha.anterior()}`);
    actualizarFecha();
});

actualizarFecha(); // Inicializar la fecha al cargar la página
