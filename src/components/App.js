import React from 'react';
import Search from './Search'
import Results from './Results'

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      query : '',
      results : [],
      selectedMovie : '',
      page: 1,
      resultsLeft:0,
      favouritesArray : [],
      favouritesLength: 0,
      favouritesObject: {test:123}
    }

    this.receiveQuery = this.receiveQuery.bind(this);
    this.receiveFavourite = this.receiveFavourite.bind(this);
    this.receiveMovie = this.receiveMovie.bind(this);
    this.receiveMoreMovies = this.receiveMoreMovies.bind(this);
    this.createUrl = this.createUrl.bind(this);
    this.fetchResults = this.fetchResults.bind(this);
    this.showFavourites = this.showFavourites.bind(this)
    this.updateFavouritesArray = this.updateFavouritesArray.bind(this)
  }

//****************************************//
// Setting up local storage - putting any existing local storage into state

  componentWillMount() {
    let favObject = JSON.parse(localStorage.getItem('reactFavourites'))

    if (favObject) {
      this.setState({
        favouritesObject : favObject
      })
    }
  }

//****************************************//
// creates an array of favourites. This is necessary to show the amount (.length) of favourites on top bar.

  componentDidMount() {
    this.updateFavouritesArray();
  }


//****************************************//
// Fetching data from omdb API

  // builds the url for omdb api request
  createUrl(typeOfSearch, search) {
    const baseURL = "http://www.omdbapi.com/";
    const apiKey = "95869d44";
    const page = this.state.page;
    return `${baseURL}?apikey=${apiKey}&${typeOfSearch}=${search}&page=${page}&type=movie`
}

  fetchResults() {
    fetch(this.createUrl('s', this.state.query)).
      then(response => response.json()).
      then(body => {
        this.state.page===1?
          (this.setState({results: body.Search})):
          (this.setState({results: this.state.results.concat(body.Search)}))
          this.setState({resultsLeft: body.totalResults-(this.state.page*10)});
        
      })
  }


//****************************************//
// Receive search query from Search componenent


  receiveQuery(query) {
    this.setState({
      query: query,
      page: 1
    },this.fetchResults)
  }

//****************************************//
// Receive selected movie from Result component

  receiveMovie(selectedMovie) {
    this.setState({
      selectedMovie:selectedMovie
    })
  }

//****************************************//
// Request to add another page of results (sent from Results component)

  receiveMoreMovies() {
    this.setState({
      page:this.state.page+1
    },this.fetchResults)

  }

//****************************************//
// Add a movie to favourites object (App state)

  receiveFavourite(result) {
    const favObject = this.state.favouritesObject
    if (favObject.hasOwnProperty(result.imdbID)) {
      delete favObject[result.imdbID]
    } else {
      favObject[result.imdbID] = result
    }
    this.setState({
      favouritesObject:favObject
    },localStorage.setItem('reactFavourites', JSON.stringify(this.state.favouritesObject)))

    this.updateFavouritesArray();
  }

//****************************************//
// Create an array of favourites from favourites object. This is used to update the App/result state which will then show favourites instead of search

  updateFavouritesArray() {
    console.log(this.state.favouritesObject)
    this.state.favouritesObject.hasOwnProperty('test')?delete this.state.favouritesObject.test:null
    const favouritesKeys = Object.keys(this.state.favouritesObject);
    this.state.favouritesArray = favouritesKeys.map(key => this.state.favouritesObject[key])
    console.log(this.state.favouritesArray);
    this.setState({
      favouritesLength:this.state.favouritesArray.length
    })
  }

//****************************************//
// By setting the state of result to the favourites array favourites will now be shown instead of search results

  showFavourites() {
    this.setState({
      results:this.state.favouritesArray,
      resultsLeft:0
    })
  }

  render(){
    return (
      <div className="app">
        <div className="top">
        <p className="top__favourites" onClick={this.showFavourites}>Favourites ({this.state.favouritesLength})</p>
          <div className="search">
            <div className="search__inner-div">
              <Search receiveQuery={this.receiveQuery}/>
              <h1>PHLX</h1>
            </div>
          </div>
        </div>

        <div className="container">

         <Results selectedMovie={this.state.selectedMovie} receiveMovie={this.receiveMovie} receiveMoreMovies={this.receiveMoreMovies} results={this.state.results} resultsLeft={this.state.resultsLeft} receiveFavourite={this.receiveFavourite} favObject={this.state.favouritesObject}/>
        </div>
      </div>
    )
  }
}

export default App;
