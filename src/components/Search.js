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
        <div className="search">
        <a href="./"><h1>Quelle Films</h1></a>

        {/* <h1>Quelle Films</h1> */}
        <form onSubmit={this.handleSubmit} className="search__wrapper" id="search">
          <input onChange={this.handleChange} className="search__input" name="search" placeholder="Just returning videotapes" />
          <button className="search__btn">Go</button>
        </form>
      </div>
    )
  }
}



export default Search;