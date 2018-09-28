import React from 'react';
import Search from './Search'
import Movies from './Movies'
import MovieInfo from './MovieInfo'

class App extends React.Component {
  constructor() {
    super();

    this.state = ({
      query: 'blade',
      results: [],
      movieId: '',
      info: {}
    })

    this.receiveQuery = this.receiveQuery.bind(this);
    this.fetchMovies = this.fetchMovies.bind(this);
    this.receiveMovie = this.receiveMovie.bind(this);
  }

  componentDidMount() {
  }

  receiveQuery(query) {
    this.setState({
      query: query
    })
    this.fetchMovies(query);
  }

  receiveMovie(imdbId) {
    console.log("received movie click" + imdbId);
    this.fetchMovieInfo(imdbId);
  }

  fetchMovies(query) {
    return fetch(`http://www.omdbapi.com/?s=${query}&apiKey=f155c772`)
      .then(data => data.json())
      .then(response => {
        this.setState({
          results: response.Search
        })
      })
  }

  fetchMovieInfo(imdbId) {
    return fetch(`http://www.omdbapi.com/?i=${imdbId}&plot=full&apiKey=f155c772`)
      .then(data => data.json())
      .then(response => {
        this.setState({
          info: response
        })
      })
  }

  componentDidMount() {
    console.log('componentDidMount called');
  }

  componentWillMount(){
    // called once after component is created before first render
    console.log('componentWillMount called');
    this.fetchMovies("batman");
  }

  render() {
    console.log(this.state.info);
    return (
      <div>
        <Search receiveQuery={this.receiveQuery} />
        <MovieInfo movieObject={this.state.info}/>
        <Movies receiveMovie={this.receiveMovie} moviesArray={this.state.results} />
      </div>
    )
  }
  
}



export default App;
