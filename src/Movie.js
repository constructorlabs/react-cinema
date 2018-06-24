import React from "react";

function MovieDetails(props) {
  return (
    <div className="movie__details">
      <h1>Movie details</h1>
      <p>Actors:{props.Actors}</p>
      <p>Awards:{props.Awards}</p>
      <p>Runtime:{props.Runtime}</p>
    </div>
  );
}

class Movie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDetails: false,
      moreDetails: {}
    };
  }

  handleClick(movieIdToSearchFor) {
    console.log("hey you clicked me");
    fetch(`https://www.omdbapi.com/?i=${movieIdToSearchFor}&apikey=40ce55c`)
      .then(response => response.json())
      .then(data => this.setState({ moreDetails: data, showDetails: true }));
  }
  render() {
    return (
      <div className="movie">
        <div className="movie__top">
          <p> {this.props.title}</p>
          <p> Release Year: {this.props.year}</p>
        </div>
        <div className="movie__middle">
          <img className="movie__img" src={this.props.poster} />
        </div>

        <div className="movie__bottom">
          <button
            type="button"
            className="btn-more"
            // onClick={this.handleClick}
            // onClick={(event) => this.handleClick(event)}
            onClick={() => this.handleClick(this.props.imdbID)}
          >
            More details
          </button>
        </div>
        {this.state.showDetails ? (
          <MovieDetails {...this.state.moreDetails} />
        ) : null}
      </div>
    );
  }
}

export default Movie;
