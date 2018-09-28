import React from 'react';

class Search extends React.Component{
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
    }


  handleChange(event){
    this.props.receiveSearchInput(event.target.value)
    //console.log(event.target.value)
    //receiveSearchInput(event.)
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.fetchMovies();
  }

  render(){

    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text"  onChange={this.handleChange} value={this.props.keyWord}/>
        <button>Search</button>
      </form>

    )
  }

}

export default Search;
