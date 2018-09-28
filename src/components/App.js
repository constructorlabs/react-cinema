import React from 'react';
import Search from './Search'
import Results from './Results'

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      query : '',
      results : [],
      selectedMovie : ''
    }

    this.receiveQuery = this.receiveQuery.bind(this);
    this.receiveMovie = this.receiveMovie.bind(this);
    this.createUrl = this.createUrl.bind(this);
    this.fetchResults = this.fetchResults.bind(this);
  }

  // builds the url for omdb api request
  createUrl(typeOfSearch, search) {
    const baseURL = "http://www.omdbapi.com/";
    const apiKey = "95869d44";
    const page = "1";
    console.log(`${baseURL}?apikey=${apiKey}&${typeOfSearch}=${search}&page=${page}&type=movie`)
    return `${baseURL}?apikey=${apiKey}&${typeOfSearch}=${search}&page=${page}&type=movie`
}

  fetchResults() {
    fetch(this.createUrl('s', this.state.query)).
      then(response => response.json()).
      then(body => {
        this.setState({
          results: body.Search
        })
        console.log(this.state.results);
      })
  }

  receiveQuery(query) {
    this.setState({
      query: query
    },this.fetchResults)
    console.log('hello' + query);
  }

  receiveMovie(selectedMovie) {
    this.setState({
      selectedMovie:selectedMovie
    })
    console.log(selectedMovie)
  }

  render(){
    return (
      <div className="app">
        <Search receiveQuery={this.receiveQuery}/>
        <Results selectedMovie={this.state.selectedMovie} receiveMovie={this.receiveMovie} results={this.state.results}/>
      </div>
    )
  }
}

export default App;
