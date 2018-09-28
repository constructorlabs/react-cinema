//API key: 210776d9

//http://www.omdbapi.com/?apikey=210776d9&[searchparameters]
import React from 'react';
import HeaderSearch from "./HeaderSearch.js"
import SearchDisplay from "./SearchDisplay.js"
import FilmDisplay from "./FilmDisplay.js"
import HomePage from "./HomePage.js"

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      searchString: "",
      currentFilmId: "",
      searchResults: [],
      currentFilm: {},
      display: 'home' // home, film, search

    }


    this.fetchSearchResults = this.fetchSearchResults.bind(this)
    this.retrieveSearchString = this.retrieveSearchString.bind(this)
    this.retrieveFilmId = this.retrieveFilmId.bind(this)
    this.toggleDisplay = this.toggleDisplay.bind(this)
  }

  fetchSearchResults(searchString){
    const searchURL = `http://www.omdbapi.com/?apikey=210776d9&s=${searchString}`
    fetch(searchURL)
    .then(response => response.json())
    .then(body => {
      this.setState({
        searchResults: body.Search

      })
    })
  }

  fetchFilmResults(currentFilmId){
    const searchURL = `http://www.omdbapi.com/?apikey=210776d9&i=${currentFilmId}`
    fetch(searchURL)
    .then(response => response.json())
    .then(body => {
      this.setState({
        currentFilm: body
      })
    })
  }

  retrieveSearchString(searchString){
    this.setState({
      searchString
    })
    this.fetchSearchResults(searchString)
  }

  retrieveFilmId(currentFilmId){
    this.setState({
      currentFilmId
    })
    this.fetchFilmResults(currentFilmId)
  }

//when user selects film from search results, search results should be hidden
  toggleDisplay(element){
    this.setState({
      display: element

  })
}

  render(){
    return (
      <div>
        <HeaderSearch retrieveSearchString={this.retrieveSearchString} toggleDisplay={this.toggleDisplay}/>
        {this.state.display === 'home' ? <HomePage /> : null}
        {this.state.display === 'search' ? <SearchDisplay toggleDisplay={this.toggleDisplay} retrieveFilmId={this.retrieveFilmId} searchResults={this.state.searchResults} /> : null}
        {this.state.display === 'film'? <FilmDisplay  filmDetails={this.state.currentFilm}/> : null}
      </div>
    )
  }
}

export default App;
