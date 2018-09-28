import React from 'react';
import Search from './Search.js';
import SearchResults from './SearchResults.js';

class App extends React.Component {
  constructor(){

    super();

    this.receiveInput = this.receiveInput.bind(this)
    this.receiveSubmit = this.receiveSubmit.bind(this)
    this.receiveFocus = this.receiveFocus.bind(this)
    this.receiveBlur = this.receiveBlur.bind(this)
    this.fetchMovies = this.fetchMovies.bind(this)

    this.state = {
      searchQuery: '',
      results: []
    }
  }

  receiveInput (text) {
    const min = 2;
    this.setState({
      results: text.length <= min ? [] : this.state.results,
      error: (text.length == 0 || text.length > min) ?  "" : "Enter 3 or more letters",
      searchQuery: text
    }, () => {
        if (text.length > min) { 
          this.fetchMovies ()
        }
      }
    )
  }

  receiveSubmit () {
    this.fetchMovies ()
  }

  receiveFocus () {
    if (this.state.searchQuery.length > 0) {
      this.fetchMovies ()
    }
  }

  receiveBlur () {
    console.log("blurred!")
    this.setState({
      results: []
    })
  }

  fetchMovies () {
    const baseUrl = `http://www.omdbapi.com/?apikey=2454706d&s=${this.state.searchQuery}`;
    fetch(baseUrl)
    .then(response => response.json())
    .then(body => {
      this.setState({
        error: body.Error,
        results: body.Search
      })
      return body;
    })
  }

  render(){
    return (
      <div>
        <Search 
          receiveInput={this.receiveInput} 
          receiveSubmit={this.receiveSubmit} 
          receiveFocus={this.receiveFocus} 
          receiveBlur={this.receiveBlur} 
        />
        {
          (this.state.error) ?
            <div className="error">{this.state.error}</div> :
            (this.state.results && this.state.results.length > 0 && <SearchResults resultsArray={this.state.results}/>)
        }
      </div>
    )
  }
}

export default App;