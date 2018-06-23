import React from "react";

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      type: "",

      movies: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    
    this.setState({ type: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
   
    fetch(`http://www.omdbapi.com/?s=${this.state.type}&apikey=40ce55c`)
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        this.props.moviesReceiver(data.Search);
      });
  }

  render() {
    return (
      <div className="container">
        <form className="search" onSubmit={this.handleSubmit}>
          <label className="search__label">Movie</label>
          <input
            className="search__input"
            name="movie"
            onChange={this.handleChange}
            value={this.state.type}
            placeholder="Enter a movie name"
            autoComplete="movie"
          />
          <button className="btn search__btn"> Go </button>
        </form>
      </div>
    );
  }
}

export default Search;
