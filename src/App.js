import React from "react";
import Search from "./Search";
import MovieList from "./MovieList";

class App extends React.Component {
  constructor(props) {
    super();

    this.state = {
      movies: []
    };

    this.moviesReceiver = this.moviesReceiver.bind(this);
  }

  moviesReceiver(moviesArr) {
    this.setState({ movies: moviesArr });
  }

  render() {
    return (
      <div>
        <Search moviesReceiver={this.moviesReceiver} />
        <MovieList moviesResults={this.state.movies} />
      </div>
    );
  }
}

export default App;
