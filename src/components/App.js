import React from 'react';
import Search from './Search'
import Movies from './Movies'
import Info from './Info'
import Pagination from './Pagination'

class App extends React.Component {
  constructor() {
    super();

    this.state = ({
      query: 'blade',
      movies: [],
      movieId: '',
      info: {},
      favourites: [],
      currentPage: 1,
      totalResults: 0,
      totalPages: 0,
      pages: [1,2,3,4,5,6]
    })

    this.receiveQuery = this.receiveQuery.bind(this);
    this.fetchMovies = this.fetchMovies.bind(this);
    this.receiveMovie = this.receiveMovie.bind(this);
    this.receiveFavourite = this.receiveFavourite.bind(this);
    this.receivePageNumber = this.receivePageNumber.bind(this);
  }

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  receiveQuery(query) {
    this.setState({
      query: query,
      currentPage: 1
    })
    this.fetchMovies(query);
  }

  receiveMovie(imdbId) {
    this.fetchInfo(imdbId);
  }

  receiveFavourite(imdbId, title) {
    this.setState({
      favourites: this.state.favourites.concat(imdbId)

    })
    localStorage.setItem(imdbId, title);
  }

  receivePageNumber(pageNum) {
    this.setState({
      currentPage: pageNum
    }, () => this.fetchMovies())
    
  }

  fetchMovies() {
    return fetch(`http://www.omdbapi.com/?s=${this.state.query}&page=${this.state.currentPage}&apiKey=f155c772`)
      .then(data => data.json())
      .then(response => {
        this.setState({
          movies: response.Search,
          totalResults: response.totalResults,
          totalPages: Math.ceil(response.totalResults / 10)
        })
      })
  }

  fetchInfo(imdbId) {
    return fetch(`http://www.omdbapi.com/?i=${imdbId}&plot=full&apiKey=f155c772`)
      .then(data => data.json())
      .then(response => {
        this.setState({
          info: response
        })
      })
  }

  componentDidMount() {
    this.fetchMovies();
  }

  componentWillMount() {

  }

  render() {
    return (
      <div>
        <Search receiveQuery={this.receiveQuery} />
        <Info receiveFavourite={this.receiveFavourite} movieObject={this.state.info} />
        <Movies receiveMovie={this.receiveMovie} moviesArray={this.state.movies} />


        <Pagination receivePageNumber={this.receivePageNumber} currentPage={this.state.currentPage} totalResults={this.state.totalResults} totalPages={this.state.totalPages}/>
      </div>
    )
  }

}

export default App;
