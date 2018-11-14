import React from "react";
import Search from "./Search.js";
import Films from "./Films.js";
import FilmImage from "./FilmImage.js";
import Favourites from "./Favourites.js";

class App extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.removeFavouriteByIndex = this.removeFavouriteByIndex.bind(this);

    this.state = {
      filmSearch: "",
      results: [],
      favouriteFilm: []
    };
  }

  componentDidMount() {}

  handleClick(filmTitle) {
    console.log(filmTitle);

    const favouritesCopy = this.state.favouriteFilm.splice(0);
    favouritesCopy.push(filmTitle);

    this.setState({ favouriteFilm: favouritesCopy });
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ filmSearch: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.allFilmSearch(this.state.filmSearch);
  }

  removeFavouriteByIndex(index) {
    console.log(index);
    const favouriteCopy = this.state.favouriteFilm.splice(0);
    favouriteCopy.splice(index, 1);
    this.setState({ favouriteFilm: favouriteCopy });
  }

  allFilmSearch(filmSearch) {
    fetch(`http://www.omdbapi.com/?s=${filmSearch}&apikey=d213a5b1`)
      .then(function(response) {
        return response.json();
      })

      .then(body => {
        console.log(body);
        this.setState({ results: body.Search });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div className="top__line">
          <h2 className="title">
            <b>Film Finder</b>
          </h2>
          <div className="favourites__container">
            <button className="favourites">❤️</button>
            <Favourites
              favouritesList={this.state.favouriteFilm}
              removeFavouriteByIndex={this.removeFavouriteByIndex}
            />
          </div>

          <Search
            onSubmit={this.handleSubmit}
            inputText={this.state.filmSearch}
            handleChange={this.handleChange}
          />
        </div>

        <Films
          films={this.state.results}
          favourites={this.state.favouriteFilm}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}
export default App;
