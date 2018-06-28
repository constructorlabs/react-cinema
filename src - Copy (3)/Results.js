import React from "react";
import Result from "./Result";

function Results({ movies, receiveMovie, currentMovie }) {
  // console.log("inside Results ", movies);


  // if (currentMovie) {
  //   console.log(currentMovie)
  // }
  return (

    <div className="results__body">
      {movies.map(movie => {

        return (
          <Result
            movie={movie}
            key={movie.imdbID}
            receiveMovie={receiveMovie}
            currentMovie={currentMovie}

          />

        );

      })}
    </div>
  );
}

export default Results;
