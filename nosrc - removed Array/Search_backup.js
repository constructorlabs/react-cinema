import React from "react";

class Search extends React.Component {
  constructor() {
    super();

    this.state = { searchMovie: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  fetchMovie() {
    let pageNum = 1;
    let searchURL = `http://www.omdbapi.com/?s=${
      this.state.searchMovie
      }&page=${pageNum}&apikey=39d7228f`;
    // console.log(searchURL);

    fetch(searchURL)
      .then(response => response.json())
      .then(movieData => {
        this.props.receiver(movieData);
        // console.log(movieData);
      });
  }


  handleChange(event) {
    event.preventDefault();
    this.setState({
      searchMovie: event.target.value
    });
  }

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
        />
        <button
          type="submit"
          className="search__button"
          id="search__button"
          value="Search"
        >
          Search
        </button>
      </form>
    );
  }
}
export default Search;
