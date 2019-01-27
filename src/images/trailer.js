let id = "tt0307987";
let trailerURL = `https://api.themoviedb.org/3/movie/${movies.imdbID}/videos?api_key=8aed3c92a5c6ef5e792ffaf51ac22616&language=en-US`

// https://api.themoviedb.org/3/movie/tt0307987/videos?api_key=8aed3c92a5c6ef5e792ffaf51ac22616&language=en-US

fetchTrailer(trailerURL);  

function fetchTrailer(trailerURL){
    fetch(trailerURL) 
    .then(function(response) {
        return response.json();
    })
    .then(function(result){
        if (result.Response === 'False') {
            console.log(result)
        } else {   
            trailerVideo(result);
        }
    });

}

function trailerVideo(result){
    trailerClip = `https://www.youtube.com/watch?v=${result.results[0].key}`;
    // https://www.youtube.com/watch?v=xQvaoRScND4
};

console.log(trailerClip);