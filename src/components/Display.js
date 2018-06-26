import React from "react";
import Movies from "./Movies";
import Info from "./Info";

class Display extends React.Component {
  constructor(props) {
    super(props);

    this.state = { movieDetails: undefined };

    this.receiveMovieDetails = this.receiveMovieDetails.bind(this);
    this.moreMovies = this.moreMovies.bind(this);
  }

  receiveMovieDetails(movieDetails) {
    this.setState({
      movieDetails
    });
  }

  moreMovies() {
    this.props.nextPage();
  }

  render() {
    return (
      <div className="main">
        <div className="movies">
          <button onClick={this.moreMovies} className='more-movies__button'>More movies</button>
          {this.props.movies.map(item => {
            return (
              <Movies
                key={item.imdbID}
                movie={item}
                receiveMovieDetails={this.receiveMovieDetails}
              />
            );
          })}
        </div>
        <div className="info">
          {this.state.movieDetails ? (
            <Info movieDetails={this.state.movieDetails} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Display;