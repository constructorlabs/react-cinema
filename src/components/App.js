import React from 'react';
import Search from './Search.js';
import SearchResults from './SearchResults.js';

class App extends React.Component {
  constructor(){
    super();
    this.receiveInput = this.receiveInput.bind(this)
    this.receiveSubmit = this.receiveSubmit.bind(this)
    this.fetchMovies = this.fetchMovies.bind(this)
    // this.receiveResults = this.receiveResults.bind(this)

    this.state = {
      searchQuery: '',
      results: []
    }

  }

  receiveInput (text) {
    this.setState({
      searchQuery: text
    })
    if (text.length > 2) { 
      // this.fetchMovies (text);
    }
  }

  receiveSubmit () {
    this.fetchMovies ();
  }

  // receiveResults () {
  //   console.log(`receiveResults: ${this.state.results}`);
  // }

  fetchMovies () {
    const baseUrl = `http://www.omdbapi.com/?apikey=2454706d&s=${this.state.searchQuery}`;
    fetch(baseUrl)
    .then(response => response.json())
    .then(body => {
      console.log(body.Search)
      this.setState({
        results: body.Search
      })
      return body;
    })
  }

  render(){
    return (
      <div>
        <Search receiveSubmit={this.receiveSubmit} receiveInput={this.receiveInput} />
        {this.state.results.length > 0 && <SearchResults resultsArray={this.state.results}/>}
      </div>
    )
  }
}

export default App;
