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
      currentInfo: ""
    };

    this.receiver = this.receiver.bind(this);
    this.receiveMovie = this.receiveMovie.bind(this);
    this.clearResults = this.clearResults.bind(this);
  }

  receiver(results) {
    movieArray.unshift(results);
    this.setState({ movies: movieArray });
  }

  clearResults() {
    movieArray.length = 0;
  }

  receiveMovie(movieID, plot) {
    this.setState({
      ["currentMovie"]: movieID,
      ["currentInfo"]: plot
    });
  }

  render() {
    // const newSearch =
    //   this.state.movies !== [] ? <Results movies={this.state.movies} /> : null;
    console.log(this.state.movies)
    const display = (this.state.currentMovie != "") ? <Info currentMovie={this.state.currentMovie} currentInfo={this.state.currentInfo} /> : null;

    return (
      <div className="App">
        <div className="App__header">
        </div>
        <Search receiver={this.receiver} clearResults={this.clearResults} />

        <Results movies={this.state.movies} receiveMovie={this.receiveMovie}
          currentMovie={this.state.currentMovie} />

        {/* <Info movies={this.state.movies} currentMovie={this.state.currentMovie} /> */}
        {display}
      </div>
    );
  }
}

export default App;
