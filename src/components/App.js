import React from "react";
import Search from "./Search";
import Results from "./Results";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      movieArray: [],
      pages: "",
      favouritesArray: [],
      apiKey: "e2c4cd31"
    };
    this.receiveSearchTerm = this.receiveSearchTerm.bind(this);
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  receiveSearchTerm(term) {
    this.setState({
      searchTerm: term
    });
  }

  fetchMovies() {
    fetch(
      `http://www.omdbapi.com/?s=${this.state.searchTerm}&page=1&apikey=${
        this.state.apiKey
      }`
    )
      .then(response => response.json())
      .then(body => {
        this.setState({ movieArray: body.Search});
        console.log(this.state.movieArray);
      })
  }

  render() {
    return (
      <div>
        <Search
          receiveSearchTerm={this.receiveSearchTerm}
          fetchMovies={this.fetchMovies}
          currentValue={this.state.searchTerm}
        />
        <Results />
      </div>
    );
  }
}

export default App;
