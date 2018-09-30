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
      favouritesObject: {test:123}
    }

    this.receiveQuery = this.receiveQuery.bind(this);
    this.receiveFavourite = this.receiveFavourite.bind(this);
    this.receiveMovie = this.receiveMovie.bind(this);
    this.receiveMoreMovies = this.receiveMoreMovies.bind(this);
    this.createUrl = this.createUrl.bind(this);
    this.fetchResults = this.fetchResults.bind(this);
  }

  // componentWillMount() {
  //   this.setState({
  //     favouritesObject : JSON.parse(localStorage.getItem('reactFavourites'))
  //   })
     


      // this.setState({
      //   favouritesArray : object.Keys(favouritesObject).map(key => favouritesObject[key])
      // })
    // }



  // builds the url for omdb api request
  createUrl(typeOfSearch, search) {
    const baseURL = "http://www.omdbapi.com/";
    const apiKey = "95869d44";
    const page = this.state.page;
    console.log(`${baseURL}?apikey=${apiKey}&${typeOfSearch}=${search}&page=${page}&type=movie`)
    return `${baseURL}?apikey=${apiKey}&${typeOfSearch}=${search}&page=${page}&type=movie`
}

  fetchResults() {
    fetch(this.createUrl('s', this.state.query)).
      then(response => response.json()).
      then(body => {
        console.log(body)
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
    console.log('hello' + query);
  }


  receiveMovie(selectedMovie) {
    this.setState({
      selectedMovie:selectedMovie
    })
    console.log('ffff' + selectedMovie)
  }

  receiveMoreMovies() {
    this.setState({
      page:this.state.page+1
    },this.fetchResults)

  }

  receiveFavourite(result) {
    const favObject = this.state.favouritesObject
    if (favObject.hasOwnProperty(result.imdbID)) {
      console.log('delete');
      console.log(favObject)
      console.log(result.imdbID)
      delete favObject[result.imdbID]
    } else {
      favObject[result.imdbID] = result
      console.log('add')
    }
    this.setState({
      favouritesObject:favObject
    })
  }

  render(){
    return (
      <div className="app">
        <div className="search">
          <div className="search__inner-div">
            <Search receiveQuery={this.receiveQuery}/>
            <h1>PHLX</h1>
          </div>
        </div>
        <div className="container">
         <Results selectedMovie={this.state.selectedMovie} receiveMovie={this.receiveMovie} receiveMoreMovies={this.receiveMoreMovies} results={this.state.results} resultsLeft={this.state.resultsLeft} receiveFavourite={this.receiveFavourite}/>
        </div>
      </div>
    )
  }
}

export default App;
