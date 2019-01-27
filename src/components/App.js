import React from 'react';
import Search from './Search.js';
import SearchResults from './SearchResults.js';
import MovieDisplay from './MovieDisplay.js';
import Pagination from './Pagination.js';

class App extends React.Component {
  constructor(props){

    super(props);

    this.receiveInput = this.receiveInput.bind(this);
    this.receiveSubmit = this.receiveSubmit.bind(this);
    this.receiveFocus = this.receiveFocus.bind(this);
    this.receiveBlur = this.receiveBlur.bind(this);
    this.getQueriedMovies = this.getQueriedMovies.bind(this);
    this.receiveMovieID = this.receiveMovieID.bind(this);
    this.displayCurrentMovie = this.displayCurrentMovie.bind(this);
    this.receivePageNumber = this.receivePageNumber.bind(this);
        
    this.state = {
      baseURL: `//www.omdbapi.com/?apikey=${process.env.API_KEY}`,
      searchQuery: '',
      searchDisplay: 'blurred',
      results: [],
      error: '',
      currentMovie: false,
      currentPage: '',
      pages: 1,
    }
  }

  // receive user input from Search component
  receiveInput (text) {
    this.setState({
      searchQuery: text,
      searchDisplay: 'focused'
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
    this.setState({ searchDisplay: 'focused'})
  }

  // receive blur event from Search component
  receiveBlur () {
    this.setState({ searchDisplay: 'blurred' })
  }

  // fetch movie data from API for searchQuery
  getQueriedMovies () {
    console.log(process.env);
    const url = `${this.state.baseURL}&s=${this.state.searchQuery}&page=${this.state.currentPage}`;
    fetch(url)
    .then(response => response.json())
    .then(body => {
      this.setState({
        error: body.Error,
        searchDisplay: 'focused',
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
      searchDisplay: 'blurred',
      currentMovie: false
    }, () => {
        this.getQueriedMovies ()
    })
  }

  // receive currentMovieID from SearchResults component
  receiveMovieID (id) {
    this.setState({
      currentMovieID: id,
      searchDisplay: 'blurred'
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

    // Rather than storing searchDisplay in state, 
    // it might be better to compute it in the render method as it's a derived property 
    // which depends on the searchQuery value.

    /* set message for errors and invalid input */
    const qLength = this.state.searchQuery.length;
    let errorMsg = (this.state.error && qLength > 0) ? this.state.error : "";
    errorMsg = (qLength == 0 || qLength > 2) ? errorMsg : "Enter 3 or more letters";

    const searchDisplayOn = (this.state.searchDisplay === 'focused') && (this.state.searchQuery.length > 0)

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

          { /* render message for errors or invalid input for SearchResults component */ }
          {(errorMsg !== "" && searchDisplayOn) ?
            <div className="error">{errorMsg}</div> :
            (searchDisplayOn && 
            <SearchResults 
              searchDisplay={searchDisplayOn} 
              resultsArray={this.state.results} 
              receiveMovieID={this.receiveMovieID}
            />)
          }
        
        </div>

        <div>

          { /* if a movie has NOT been selected render a loading message */ }
          {(this.state.searchQuery === "") ? 
            <div className="loading-message">Find movies quickly and easily</div> : ""
          }
          
          {/* if a movie has been selected render MovieDisplay component */}
          {(this.state.searchQuery !== "") && <MovieDisplay currentMovie={this.state.currentMovie}/>}

        </div>

      </div>
    )
  }
}

export default App;