import React from "react";
import Result from "./Result";

function Results({ movies }) {
  // console.log("inside Results ", movies);

  return (
    <div className="results__body">
      {movies.map(movie => {
        return (
          <Result
            movie={movie}
            key={movie.imdbID}
          />);
      })}
    </div>
  );
}

export default Results;
