document.addEventListener("DOMContentLoaded", function () {
    const URLgenero = "https://api.themoviedb.org/3/genre/tv/list?api_key=2621253a21d069b5d3996a4a7b9b8692";
    const loQueAgarroDelHtml = document.querySelector(".ulGenero");

    fetch(URLgenero)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let genero = "";
            for (let i = 0; i < data.genres.length; i++) {
                genero += `
                <li>
                    <a href="detalleGenero.html?id=${data.genres[i].id}">
                        ${data.genres[i].name}
                    </a>
                </li>
                `;
            }
            loQueAgarroDelHtml.innerHTML = genero;
        })
        .catch(function (error) {
            console.log("Error al cargar los géneros", error);
        });
    });