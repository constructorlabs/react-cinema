import React from 'react';

function Result ({ getDetail, result }) {
  
  return (
    <article className='result' onClick={event => getDetail(result.imdbID,'fromResults')}>
      <div className='result__wrapper'>
        <img className='result__poster' src={result.Poster} alt=''></img>
        <h6 className='result__title'>{result.Title} ({result.Year})</h6>
      </div>
    </article>
  );
}

export default Result;