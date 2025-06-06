const cueriestring = location.search;
const cueriParams = new URLSearchParams(cueriestring);
const busqueda = cueriParams.get("busqueda");
const tipo = cueriParams.get("peliOserie");

let titulon = document.querySelector(".tituloDeBusqueda");
let rafaNadal = document.querySelector(".busqueda");

let URLes;
if (tipo === "movie") {
    URLes = `https://api.themoviedb.org/3/search/movie?api_key=2621253a21d069b5d3996a4a7b9b8692&query=${busqueda}`;
}
else {
    URLes = `https://api.themoviedb.org/3/search/tv?api_key=2621253a21d069b5d3996a4a7b9b8692&query=${busqueda}`;
}

let destino;
if (tipo === "movie") {
    destino = "detallePeli.html";
}
else {
    destino = "detalleSerie.html";
}

fetch(URLes)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        if (data.results.length === 0) {
            rafaNadal.innerHTML = `<h2 class="noHayResultados">No hay resultados para "${busqueda}"</h2>`;
            } else {
            let cortalaPipo = "";
            for (let i = 0; i < data.results.length; i++) {
                let item = data.results[i];
                let titulo;
                if (tipo === "movie") {
                    titulo = item.title;
                } else {
                    titulo = item.name;
                } 

            cortalaPipo += `
                <div class="peliBusqueda">
                    <a href="${destino}?id=${item.id}">
                        <img class="fotoPeli" src="https://image.tmdb.org/t/p/w500${item.poster_path}" alt="${titulo}">
                        <p>${titulo}</p>
                    </a>
                </div>
            `;
            }
            rafaNadal.innerHTML = cortalaPipo;
            }
        })
    .catch(function (error) {
        console.log("Error al cargar la búsqueda", error);
    });