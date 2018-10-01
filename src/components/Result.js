import React from 'react';

function Result (props) {
  
  return (
    <article className='result' onClick={event => props.getDetail(props.result.imdbID,'fromResults')}>
      <div className='result__wrapper'>
        <img className='result__poster' src={props.result.Poster} alt=''></img>
        <h6 className='result__title'>{props.result.Title} ({props.result.Year})</h6>
      </div>
    </article>
  );
}

export default Result;