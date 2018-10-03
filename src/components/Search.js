import React from "react";

class Search extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="search">
        <form onSubmit={this.props.onSubmit}>
          <input
            type="text"
            onChange={this.props.handleChange}
            value={this.props.inputText}
            className="search__input"
            id="search-tf"
            placeholder="Enter film name"
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Search;
