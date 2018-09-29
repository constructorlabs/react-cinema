import React from 'react';
import Search from './Search.js';
import SearchResults from './SearchResults.js';
import MovieDisplay from './MovieDisplay.js';
import Pagination from './Pagination.js';

class App extends React.Component {
  constructor(){

    super();

    this.receiveInput = this.receiveInput.bind(this)
    this.receiveSubmit = this.receiveSubmit.bind(this)
    this.receiveFocus = this.receiveFocus.bind(this)
    this.receiveBlur = this.receiveBlur.bind(this)
    this.getQueriedMovies = this.getQueriedMovies.bind(this)
    this.receiveMovieID = this.receiveMovieID.bind(this)
    this.displayCurrentMovie = this.displayCurrentMovie.bind(this)
    this.receivePageNumber = this.receivePageNumber.bind(this)

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
          this.getQueriedMovies ()
        }
      }
    )
  }

  receiveSubmit () {
    this.getQueriedMovies ()
  }

  receiveFocus () {
    this.setState({ 
      searchDisplay: this.state.searchQuery.length > 0
    })
  }

  receiveBlur () {
    this.setState({ searchDisplay: false })
  }
 
  getQueriedMovies () {
    const url = `http://www.omdbapi.com/?apikey=2454706d&s=${this.state.searchQuery}&page=${this.state.currentPage}`;
    fetch(url)
    .then(response => response.json())
    .then(body => {
      this.setState({
        error: body.Error,
        searchDisplay: true,
        results: body.Search,
        pages: body.totalResults
      })
      return body;
    })
  }

  receivePageNumber (page) {
    this.setState({ 
      currentPage: page,
      searchDisplay: false,
      currentMovie: false
    }, () => {
        this.getQueriedMovies ()
    })
  }

  receiveMovieID (id) {
    this.setState({
      currentMovieID: id,
      searchDisplay: false 
    }, () => {
        this.displayCurrentMovie ()
    })
  }

  displayCurrentMovie () {
    fetch(`http://www.omdbapi.com/?apikey=2454706d&i=${this.state.currentMovieID}`)
    .then(response => response.json())
    .then(body => {
      this.setState({
        currentMovie: body
      })
      return body;
    })
  }

  render(){
    const qLength = this.state.searchQuery.length;
    let errorMsg = (this.state.error && qLength > 0) ? this.state.error : "";
    errorMsg = (qLength == 0 || qLength > 2) ? errorMsg : "Enter 3 or more letters";

    return (
      <div className="app">
        <div className="search-wrapper">

          {(this.state.pages) ? <Pagination receivePageNumber={this.receivePageNumber} pages={this.state.pages}/> : <div className="pagination"></div>}

          <Search 
            receiveInput={this.receiveInput} 
            receiveSubmit={this.receiveSubmit} 
            receiveFocus={this.receiveFocus} 
            receiveBlur={this.receiveBlur} 
          />

          {(errorMsg !== "" && this.state.searchDisplay) ?
              <div className="error">{errorMsg}</div> :
              (this.state.searchDisplay && <SearchResults searchDisplay={this.state.searchDisplay} resultsArray={this.state.results} receiveMovieID={this.receiveMovieID}/>)
          }
        
        </div>

        <div>
          {(!this.state.currentMovie) ? <div className="loading-message">Find movies quickly and easily</div> : ""}
          {(this.state.currentMovie) && <MovieDisplay currentMovie={this.state.currentMovie}/>}
        </div>
      </div>
    )
  }
}

export default App;