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
      searchDisplay: false,
      results: []
    }
  }

  receiveInput (text) {
    this.setState({
      searchQuery: text,
      searchDisplay: text.length > 0
    }, () => {
        if (text.length > 2) { 
          this.fetchMovies ()
        }
      }
    )
  }

  receiveSubmit () {
    this.fetchMovies ()
  }

  receiveFocus () {
    this.setState({ 
      searchDisplay: this.state.searchQuery.length > 0
    })
  }

  receiveBlur () {
    this.setState({ searchDisplay: false })
  }

  fetchMovies () {
    const baseUrl = `http://www.omdbapi.com/?apikey=2454706d&s=${this.state.searchQuery}`;
    fetch(baseUrl)
    .then(response => response.json())
    .then(body => {
      this.setState({
        error: body.Error,
        searchDisplay: true,
        results: body.Search
      })
      return body;
    })
  }

  render(){
    const qLength = this.state.searchQuery.length;
    let errorMsg = (this.state.error && qLength > 0) ? this.state.error : "";
    errorMsg = (qLength == 0 || qLength > 2) ? errorMsg : "Enter 3 or more letters";

    return (
      <div>
        <Search 
          receiveInput={this.receiveInput} 
          receiveSubmit={this.receiveSubmit} 
          receiveFocus={this.receiveFocus} 
          receiveBlur={this.receiveBlur} 
        />
        {
          (errorMsg !== "" && this.state.searchDisplay) ?
            <div className="error">{errorMsg}</div> :
            (this.state.searchDisplay && <SearchResults searchDisplay={this.state.searchDisplay} resultsArray={this.state.results}/>)
        }
      </div>
    )
  }
}

export default App;