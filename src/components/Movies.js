import React from 'react';
import Movie from './Movie';

class Movies extends React.Component{
  constructor(){
    super();
  }

  render(){
    
    return(
      <div className='movies' >
      {this.props.movies.map(movie => {

        return  <Movie
          title={movie.Title}
          year={movie.Year}
          key={movie.imdbID}
          id={movie.imdbID}
          image={movie.Poster}
          />
      })}
      </div>
    )
  }
}

export default Movies;
