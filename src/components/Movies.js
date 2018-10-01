import React from 'react';
import Movie from './Movie';

class Movies extends React.Component {
  render(){
    return (
      <ul>
        {this.props.movies.map( movie => {
          return (
            <Movie
              key={movie.imdbID}
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
