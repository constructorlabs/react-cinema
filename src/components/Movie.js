import React from 'react';

class Movie extends React.Component {
  constructor(){
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    const isFavourite = this.props.favourites.find( currentFavourite => {
      return currentFavourite.imdbID === this.props.movie.imdbID;
    });

    if(isFavourite){
      this.props.removeFromFavourites(this.props.movie);
    } else {
      this.props.addFavourites(this.props.movie);
    }
  }

  render(){
    const isFavourite = this.props.favourites.find( currentFavourite => {
      return currentFavourite.imdbID === this.props.movie.imdbID;
    });

    return (
      <li>
        <h2>{this.props.movie.Title}</h2>
        <div>
          <button onClick={this.handleClick}>{ isFavourite ? 'Remove from favourites' : 'Add to favourites'}</button>
        </div>
        <img src={this.props.movie.Poster} />
      </li>
    )
  }
}

export default Movie;
