import React from "react";

function MovieDetails(props) {
  return (
    <div>
      <h1>movie details{props.data.Actors}</h1>
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
      <div className="content__movie">
        <p> {this.props.title}</p>
        <p> Release Year: {this.props.year}</p>
        <img src={this.props.poster} />
        <button
          type="button"
          className="btn-more"
          // onClick={this.handleClick}
          // onClick={(event) => this.handleClick(event)}
          onClick={() => this.handleClick(this.props.imdbID)}
        >
          More details
        </button>
        {this.state.showDetails ? (
          <MovieDetails data={this.state.moreDetails} />
        ) : null}
      </div>
    );
  }
}

export default Movie;
