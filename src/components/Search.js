import React from "react";

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      query: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      query: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.receiveQuery(this.state.query);
    document.querySelector(".search__input").value = "";
  }

  render() {
    return (
      <form class={this.props.className} onSubmit={this.handleSubmit}>
        <input
          className="search__input"
          type="text"
          placeholder="Search for Movies..."
          onChange={this.handleChange}
        />
        <button className="search__btn" type="submit">
          <i class="fas fa-search" />
        </button>
      </form>
    );
  }
}

export default Search;
