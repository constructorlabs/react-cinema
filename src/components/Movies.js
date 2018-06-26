import React from "react";

function Movies({ movie, receiveMovieDetails }) {
  function getMovieDetails() {
    fetch(`http://www.omdbapi.com/?i=${photo.imdbID}&plot=full&apikey=7a98d1bb`)
      .then(response => response.json())
      .then(data => {
        receiveMovieDetails(data);
      });
  }
  return (
    <div className='posters'>
      <h2 className='posters__title'>{movie.Title}</h2>
      <img className='posters__image' src={movie.Poster} />
      <p />
      <button onClick={getMovieDetails} className='posters__infobtn'>Get details</button>
    </div>
  );
}

export default Movies;