import React from 'react';

class Search extends React.Component {
  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault()
    this.props.receiveSubmit()
    }
  handleChange(event) {
    this.props.receiveQuery(event.target.value)   
  }
 
  render(){
    return (
    <section className="search">
        <form onSubmit={this.handleSubmit} className="search__form"  id="search">
            <input onChange={this.handleChange} className="search__input"  type='text' name="search" placeholder="Enter film title" autoComplete="search" value={this.props.query}/>
            <button className="btn search__btn">Search</button>
        </form>
    </section>
    )
  }
}

export default Search;