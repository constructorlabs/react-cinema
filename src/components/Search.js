import React from "react";

class Search extends React.Component {
  constructor() {
    super();
    this.state = { searchTerm: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.receiveSearchTerm(event.target.firstChild.value);
    this.props.fetchMovies();
  }

  handleChange(event) {
    this.props.receiveSearchTerm(event.target.value);
  }

  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit} className="search__form">
          <input
            onChange={this.handleChange}
            placeholder="Search for a film"
            value={this.props.currentValue}
          />
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
