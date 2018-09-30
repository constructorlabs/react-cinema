import React from 'react';
import Search from './Search'
import Movies from './Movies'
import Info from './Info'
import Pagination from './Pagination'
import Favourites from './Favourites'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      query: 'blade',
      movies: [],
      movieId: '',
      info: {},
      favourites: [],
      currentPage: 1,
      totalResults: 0,
      totalPages: 0,
      pages: [1, 2, 3, 4, 5, 6]
    };

    this.receiveQuery = this.receiveQuery.bind(this);
    this.fetchMovies = this.fetchMovies.bind(this);
    this.receiveMovie = this.receiveMovie.bind(this);
    this.addFavourite = this.addFavourite.bind(this);
    this.receivePageNumber = this.receivePageNumber.bind(this);
    this.handleFavMenuClick = this.handleFavMenuClick.bind(this);
    this.handleFavMenuChange = this.handleFavMenuChange.bind(this);
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

  addFavourite(info) {
    const newFavourites = this.state.favourites.concat(info);
    this.setState({favourites: newFavourites});
    localStorage.favourites = (JSON.stringify(newFavourites));
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
    // this.fetchMovies();
    console.log("componentDidMount");
    this.setState({favourites: JSON.parse(window.localStorage.favourites)});
  }

  componentWillMount() {
    console.log("componentWillMount")
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate")
  }

  componentDidUpdate() {
    console.log("componentDidUpdate")
  }

  handleFavMenuClick() {
    console.log("handleFavMenuClick")
  }

  handleFavMenuChange() {
    console.log("handleFavMenuChange")
  }

  render() {
    console.log("render")

    return (

      <main>

        <header className="header">
          <div className="nav-bar">
            <div className="nav-bar__logo"></div>
            <h1 className="nav-bar__title">Movie Search</h1>

            <div className="nav-dropdown">
              <Favourites />
              {/* {this.props.moviesArray.map(movie => <Movie key={movie.imdbID} id={movie.imdbID} source={movie.Poster} title={movie.Title} year={movie.Year} receiveMovie={this.props.receiveMovie} />)} */}
              <div className="nav-dropdown__fav" onClick={this.handleFavMenuClick} onMouseOver={this.handleFavMenuChange}>
                <img className="nav-dropdown-icon" src="src/images/favouritesFolder.png" />
              </div>
              <div className="nav-dropdown__content">
                <h3 className="favorites-title">Favorites</h3>
                {this.state.favourites.map(favourite => <Favourites key={favourite.imdbID} id={favourite.imdbID} title={favourite.Title} year={favourite.Year} source={favourite.Poster} />)}
              </div>
            </div>

          </div>
          <Search receiveQuery={this.receiveQuery} />
        </header>

        <Info addFavourite={this.addFavourite} info={this.state.info} />

        <Movies receiveMovie={this.receiveMovie} moviesArray={this.state.movies} />

        <Pagination receivePageNumber={this.receivePageNumber} currentPage={this.state.currentPage} totalResults={this.state.totalResults} totalPages={this.state.totalPages} />

      </main>
    )
  }

}

export default App;
