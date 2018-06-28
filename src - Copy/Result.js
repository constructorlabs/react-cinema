import React from "react";

class Result extends React.Component {
  constructor() {
    super();
  }

  render() {
    // console.log("inside Result", this.props.movies.imdbID);
    const movieLinkUrl = `https://imdb.com/title/${this.props.movie.imdbID}`;
    return (
      <li>

        <a id={this.props.movie.imdbID} href={movieLinkUrl} target="_blank">
          <img
            src={this.props.movie.Poster}
            alt="Movie poster"
            width="auto"
            height="200"
          />{this.props.movie.Title} {this.props.movie.Year}
        </a>
      </li>
    );
  }
}
export default Result;
