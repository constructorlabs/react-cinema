import React from "react";

function MovieDetails(props) {
  return (
    <div className="movie__details">
      <h1>Movie details</h1>
      <p>
        <b>Director: </b>
        {props.Director}
      </p>
      <p>
        <b>Actors: </b>
        {props.Actors}
      </p>
      <p>
        <b>Awards: </b>
        {props.Awards}
      </p>
      <p>
        <b>Runtime: </b>
        {props.Runtime}
      </p>
      <p>
        <b>Plot: </b>
        {props.Plot}
      </p>
    </div>
  );
}

class Movie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDetails: false,
      moreDetails: {},
      buttonName: "more details"
    };
  }

  handleClick(movieIdToSearchFor) {
    if (this.state.showDetails) {
      this.setState({ showDetails: false, buttonName: "more details" });
    } else {
      fetch(`https://www.omdbapi.com/?i=${movieIdToSearchFor}&apikey=40ce55c`)
        .then(response => response.json())
        .then(data =>
          this.setState({
            moreDetails: data,
            showDetails: true,
            buttonName: "hide details"
          })
        );
    }
  }
  render() {
    return (
      <div className="movie">
        <div className="movie__top">
          <h2>{this.props.title}</h2>
          <p>
            <b>Release Year: </b> {this.props.year}
          </p>
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
            {this.state.buttonName}
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
