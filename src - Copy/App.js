import React from "react";
import Search from "./Search";
import Results from "./Results";
// import Result from "./Result";
let counter = 0;
let movieArray = [];
class App extends React.Component {
  constructor() {
    super();

    // may need to pass in props

    this.state = {
      movies: []
    };

    this.receiver = this.receiver.bind(this);
  }

  receiver(results) {
    // console.log(results)
    movieArray.push(results)
    this.setState({ movies: movieArray });
    console.log(this.state.movies);
  }

  render() {
    // const newSearch =
    //   this.state.movies !== [] ? <Results movies={this.state.movies} /> : null;

    return (
      <div className="App">
        <div className="search">
          {/* <h1>Movies Right Now</h1> */}

          <Search receiver={this.receiver} />
        </div>
        <Results movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
