import React from 'react';

class Result extends React.Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.getDetail(this.props.result.imdbID);
  }

  render() {
    return (
      <article className='result' onClick={this.handleClick}>
        <div className='result__wrapper'>
          <img className='result__poster' src={this.props.result.Poster} alt=''></img>
          <h6 className='result__title'>{this.props.result.Title} ({this.props.result.Year})</h6>
        </div>
      </article>
    );
  }
}

export default Result;