import React from "react";
import Movie from "./Movie";

class Movies extends React.Component {
  render() {
    return (
      <div className="moviesfeed">
        {this.props.movieresults.map(movie => {
          return <Movie movie={movie} key={movie.imdbID} />;
        })}
      </div>
    );
  }
}

export default Movies;
