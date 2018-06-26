import React from "react";

function Info({ movieDetails }) {
  return (
    <div className='info-section'>
      <h1 className='info-section__title'>{movieDetails.Title}</h1>
      <p className='info-section__plot'>{movieDetails.Plot}</p>
    </div>
  );
}

export default Info;