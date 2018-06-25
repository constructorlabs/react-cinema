import React from "react";
import Search from "./Search";
import Movie from "./Movie";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentInput: "",
      movieData: [] // 3
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ currentInput: event.target.value }); //2
  }

  handleSubmit(event) {
    event.preventDefault();
    this.fetchingMovies(this.state.currentInput);
  }

  fetchingMovies(movie) {
    console.log("Fetching Movies " + movie);

    const url = `https://www.omdbapi.com/?s=${movie}&apikey=df61b4a5`;

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ movieData: data.Search }));
  }

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox.....</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Search
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        {this.state.movieData.map(movieData => (
          <Movie key={movieData.imdbID} data={movieData} />
        ))}
      </div>
    );
  }
}

export default App;
