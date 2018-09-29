import React from 'react';

class Search extends React.Component {
  constructor(){
    super();
    this.state={textValue:''};
    this.handleChange = this.handleChange.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this); 
  }

  handleChange(event){
      this.setState({textValue: event.target.value});
  }

  handleSubmit(event){
      event.preventDefault();
      this.props.receiveSearch(this.state.textValue);
  }

  render(){
    return (
        <div >
        <form onSubmit={this.handleSubmit} className="search" id="search">
          <input onChange={this.handleChange} className="search__input" name="search" placeholder="Beam me up Scotty" />
          <button className="btn search__btn">Go</button>
        </form>
      </div>
    )
  }
}



export default Search;