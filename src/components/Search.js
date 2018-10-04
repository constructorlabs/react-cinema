import React from 'react';

class Search extends React.Component {
  constructor(){
    super();

    this.state = {
      searchQuery: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.receivePaginationQuery = this.receivePaginationQuery.bind(this);

  }

handleChange(event){
  this.setState({
    searchQuery: event.target.value
  })
  let searchEntry = event.target.value
  if (searchEntry.length > 2){
    handleSubmit(event)
  }
}

handleSubmit(event){
  event.preventDefault();
  this.props.receiveVideoBlock();
  this.props.submittedSearchQuery(this.state.searchQuery);
}
//could directly call apiCall

receivePaginationQuery(){
  this.props.receivePaginationQuery();
}

  render(){
    return(
      <form className="searchForm" onSubmit={this.handleSubmit}>
        <input placeholder="Enter your search terms here" onChange={this.handleChange}/>
        <button>Search</button><input onClick={this.receivePaginationQuery} className="next" type="button" value="Next 20 Results"/ >
      </form>
    )
  }

}

export default Search;
