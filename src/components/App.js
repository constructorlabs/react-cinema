import React from "react";
import Search from "./Search";
import Results from "./Results";
import Pages from "./Pages";
import Favourites from "./Favourites";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      movieArray: [],
      pagesObject: {},
      currentPage: 1,
      favouritesArray: [],
      apiKey: "e2c4cd31"
    };
    this.receiveSearchTerm = this.receiveSearchTerm.bind(this);
    this.fetchMovies = this.fetchMovies.bind(this);
    this.receiveCurrentPage = this.receiveCurrentPage.bind(this);
    this.receiveFavouritesInfo = this.receiveFavouritesInfo.bind(this);
  }

  receiveSearchTerm(term) {
    this.setState({
      searchTerm: term
    });
  }

  fetchMovies() {
    fetch(
      `http://www.omdbapi.com/?s=${this.state.searchTerm}&page=${
        this.state.currentPage
      }&apikey=${this.state.apiKey}`
    )
      .then(response => response.json())
      .then(body => {
        this.setState({
          pagesObject: body,
          movieArray: body.Search
        });
      });
  }

  componentDidMount() {
    this.setState(
      {
        favouritesArray:
          localStorage.getItem("favourites") === null
            ? []
            : JSON.parse(localStorage.getItem("favourites"))
      }
      // localStorage.clear()
    );
  }

  receiveCurrentPage(page) {
    this.setState(
      {
        currentPage: page
      },
      () => this.fetchMovies()
    );
  }

  receiveFavouritesInfo(id, favourite) {
    if (
      id === "add__to__favourites" &&
      this.state.favouritesArray.indexOf(favourite) === -1
    ) {
      this.setState(
        {
          favouritesArray: this.state.favouritesArray.concat([favourite])
        },
        () =>
          localStorage.setItem(
            "favourites",
            JSON.stringify(this.state.favouritesArray)
          )
      );
    } else if (id === "favourites__clear__favourites") {
      this.setState(
        {
          favouritesArray: []
        },
        () => localStorage.clear()
      );
    } else if (id === "favourites__delete__favourite") {
      const favouritesToBeRemoved = this.state.favouritesArray;
      favouritesToBeRemoved.splice(
        this.state.favouritesArray.indexOf(favourite),
        1
      );
      this.setState(
        {
          favouritesArray: favouritesToBeRemoved
        },
        () =>
          localStorage.setItem(
            "favourites",
            JSON.stringify(this.state.favouritesArray)
          )
      );
    } else if (id === "favourites__move__up") {
      let favouriteIndex = this.state.favouritesArray.indexOf(favourite);
      let firstHalfFavourites = this.state.favouritesArray.slice(
        0,
        favouriteIndex - 1
      );
      let favouritesToSwap = this.state.favouritesArray.slice(
        favouriteIndex - 1,
        favouriteIndex + 1
      );
      let secondHalfFavourites = this.state.favouritesArray.slice(
        favouriteIndex + 1
      );
      favouritesToSwap.reverse();
      let rearrangedFavourites = firstHalfFavourites.concat(
        favouritesToSwap,
        secondHalfFavourites
      );
      this.setState(
        {
          favouritesArray: rearrangedFavourites
        },
        () =>
          localStorage.setItem(
            "favourites",
            JSON.stringify(this.state.favouritesArray)
          )
      );
    } else if (id === "favourites__move__down") {
      let favouriteIndex = this.state.favouritesArray.indexOf(favourite);
      let firstHalfFavourites = this.state.favouritesArray.slice(
        0,
        favouriteIndex
      );
      let favouritesToSwap = this.state.favouritesArray.slice(
        favouriteIndex,
        favouriteIndex + 2
      );
      let secondHalfFavourites = this.state.favouritesArray.slice(
        favouriteIndex + 2
      );
      favouritesToSwap.reverse();
      let rearrangedFavourites = firstHalfFavourites.concat(
        favouritesToSwap,
        secondHalfFavourites
      );
      this.setState(
        {
          favouritesArray: rearrangedFavourites
        },
        () =>
          localStorage.setItem(
            "favourites",
            JSON.stringify(this.state.favouritesArray)
          )
      );
    }
  }

  render() {
    return (
      <div>
        <Search
          receiveSearchTerm={this.receiveSearchTerm}
          fetchMovies={this.fetchMovies}
          currentValue={this.state.searchTerm}
        />
        <Favourites
          favouritesArray={this.state.favouritesArray}
          receiveFavouritesInfo={this.receiveFavouritesInfo}
        />
        <Results
          movieArray={this.state.movieArray}
          filmDetails={this.state.filmDetails}
          apiKey={this.state.apiKey}
          receiveFavouritesInfo={this.receiveFavouritesInfo}
        />
        <Pages
          pagesObject={this.state.pagesObject}
          movieArray={this.state.movieArray}
          receiveCurrentPage={this.receiveCurrentPage}
          currentPage={this.state.currentPage}
        />
      </div>
    );
  }
}

export default App;
