import React from "react";

class FilmImage extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.retrieveFilm = this.retrieveFilm.bind(this);
    this.handleNext = this.handleNext.bind(this);
    // this.handlePrevious = this.handlePrevious.bind(this);
    // this.notFound = this.notFound.bind(this);
    this.state = {
      click: false,
      currentFilm: {},
      currentPage: 1
      // notFound: {}
    };
  }

  retrieveFilm(film) {
    fetch(`http://www.omdbapi.com/?i=${film}&apikey=d213a5b1`)
      .then(response => response.json())
      .then(film => {
        this.setState({
          currentFilm: film
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({ click: !this.state.click });
    this.retrieveFilm(this.props.filmID);
  }

  handleNext() {
    this.setState({ pageNum: this.state.pageNum + 1 });
  }

  // handlePrevious() {
  //   this.setState({ pageNum: this.state.pageNum - 1 });
  // }

  // handleNotFound() {
  //   this.setState({ notFound });
  // }

  render() {
    return (
      <div className="film">
        <div className="container">
          <img
            onClick={this.handleClick}
            className="image"
            src={this.props.film.Poster}
          />
          {this.state.click ? (
            <div className="modal">
              {this.state.currentFilm.Plot}
              {this.state.currentFilm.Language}
              {this.state.currentFilm.Runtime}
              {this.state.currentFilm.Genre}
            </div>
          ) : null}
        </div>
        <div className="info">
          <h3>{this.props.film.Title}</h3>
          <h4>{this.props.film.Year}</h4>
        </div>

        <div className="button">
          <button
            onClick={() => {
              this.props.favourites(this.props.film.Title);
            }}
          >
            &#10084;
          </button>
        </div>
      </div>
    );
  }
}
export default FilmImage;
