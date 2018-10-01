import React from 'react';

function Preview(props) {
  
  function handleClick(event) {
    props.receiveMovie(props.movieData);
    props.hidePreview();
  }

  return (
    <div className='preview' onClick={handleClick}>{props.movieData.Title}</div>       
  );
}

export default Preview;