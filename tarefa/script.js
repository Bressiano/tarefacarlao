document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    let currentZoom = 1; // Valor inicial de zoom

    // Alternar entre modo claro e escuro
    document.getElementById("toggle-theme").addEventListener("click", function () {
        if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode");
            body.classList.add("light-mode");
        } else {
            body.classList.remove("light-mode");
            body.classList.add("dark-mode");
        }
    });

    // Aumentar a tela (zoom)
    document.getElementById("zoom-in").addEventListener("click", function () {
        currentZoom += 0.1;
        body.style.transform = `scale(${currentZoom})`;
    });

    // Diminuir a tela (zoom)
    document.getElementById("zoom-out").addEventListener("click", function () {
        if (currentZoom > 0.5) {
            currentZoom -= 0.1;
            body.style.transform = `scale(${currentZoom})`;
        }
    });

    // Redefinir zoom
    document.getElementById("reset-zoom").addEventListener("click", function () {
        currentZoom = 1;
        body.style.transform = "scale(1)";
    });

    // LIBRAS (apenas indicador)
    document.getElementById("libras").addEventListener("click", function () {
        alert("Integração com LIBRAS ainda não implementada. Este botão é apenas demonstrativo.");
    });
});
