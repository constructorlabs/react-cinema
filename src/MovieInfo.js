import React from "react";

function MovieInfo(props) {
  return (
    <div className="Info">
      <button onClick={event => props.handleInfoClick(event)}>More Info</button>
      <p>{props.data}</p>
    </div>
  );
}

export default MovieInfo;
