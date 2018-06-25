import React from "react";
import MovieResult from "./MovieResult";

function MovieResults({ movies, getMoreInfo }) {
  return (
    <div className="movieinfo">
      {movies.map(movie => {
        return (
          <MovieResult
            movie={movie}
            key={movie.imdbID}
            getMoreInfo={getMoreInfo}
          />
        );
      })}
    </div>
  );
}

export default MovieResults;
