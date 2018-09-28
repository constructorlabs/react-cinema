import React from "react";
import Search from "./Search";
import Results from "./Results";
import Pages from "./Pages";

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
    this.receiveFavourites = this.receiveFavourites.bind(this);
  }

  receiveSearchTerm(term) {
    this.setState({
      searchTerm: term
    });
  }

  fetchMovies() {
    fetch(
      `http://www.omdbapi.com/?s=${this.state.searchTerm}&page=${this.state.currentPage}&apikey=${
        this.state.apiKey
      }`
    )
      .then(response => response.json())
      .then(body => {
        this.setState({
          pagesObject: body,
          movieArray: body.Search
        });
        console.log(this.state.currentPage)
      });
  }

  receiveCurrentPage(page){
    this.setState({
      currentPage: page
    }, () => this.fetchMovies())
  }

  receiveFavourites(favourite){

  }

  render() {
    return (
      <div>
        <Search
          receiveSearchTerm={this.receiveSearchTerm}
          fetchMovies={this.fetchMovies}
          currentValue={this.state.searchTerm}
        />
        <Results
          movieArray={this.state.movieArray}
          filmDetails={this.state.filmDetails}
          apiKey={this.state.apiKey}
          receiveFavourites={this.receiveFavourites}
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
