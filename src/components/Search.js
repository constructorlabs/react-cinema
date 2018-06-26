import React from "react";

class Search extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.props.receiveQuery(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.search();
  }

  render() {
    return (
      <div className='search'>
        <form onSubmit={this.handleSubmit} className='search__form'>
          <label>
            <input
              value={this.props.query}
              onChange={this.handleChange}
            />
          </label>
          <button className='search__button'>Search Film</button>
        </form>
      </div>
    );
  }
}

export default Search;