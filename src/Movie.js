import React from "react";
import MovieInfo from "./MovieInfo";

function Movie(props) {
  return (
    <div className="Content">
      <div className="Content-one">
        <h2>{props.data.Title}</h2>
        <img src={props.data.Poster} />
        <h2>{props.data.Year}</h2>
      </div>
      <div className="Content-two">
        <MovieInfo />
      </div>
    </div>
  );
}

export default Movie;
