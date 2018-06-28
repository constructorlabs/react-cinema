import React from "react";

class Search extends React.Component {
  constructor() {
    super();

    this.state = { searchMovie: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);
  }
  // hardcode pageNum for now - to be implemented at a later date
  fetchMovie() {
    let pageNum = 1;
    let searchURL = `http://www.omdbapi.com/?s=${this.state.searchMovie}&page=${pageNum}&apikey=39d7228f`;

    // fetch matching film titles but also get more info for each match
    fetch(searchURL)
      .then(response => response.json())
      .then(results => results.Search.map(movie => {
        // console.log("in search first fetch mapping over ", movie);
        fetch(`http://www.omdbapi.com/?i=${movie.imdbID}&plot=short&apikey=39d7228f`)
          .then(response => response.json())
          .then(movieDetails => this.props.receiver(movieDetails))
      }));

    this.setState({
      searchMovie: ""
    });
  }

  // set state of current movie search
  handleChange(event) {
    event.preventDefault();
    this.setState({
      searchMovie: event.target.value
    });
  }

  // call fetch on enter/click
  handleSubmit(event) {
    event.preventDefault();
    this.fetchMovie();
    
  }

  render() {
    return (
      <form id="search__form" onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          type="text"
          className="search__text"
          id="search__text"
          autoComplete="off"
          value={this.state.searchMovie}
          placeholder="Enter title search"
        />
        <button
          type="submit"
          className="search__button"
          id="search__button"
          value="Search"
        > Search
         </button>
      </form >
    );
  }
}
export default Search;
