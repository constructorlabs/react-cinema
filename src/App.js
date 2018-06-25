import React from "react";
import Search from "./components/Search";
import MovieResults from "./components/MovieResults";
import Info from "./components/Info";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      moreInfo: []
    };

    this.getMovies = this.getMovies.bind(this);
    this.getMoreInfo = this.getMoreInfo.bind(this);
    this.hideInfo = this.hideInfo.bind(this);
  }

  getMovies(result) {
    this.setState({
      movies: result
    });
  }

  getMoreInfo(result) {
    this.setState({
      moreInfo: result
    });
  }

  hideInfo() {
    this.setState({
      moreInfo: ""
    });
  }

  render() {
    return (
      <div className="background">
        <Search getMovies={this.getMovies} hideInfo={this.hideInfo} />
        <MovieResults
          movies={this.state.movies}
          getMoreInfo={this.getMoreInfo}
        />
        {this.state.moreInfo === "" ? null : (
          <Info moreInfo={this.state.moreInfo} />
        )}
        {/* <Info moreInfo={this.state.moreInfo} /> */}
      </div>
    );
  }
}

export default App;
