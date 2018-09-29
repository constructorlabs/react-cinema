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
      searchResults: [],

      currentFilmId: "",
      currentFilm: {},

      favourites: [],
      favouriteResults: [],


      display: 'home' // home, film, search

    }


    this.fetchSearchResults = this.fetchSearchResults.bind(this)
    this.retrieveSearchString = this.retrieveSearchString.bind(this)
    this.retrieveFilmId = this.retrieveFilmId.bind(this)
    this.toggleDisplay = this.toggleDisplay.bind(this)
    this.retrieveFave = this.retrieveFave.bind(this)
    this.fetchFavourite = this.fetchFavourite.bind(this)
  }

  componentDidMount(){
    const faveList = JSON.parse(localStorage.getItem("favourites"))
    this.setState({
      favourites: faveList
    })
    faveList.forEach(fave => this.fetchFavourite(fave))

  }

//not sure if this is the best way to do this, but was running into async issues when pushing to  otherwise
//currently this is sending to localstorage everytime state is updated (which is alot)
  componentDidUpdate(){
    const faveList = JSON.stringify(this.state.favourites)
    localStorage.setItem("favourites", faveList)

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

  fetchFavourite(faveFilmId){
    const searchURL = `http://www.omdbapi.com/?apikey=210776d9&i=${faveFilmId}`
    fetch(searchURL)
    .then(response => response.json())
    .then(body => {
      console.log(body)
      this.setState({
        favouriteResults: this.state.favouriteResults.concat(body)
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

  retrieveFave(currentFilmId){
    this.setState({
      favourites: this.state.favourites.concat(currentFilmId)
    })
  }

//when user selects film from search results, search results should be hidden
  toggleDisplay(element){
    this.setState({
      display: element

  })
}

  render(){
    return (
      <div className="app">
        <HeaderSearch retrieveSearchString={this.retrieveSearchString} toggleDisplay={this.toggleDisplay}/>
        {this.state.display === 'home' ? <HomePage favourites={this.state.favouriteResults} toggleDisplay={this.toggleDisplay} retrieveFilmId={this.retrieveFilmId} /> : null}
        {this.state.display === 'search' ? <SearchDisplay toggleDisplay={this.toggleDisplay} retrieveFilmId={this.retrieveFilmId} searchResults={this.state.searchResults} /> : null}
        {this.state.display === 'film' ? <FilmDisplay  retrieveFave={this.retrieveFave} filmDetails={this.state.currentFilm}/> : null}
      </div>
    )
  }
}

export default App;
