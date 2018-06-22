import React from 'react';
import Movie from './Movie';

// Poster: "https://ia.media-imdb.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
// ​​
// Title: "Titanic"
// ​​
// Type: "movie"
// ​​
// Year: "1997"
// ​​
// imdbID: "tt0120338"

function Movies({ movies }) {
    return (
        movies.length > 0
            ?
            <section className="search-results" id="search-results">
                <div className='movie-list-wrapper'>
                    {movies.map(movie => {
                        return <Movie poster={movie.Poster} title={movie.Title} year={movie.Year} imdbID={movie.imdbID} />;
                    })}
                </div>
            </section>
            :
            ""
    );
}

export default Movies;