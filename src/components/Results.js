import React from "react";
import ResultItem from "./ResultItem";

class Results extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="result">
        {this.props.movieArray.map(movie => (
          <ResultItem
            fetchMovieDetails={this.props.fetchMovieDetails}
            key={movie.imdbID}
            movie={movie}
            apiKey={this.props.apiKey}
          />
        ))}
      </div>
    );
  }
}

export default Results;
