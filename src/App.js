import React from "react";
import Search from "./Search";
import Movie from "./Movie";
import MovieInfo from "./MovieInfo";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentInput: "",
      movieData: [], // 3
      moreInfo: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInfoClick = this.handleInfoClick.bind(this);
  }

  handleChange(event) {
    this.setState({ currentInput: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.fetchingMovies(this.state.currentInput);
  }

  handleInfoClick(event) {
    this.getMoviePlot(this.state.moreInfo);
  }

  fetchingMovies(movie) {
    //search for movie
    console.log("Fetching Movies " + movie);

    const url = `https://www.omdbapi.com/?s=${movie}&apikey=df61b4a5`;

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ movieData: data.Search }));
  }

  getMoviePlot(movie) {
    //grab movie info
    const url = `https://www.omdbapi.com/?t=${movie}&apikey=df61b4a5&plot=full`;

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ moreInfo: data.Title }));
    console.log(">>" + data.Title);
  }
  componentDidMount() {
    this.fetchingMovies("Mickey Mouse");
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to the movie database.....</h1>
        <h2>Use the search to find movies!</h2>
        <Search
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        {this.state.movieData.map(movieData => (
          <Movie key={movieData.imdbID} data={movieData} />
        ))}
        <MovieInfo handleInfoClick={this.handleInfoClick} />
      </div>
    );
  }
}

export default App;
