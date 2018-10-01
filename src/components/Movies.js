import React from 'react';
import Movie from './Movie';

class Movies extends React.Component {
  render(){
    return (
      <ul>
        {this.props.movies.map( movie => {

          const isFavourite = this.props.favourites.find( currentFavourite => {
            return currentFavourite.imdbID === movie.imdbID;
          });

          return (
            <Movie
              key={movie.imdbID}
              isFavourite={isFavourite}
              favourites={this.props.favourites}
              movie={movie}
              addFavourites={this.props.addFavourites}
              removeFromFavourites={this.props.removeFromFavourites}
            />
          );
        })}
      </ul>
    )
  }
}

export default Movies;
