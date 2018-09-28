//API key: 210776d9

//http://www.omdbapi.com/?apikey=210776d9&[searchparameters]


import React from 'react';
import HeaderSearch from "./HeaderSearch.js"
import SearchDisplay from "./SearchDisplay.js"
import FilmDisplay from "./FilmDisplay.js"

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      searchString: "",
      currentFilmId: "",
      searchResults: [],
      currentFilm: {}
    }


    this.fetchSearchResults = this.fetchSearchResults.bind(this)
    this.retrieveSearchString = this.retrieveSearchString.bind(this)
    this.retrieveFilmId = this.retrieveFilmId.bind(this)
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

  render(){
    return (
      <div>
        <HeaderSearch retrieveSearchString={this.retrieveSearchString} />
        <SearchDisplay retrieveFilmId={this.retrieveFilmId} searchResults={this.state.searchResults} />
        <FilmDisplay filmDetails={this.state.currentFilm}/>
      </div>
    )
  }
}

export default App;
