import React from "react";
import Movie from "./Movie";

function MovieList(props) {
  return (
    <div className="movie__list">
      {props.moviesResults.map(movie => {
        return (
          <Movie
            poster={movie.Poster}
            title={movie.Title}
            year={movie.Year}
            imdbID={movie.imdbID}
            key={movie.imdbID}
          />
        );
      })}
    </div>
  );
}

export default MovieList;
