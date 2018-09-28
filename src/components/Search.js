import React from 'react';

class Search extends React.Component {

  constructor() {
    super();
    this.state = {text: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({text: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.receiveSearch(this.state.text);
  }

  render() {
      return (

        <div className='search'>
          <form className='search__form' onSubmit={this.handleSubmit}>
            <div className='search__container'>
              <input className='search__input' onChange={this.handleChange} name="search" placeholder="Search..."  type="text" autoComplete="off"></input>
                <div className='search__preview'></div>
            </div>
            <button className='search__button' type="submit"><i className="search__icon fa fa-search"></i></button>
          </form>
        </div>

      );
  }


}

export default Search;