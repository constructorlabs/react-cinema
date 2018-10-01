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
      searchPage: 1,

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
    this.populateFavourites = this.populateFavourites.bind(this)

  }

  componentDidMount(){
    this.populateFavourites()



  }



  populateFavourites(){
    const faveList = JSON.parse(localStorage.getItem("favourites"))
    this.setState({
      favourites: faveList
    })
    //pretty sure this isnt the best way of doing this, but my favouritesResults was getting duplicated
    //when Homepage mounted
    this.setState({
      favouriteResults: []
    })
    //make sure we received an array in local storage before using array method to fill favouriteResults
    faveList
       ? faveList.forEach(fave => this.fetchFavourite(fave.film))
       : null
  }

  fetchFavourite(faveFilmId){
    const searchURL = `http://www.omdbapi.com/?apikey=210776d9&i=${faveFilmId}`
    fetch(searchURL)
    .then(response => response.json())
    .then(body => {
      this.setState({
        favouriteResults: this.state.favouriteResults.concat(body)
      })

    })
  }





  fetchSearchResults(searchString, page = 1){
    const searchURL = `http://www.omdbapi.com/?apikey=210776d9&s=${searchString}&page=${page}`
    fetch(searchURL)
    .then(response => response.json())
    .then(body => {
      this.setState({
        searchResults: body.Search,
        searchPage: page
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
    const currentFaves = JSON.parse(localStorage.getItem("favourites"))
    if (currentFaves){
      const newFaves = currentFaves.concat([{film: currentFilmId, lastVisit: new Date()}])
      const faveList = JSON.stringify(newFaves)
      localStorage.setItem("favourites", faveList)
    }else{
      const newFave = JSON.stringify([{film: currentFilmId, lastVisit: new Date()}])
      localStorage.setItem("favourites", newFave)
    }
    this.populateFavourites()
  }




//when user selects film from search results, search results should be hidden etc.
  toggleDisplay(element){
    this.setState({
      display: element

  })
}


  render(){
    return (
      <div className="app">
        <HeaderSearch retrieveSearchString={this.retrieveSearchString} toggleDisplay={this.toggleDisplay}/>
        {this.state.display === 'home' ? <HomePage favourites={this.state.favouriteResults} populateFavourites={this.populateFavourites} toggleDisplay={this.toggleDisplay} retrieveFilmId={this.retrieveFilmId} /> : null}
        {this.state.display === 'search' ? <SearchDisplay fetchSearchResults={this.fetchSearchResults} searchString={this.state.searchString} searchPage={this.state.searchPage} toggleDisplay={this.toggleDisplay} retrieveFilmId={this.retrieveFilmId} searchResults={this.state.searchResults} /> : null}
        {this.state.display === 'film' ? <FilmDisplay  retrieveFave={this.retrieveFave} filmDetails={this.state.currentFilm}/> : null}
      </div>
    )
  }
}

export default App;
