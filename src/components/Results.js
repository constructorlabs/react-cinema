import React from 'react';
import Result from './result';

class Results extends React.Component {

  render() {
    return (
      <div className={this.props.classes}>
        <p className='results__title'>{`Search results for ${this.props.submittedQuery}:`}</p>
        <div className='results'>
          {this.props.results.map(item => <Result key={item.imdbID} result={item} getDetail={this.props.getDetail}/>)}
        </div>
      </div>
    );
  }
}

export default Results;