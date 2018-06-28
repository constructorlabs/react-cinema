import React from "react";

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      searchMovie: "",
      pageNum: 1,
      nextMovie: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  fetchMovie() {

    let searchURL = `http://www.omdbapi.com/?s=${this.state.searchMovie}&page=${this.state.pageNum}&apikey=39d7228f`;


    // fetch matching film titles but also get more info for each match

    fetch(searchURL)
      .then(response => response.json())
      .then(results => results.Search.map(movie => {

        fetch(`http://www.omdbapi.com/?i=${movie.imdbID}&plot=short&apikey=39d7228f`)
          .then(response => response.json())
          .then(movieDetails => this.props.receiver(movieDetails))
      })).catch(error => {
        console.log("Sorry the following error occurred: ", error)
        alert("Sorry not found, try again")
      });

  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      searchMovie: event.target.value,
      nextMovie: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.clearResults();
    this.fetchMovie();
    this.setState({
      searchMovie: ""
    })
  }

  nextPage() {
    this.setState({ searchMovie: this.state.nextMovie });
    this.setState({ pageNum: this.state.pageNum + 1 }, () => this.fetchMovie());
    this.props.clearResults();

  }

  prevPage() {

    this.setState({ pageNum: this.state.pageNum - 1 }, () => this.fetchMovie())
    this.props.clearResults();
  }

  render() {
    return (
      <form className="search__form" id="search__form" onSubmit={this.handleSubmit}>

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

        <a href="#" onClick={this.prevPage}> {this.state.searchMovie !== "" ? "<<" : ""} </a>
        {this.state.searchMovie !== "" ? `Page ${this.state.pageNum}` : ""}
        <a href="#" onClick={this.nextPage}> {this.state.nextMovie !== "" ? ">>" : ""}</a>

      </form >
    );
  }
}
export default Search;
