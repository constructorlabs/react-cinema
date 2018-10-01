import React from 'react';
import Result from './result';

function Results(props) {

  function handleScroll(event) {
    if (event.target.scrollLeft + 100 > event.target.scrollWidth - event.target.clientWidth) {
      props.receiveSearch(props.submittedQuery,'resultsInfinite');
    }
  }
  
  return (
    <div className={props.classes}>
      <p className='results__title'>{`Search results for ${props.submittedQuery}:`}</p>
      <div className='results' onScroll={handleScroll}>
        {props.results.map(item => <Result key={item.imdbID} result={item} getDetail={props.getDetail}/>)}
      </div>
    </div>
  );
}

export default Results;