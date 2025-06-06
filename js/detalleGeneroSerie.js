const cueriParams = new URLSearchParams(location.search);
const aidiGenero = cueriParams.get("id");
const nombreDelGenero = cueriParams.get("nombre");

const locoBielsa = document.querySelector(".tituloGenero");
const carlosBianchi = document.querySelector(".divs");

locoBielsa.innerHTML = `GÉNERO: ${nombreDelGenero}`;
const URLseries = `https://api.themoviedb.org/3/discover/tv?api_key=2621253a21d069b5d3996a4a7b9b8692&with_genres=${aidiGenero}`;
fetch(URLseries)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let donElectron = "";
        for (let i = 0; i < data.results.length; i++) {
            donElectron += `
            <div class="divSeries">
                <a href="detalleGeneroSerie.html?id=${data.results[i].id}">
                    <img class="fotoPeli" src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt="${data.results[i].name}">
                    <h2 class="titulon">${data.results[i].name}</h2>
                </a>
                </div>
            `;
        }
        carlosBianchi.innerHTML = donElectron;
    }
    )
    .catch(function (error) {
        console.log("Error al cargar las series", error);
    }); 