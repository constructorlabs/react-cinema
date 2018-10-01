import React from 'react';
import Result from './result';

function Results({ receiveSearch, submittedQuery, classes, results, getDetail }) {

  function handleScroll(event) {
    if (event.target.scrollLeft + 100 > event.target.scrollWidth - event.target.clientWidth) {
      receiveSearch(submittedQuery,'resultsInfinite');
    }
  }
  
  return (
    <div className={classes}>
      <p className='results__title'>{`Search results for ${submittedQuery}:`}</p>
      <div className='results' onScroll={handleScroll}>
        {results.map(item => <Result key={item.imdbID} result={item} getDetail={getDetail}/>)}
      </div>
    </div>
  );
}

export default Results;