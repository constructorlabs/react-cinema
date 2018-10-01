import React from 'react';

function Preview({ receiveMovie, hidePreview, movieData }) {
  
  function handleClick(event) {
    receiveMovie(movieData);
    hidePreview();
  }

  return (
    <div className='preview' onClick={handleClick}>{movieData.Title}</div>       
  );
}

export default Preview;