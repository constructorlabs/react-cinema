import React from 'react';

class Detail extends React.Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.close();
  }

  render() {
    return (
      <div className='details' onClick={this.handleClick}>
        <div className='detail__header'><h1 className='detail__title'>{this.props.detail.Title} ({this.props.detail.Year})</h1><div className='detail__logos'><input id='check' className='detail__checkbox' type='checkbox'></input><label className='fa' htmlFor='check'></label><a href='https://www.imdb.com/title/{this.props.detail.imdbID}/'><i className="fab fa-imdb"></i></a></div></div>
        <h2 className='detail__plot'>{this.props.detail.Plot}</h2> 
        <img className='detail__poster' src={this.props.detail.Poster}></img>
        <p className='detail__info'>{this.props.detail.Genre}  |  Runtime: {this.props.detail.Runtime}  |  Rated {this.props.detail.Rated}  |  IMDB Score: {this.props.detail.imdbRating}</p>
        <p className='detail__director'>Directed by: {this.props.detail.Director}</p>
        <p className='detail__actors'>Actors: {this.props.detail.Actors}</p>
        <p className='detail__awards'>Awards: {this.props.detail.Awards}</p>
      </div>
    );
  }
}

export default Detail;