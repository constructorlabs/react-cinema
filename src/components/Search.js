import React from 'react';

class Search extends React.Component {
  constructor(){
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();

    this.props.handleSearchSubmit();
  }

  handleChange(event){
    this.props.handleSearchChange(event.target.value);
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} />
        <button type="submit">Search</button>
      </form>
    )
  }
}

export default Search;
