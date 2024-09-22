// Clase Cancion
class Cancion {
    constructor(titulo = "Título desconocido", autor = "Autor desconocido", video = "Sin video") {
        this.titulo = titulo;
        this.autor = autor;
        this.video = video;
    }

    // Métodos para obtener el título y autor
    dameTitulo() {
        return this.titulo;
    }

    dameAutor() {
        return this.autor;
    }

    // Métodos para establecer el título y autor
    ponTitulo(nuevoTitulo) {
        this.titulo = nuevoTitulo;
    }

    ponAutor(nuevoAutor) {
        this.autor = nuevoAutor;
    }

    // Método para mostrar la información de la canción
    mostrarCancion() {
        return `Título: ${this.titulo}, Autor: ${this.autor}, Video: ${this.video}`;
    }
}

// Crear una instancia de la clase Cancion
let cancion = new Cancion();

// Función para actualizar la canción z
function actualizarCancion() {
    document.getElementById("infoCancion").innerText = cancion.mostrarCancion();
}

// Evento para establecer el título de la canción
document.getElementById("establecerTitulo").addEventListener("click", function() {
    let nuevoTitulo = prompt("Introduce el nuevo título de la canción:");
    cancion.ponTitulo(nuevoTitulo);
    actualizarCancion();
});

// Evento para establecer el autor de la canción
document.getElementById("establecerAutor").addEventListener("click", function() {
    let nuevoAutor = prompt("Introduce el nuevo autor de la canción:");
    cancion.ponAutor(nuevoAutor);
    actualizarCancion();
});

// Inicializar la canción al cargar la página
actualizarCancion();
