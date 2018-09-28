import React from 'react';
import Result from './result';

class Results extends React.Component {

  render() {
    return (
      <div className={this.props.classes}>
        <p className='results__title'></p>
        <div className='results'>
          {this.props.results.map(item => <Result key={item.imdbID} result={item} getDetails={this.props.getDetails}/>)}
        </div>
      </div>
    );
  }
}

export default Results;