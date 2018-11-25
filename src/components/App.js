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
    this.handleNextPage = this.handleNextPage.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.removeFavouriteByIndex = this.removeFavouriteByIndex.bind(this);

    this.state = {
      filmSearch: "",
      results: [],
      favouriteFilm: [],
      page: 1
    };
  }
  allFilmSearch(filmSearch, page) {
    fetch(
      `http://www.omdbapi.com/?s=${filmSearch}&apikey=d213a5b1&page=${page}`
    )
      .then(function(response) {
        return response.json();
      })

      .then(body => {
        console.log(body);
        this.setState({ results: body.Search });
        this.setState({ page: page });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ filmSearch: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.allFilmSearch(this.state.filmSearch, this.state.page);
  }

  handleClick(filmTitle) {
    console.log(filmTitle);

    const favouritesCopy = this.state.favouriteFilm.splice(0);
    favouritesCopy.push(filmTitle);

    this.setState({ favouriteFilm: favouritesCopy });
  }
  removeFavouriteByIndex(index) {
    console.log(index);
    const favouriteCopy = this.state.favouriteFilm.splice(0);
    favouriteCopy.splice(index, 1);
    this.setState({ favouriteFilm: favouriteCopy });
  }

  handleNextPage(page) {
    console.log("I'm being called");
    this.setState({ page: page + 1 }, () =>
      this.allFilmSearch(this.state.filmSearch, this.state.page)
    );
  }

  handlePrevious(page) {
    if (page > 1) {
      this.setState({ page: page - 1 }, () =>
        this.allFilmSearch(this.state.filmSearch, this.state.page)
      );
    }
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

        {this.state.results.length > 0 && (
          <div>
            <div className="next__page">
              <button
                className="next"
                onClick={() => {
                  this.handleNextPage(this.state.page);
                }}
              >
                next
              </button>
            </div>
            <div>
              <button
                disabled={this.state.page === 1}
                onClick={() => {
                  this.handlePrevious(this.state.page);
                }}
              >
                previous
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default App;
