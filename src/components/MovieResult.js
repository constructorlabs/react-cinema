import React from "react";

// let imdb = "https://www.imdb.com/title/";

const omd = {
  apiKey: "2c6457b6&",
  firstSearch: "red",
  url: "http://www.omdbapi.com/"
};

class MovieResult extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  fetchMoreInfo() {
    fetch(`${omd.url}?i=${this.props.movie.imdbID}&apikey=${omd.apiKey}`)
      .then(response => response.json())
      .then(result => {
        this.props.getMoreInfo(result);
      })
      .catch(error => console.log(error));
  }

  handleClick(event) {
    event.preventDefault();

    this.fetchMoreInfo();
  }

  render() {
    return (
      <div className="moviecard">
        <div className="cardtext">
          <a onClick={this.handleClick} href={this.props.movie.Poster}>
            <h2 className="movieheading">{this.props.movie.Title}</h2>
          </a>
          <h3>{this.props.movie.Year}</h3>
        </div>
        <a href={this.props.movie.imdbID}>
          <img
            className="poster"
            src={this.props.movie.Poster}
            alt="Movie Poster"
          />
        </a>
      </div>
    );
  }
}

export default MovieResult;
