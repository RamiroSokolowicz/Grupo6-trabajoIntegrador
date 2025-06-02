
document.addEventListener("DOMContentLoaded", function () {
    const URLpelis = "https://api.themoviedb.org/3/movie/popular?api_key=2621253a21d069b5d3996a4a7b9b8692";
    const URLseries = "https://api.themoviedb.org/3/tv/popular?api_key=2621253a21d069b5d3996a4a7b9b8692";
    const URLpelisvisto = "https://api.themoviedb.org/3/movie/top_rated?api_key=2621253a21d069b5d3996a4a7b9b8692";
    
    let secciones = document.querySelectorAll(".secciones .divs");
    
    fetch(URLpelis)
        .then(function (response) {
            return response.json();
        })

        .then(function (data) {
            let pochoclo = "";

            for (let i = 0; i < 5; i++) {
                let item = data.results[i];
                pochoclo += `
                <div class="manteca">
                    <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}">
                    <h2>${item.title}</h2>
                    <h3>Fecha: ${item.release_date}</h3>
                </div>
                `;
            }
            secciones[0].innerHTML = pochoclo;})

        .catch(function (error) {
            console.log("Error al cargar las películas", error);
        });

        fetch(URLseries)
        .then(function (response) {
            return response.json();
        })
    
        .then(function (data) {
            let chocolate = "";
    
            for (let i = 0; i < 5; i++) {
                let item = data.results[i];
                chocolate += `
                <div class="manteca">
                    <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}">
                    <h2>${item.name}</h2>
                    <h3>Fecha: ${item.first_air_date}</h3>
                </div>
                `;
            }
            secciones[1].innerHTML = chocolate;})
    
        .catch(function (error) {
            console.log("Error al cargar las series", error);
        });

        fetch(URLpelisvisto)
        .then(function (response) {
            return response.json();
        })
    
        .then(function (data) {
            let azucar = "";
    
            for (let i = 0; i < 5; i++) {
                let item = data.results[i];
                azucar += `
                <div class="manteca">
                    <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}">
                    <h2>${item.title}</h2>
                    <h3>Fecha: ${item.release_date}</h3>
                </div>
                `;
            }
            secciones[2].innerHTML = azucar;})
    
        .catch(function (error) {
            console.log("Error al cargar las peliculas", error);
        });

    });




    
            