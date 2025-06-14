
const cueriestring = location.search;
const cueriParams = new URLSearchParams(cueriestring);
const aidiPeli = cueriParams.get("id");

const URLpelis = `https://api.themoviedb.org/3/movie/${aidiPeli}?api_key=2621253a21d069b5d3996a4a7b9b8692`;

fetch(URLpelis)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        document.querySelector(".fotoPeli").src = "https://image.tmdb.org/t/p/w500" + data.backdrop_path;
        document.querySelector(".titulon").innerHTML = data.original_title;
        document.querySelector(".calificacion").innerHTML = "CALIFICACIÓN: " + data.vote_average;
        document.querySelector(".fecha").innerHTML = "ESTRENO: " + data.release_date;
        document.querySelector(".duracion").innerHTML = "DURACIÓN: " + data.runtime + " MIN";
        document.querySelector(".sinopsis").innerHTML = "SINOPSIS: " + data.overview;

        let generos = "GÉNEROS: ";
        for (let i = 0; i < data.genres.length; i++) {
            generos += `<a href="detalleGeneroPeli.html?id=${data.genres[i].id}&nombre=${data.genres[i].name}">` 
            document.querySelector(".genero").innerHTML = generos;
            generos += data.genres[i].name;
        }
        //Para no olvidarme después, me fije en la info de Sinners//
;})
    .catch(function (error) {
        console.log("Error al cargar la película", error);
    })


