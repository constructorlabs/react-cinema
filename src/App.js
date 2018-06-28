import React from "react";
import Search from "./Search";
import Results from "./Results";
// import Info from "./Info";

let movieArray = [];

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      movies: [],
      currentMovie: "",
      currentInfo: "",
      sortBy: ""

    };
    this.sortMovie = this.sortMovie.bind(this)
    this.receiver = this.receiver.bind(this);
    this.receiveMovie = this.receiveMovie.bind(this);
    this.clearResults = this.clearResults.bind(this);
  }

  //receiver function to populate movies in state
  receiver(results) {
    movieArray.unshift(results);
    this.setState({ movies: movieArray });
    console.log(this.state.movies)
  }

  //clear current results so that more movies can be fetched
  clearResults() {
    movieArray.length = 0;
  }

  //receive user-clicked movie to set more info state variables
  receiveMovie(movieID, plot) {
    this.setState({
      ["currentMovie"]: movieID,
      ["currentInfo"]: plot
    });
  }

  //sort movies by imdbRating or Year depending on which radio button was pushed
  sortMovie(event) {
    event.preventDefault();
    this.setState({
      sortBy: event.target.name
    })

    const sorted = (event.target.name === "Rating") ? this.state.movies.sort((a, b) => {
      return b.imdbRating - a.imdbRating
    }) : this.state.movies.sort((a, b) => (parseInt(b.Year, 10) - parseInt(a.Year, 10))
    )

    this.setState({
      sortBy: ""
    })
  }

  render() {
    // const display = (this.state.currentMovie != "") ? <Info currentMovie={this.state.currentMovie} currentInfo={this.state.currentInfo} /> : null;

    return (
      <div className="App">
        <div className="search__sort">
          <input
            type="radio"
            className="results__sort"
            id="results__sort"
            name="Rating"
            value={this.state.sortBy}
            onChange={this.sortMovie}
          /> Rating

        <input
            type="radio"
            className="results__sort"
            id="results__sort"
            name="Year"
            value={this.state.sortBy}
            onChange={this.sortMovie}
          /> Year
        </div>
        <div className="App__header">
        </div>



        <Search receiver={this.receiver} clearResults={this.clearResults} />
        <Results movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
