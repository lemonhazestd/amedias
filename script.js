document.addEventListener("DOMContentLoaded", function () {
    const categorias = document.querySelectorAll(".categoria");
    const enlaces = document.querySelectorAll("nav ul li a");

    function mostrarCategoria(id) {
        categorias.forEach(cat => {
            cat.style.display = "none"; // Oculta todas las categorías
        });
        document.getElementById(id).style.display = "block"; // Muestra la seleccionada
    }

    // Manejar clic en los enlaces del menú
    enlaces.forEach(enlace => {
        enlace.addEventListener("click", function (event) {
            event.preventDefault(); // Evita el desplazamiento automático
            const categoriaId = this.getAttribute("href").substring(1);
            mostrarCategoria(categoriaId);
        });
    });

    // Mostrar la primera categoría por defecto
    mostrarCategoria("zoquetes");
});