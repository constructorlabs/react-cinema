import React from "react";
import Search from "./Search";
import Results from "./Results";
import Info from "./Info";
// import Result from "./Result";

let counter = 0;
let movieArray = [];
class App extends React.Component {
  constructor(props) {
    super();

    // may need to pass in props

    this.state = {
      movies: [],
      currentMovie: "",
      currentInfo: ""
    };

    this.receiver = this.receiver.bind(this);
    this.receiveMovie = this.receiveMovie.bind(this);

  }
  receiver(results) {
    // console.log(results)
    movieArray.push(results)
    this.setState({ movies: movieArray });
    // console.log(this.state.movies);
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
    console.log("hello", this.state.currentMovie, this.state.currentInfo)

    const display = (this.state.currentMovie != "") ? <Info currentMovie={this.state.currentMovie} currentInfo={this.state.currentInfo} /> : null;

    return (
      <div className="App">
        <div className="search">
          <h1>Movies Right Now</h1>

          <Search receiver={this.receiver} />
        </div>
        <Results movies={this.state.movies} receiveMovie={this.receiveMovie}
          currentMovie={this.state.currentMovie} />
        {/* <Info movies={this.state.movies} currentMovie={this.state.currentMovie} /> */}
        {display}
      </div>
    );
  }
}

export default App;
