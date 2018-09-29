import React from 'react';
import Result from './result';

class Results extends React.Component {

  constructor() {
    super();

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(event) {
    if (event.target.scrollLeft + 100 > event.target.scrollWidth - event.target.clientWidth) {
      this.props.receiveSearch(this.props.submittedQuery,'resultsInfinite');
    }
  }

  render() {
    return (
      <div className={this.props.classes}>
        <p className='results__title'>{`Search results for ${this.props.submittedQuery}:`}</p>
        <div className='results' onScroll={this.handleScroll}>
          {this.props.results.map(item => <Result key={item.imdbID} result={item} getDetail={this.props.getDetail}/>)}
        </div>
      </div>
    );
  }
}

export default Results;