import React from "react";
import Result from "./Result";

function Results({ movies, receiveMovie, currentMovie }) {
  console.log("inside results getting ready for sort", movies)

  const sorted = movies.sort(function (a, b) {
    return a.imdbRating - b.imdbRating
  })
  console.log(" sorted ", sorted)


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
