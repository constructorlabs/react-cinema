import React from 'react';
import Search from './Search.js';
import SearchResults from './SearchResults.js';

class App extends React.Component {
  constructor(){
    super();
    this.receiveInput = this.receiveInput.bind(this)
    this.receiveSubmit = this.receiveSubmit.bind(this)
    this.fetchMovies = this.fetchMovies.bind(this)
  }

  receiveInput (text) {
    if (text.length > 2) { 
      this.fetchMovies (text);
    }
  }

  receiveSubmit (text) {
    this.fetchMovies (text);
  }

  fetchMovies (query) {
    const baseUrl = `http://www.omdbapi.com/?apikey=2454706d&s=${query}`;
    fetch(baseUrl)
    .then(response => response.json())
    .then(body => {
      console.log(body);
      return body;
    })
  }

  render(){
    return (
      <div>
        <Search receiveSubmit={this.receiveSubmit} receiveInput={this.receiveInput} />
        <SearchResults />
      </div>
    )
  }
}

export default App;
