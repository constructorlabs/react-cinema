import React from 'react';

function Result (props) {
  
  function handleClick(event) {
    props.getDetail(props.result.imdbID,'fromResults');
  }

  return (
    <article className='result' onClick={handleClick}>
      <div className='result__wrapper'>
        <img className='result__poster' src={props.result.Poster} alt=''></img>
        <h6 className='result__title'>{props.result.Title} ({props.result.Year})</h6>
      </div>
    </article>
  );
}

export default Result;