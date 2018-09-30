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

  componentWillMount() {
    let favObject = JSON.parse(localStorage.getItem('reactFavourites'))

    if (favObject) {
      this.setState({
        favouritesObject : favObject
      })
    }
    else {
      console.log(false)
      console.log(this.state.favouritesObject)
    }
  }

  componentDidMount() {
    this.updateFavouritesArray();
  }


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

  receiveQuery(query) {
    this.setState({
      query: query,
      page: 1
    },this.fetchResults)
  }


  receiveMovie(selectedMovie) {
    this.setState({
      selectedMovie:selectedMovie
    })
  }

  receiveMoreMovies() {
    this.setState({
      page:this.state.page+1
    },this.fetchResults)

  }

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

  showFavourites() {
    this.setState({
      results:this.state.favouritesArray
    })
  }

  render(){
    return (
      <div className="app">
        <div className="search">
          <div className="search__inner-div">
            <Search receiveQuery={this.receiveQuery}/>
            <h1 onClick={this.showFavourites}>Favourites - {this.state.favouritesLength} - </h1>
            <h1>PHLX</h1>
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
