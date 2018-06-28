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
    this.setState({ movies: results });
    // movieArray.push(results)
    // this.setState({ movies: movieArray });
    console.log("Inside App - this.state.movies",this.state.movies);
  }
  receiveMovie(movieID, plot) {
    this.setState({
      ["currentMovie"]: movieID,
      ["currentInfo"]: plot
    });

   
  }

  render() {
    // const newSearch =
    //   this.state.movies !== [] ? <Results movies={this.state.movies} receiveMovie={this.receiveMovie}
    //   currentMovie={this.state.currentMovie}/> : alert("Sorry no films found");
    // console.log("hello", this.state.currentMovie, this.state.currentInfo)

    // const display = (this.state.currentMovie != "") ? <Info currentMovie={this.state.currentMovie} currentInfo={this.state.currentInfo} /> : null;
    console.log("inside render ",this.state.movies)

    return (
      <div className="App">
        <div className="App__header">
        {/* Movies Right Now */}
        </div>
        <Search receiver={this.receiver} />
        {/* {newSearch} */}

        <Results movies={this.state.movies} receiveMovie={this.receiveMovie}
          currentMovie={this.state.currentMovie} />
        {/* <Info movies={this.state.movies} currentMovie={this.state.currentMovie} /> */}
        {/* {display} */}
      </div>
        
    );
  }
}

export default App;
