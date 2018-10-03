import React from "react";

class FilmImage extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.retrieveFilm = this.retrieveFilm.bind(this);
    this.state = {
      click: false,
      currentFilm: {}
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
  render() {
    return (
      <div>
        <img
          onClick={this.handleClick}
          className="film"
          src={this.props.film.Poster}
        />
        <div>
          <h3>{this.props.film.Title}</h3>
          <h4>{this.props.film.Year}</h4>
        </div>
        {this.state.click ? (
          <div>
            {this.state.currentFilm.Plot}
            {this.state.currentFilm.Language}
            {this.state.currentFilm.Runtime}
            {this.state.currentFilm.Genre}
          </div>
        ) : null}
        <div>
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
