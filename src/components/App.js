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
      baseURL: 'http://www.omdbapi.com/?apikey=2454706d',
      searchQuery: '',
      searchDisplay: false,
      results: [],
      error: '',
      currentMovie: false,
      currentPage: '',
      pages: ''
    }
  }

  // receive user input from Search component
  receiveInput (text) {
    this.setState({
      searchQuery: text,
      searchDisplay: text.length > 0
    }, () => {
        if (text.length > 2) { 
          this.getQueriedMovies ()
        }
      })
  }

  // receive form submission from Search component
  receiveSubmit () {
    this.getQueriedMovies ()
  }

  // receive focus event from Search component
  receiveFocus () {
    this.setState({ searchDisplay: this.state.searchQuery.length > 0})
  }

  // receive blur event from Search component
  receiveBlur () {
    this.setState({ searchDisplay: false })
  }

  // fetch movie data from API for searchQuery
  getQueriedMovies () {
    const url = `${this.state.baseURL}&s=${this.state.searchQuery}&page=${this.state.currentPage}`;
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

  // receive currentPage from Pagination component
  receivePageNumber (page) {
    this.setState({ 
      currentPage: page,
      searchDisplay: false,
      currentMovie: false
    }, () => {
        this.getQueriedMovies ()
    })
  }

  // receive currentMovieID from SearchResults component
  receiveMovieID (id) {
    this.setState({
      currentMovieID: id,
      searchDisplay: false 
    }, () => {
        this.displayCurrentMovie ()
    })
  }

  // fetch movie data from API for currentMovieID
  displayCurrentMovie () {
    fetch(`${this.state.baseURL}&i=${this.state.currentMovieID}`)
    .then(response => response.json())
    .then(body => {
      this.setState({
        currentMovie: body
      })
      return body;
    })
  }

  render(){

    /* set message for errors and invalid input */
    const qLength = this.state.searchQuery.length;
    let errorMsg = (this.state.error && qLength > 0) ? this.state.error : "";
    errorMsg = (qLength == 0 || qLength > 2) ? errorMsg : "Enter 3 or more letters";

    return (
      <div className="app">
        <div className="search-wrapper">

          { /* render Pagination component for 10 or more total pages */ }
          {(this.state.pages > 10 && qLength > 2) ? 
          <Pagination 
            receivePageNumber={this.receivePageNumber} 
            pages={this.state.pages}
          /> : 
            <div className="pagination"></div>
          }

          { /* render Search component */ }
          <Search 
            receiveInput={this.receiveInput} 
            receiveSubmit={this.receiveSubmit} 
            receiveFocus={this.receiveFocus} 
            receiveBlur={this.receiveBlur} 
          />

          { /* render message for errors and invalid input or SearchResults component */ }
          {(errorMsg !== "" && this.state.searchDisplay) ?
            <div className="error">{errorMsg}</div> :
            (this.state.searchDisplay && 
            <SearchResults 
              searchDisplay={this.state.searchDisplay} 
              resultsArray={this.state.results} 
              receiveMovieID={this.receiveMovieID}
            />)
          }
        
        </div>

        <div>

          { /* if a movie has NOT been selected render a loading message */ }
          {(!this.state.currentMovie) ? 
            <div className="loading-message">Find movies quickly and easily</div> : ""
          }
          
          {/* if a movie has been selected render MovieDisplay component */}
          {(this.state.currentMovie) && <MovieDisplay currentMovie={this.state.currentMovie}/>}

        </div>
      </div>
    )
  }
}

export default App;