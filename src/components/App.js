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
      query: '',
      movies: [],
      movieId: '',
      info: {},
      favourites: [],
      currentPage: 1,
      totalResults: 0,
      totalPages: 0,
      pages: [1, 2, 3, 4, 5, 6],
      movieIsFav: false,
      renderInfo: false,
      loading: true
    };

    this.receiveQuery = this.receiveQuery.bind(this);
    this.fetchMovies = this.fetchMovies.bind(this);
    this.receiveMovie = this.receiveMovie.bind(this);
    this.toggleFavourite = this.toggleFavourite.bind(this);
    this.receivePageNumber = this.receivePageNumber.bind(this);
    this.handleFavMenuClick = this.handleFavMenuClick.bind(this);
    this.handleFavMenuChange = this.handleFavMenuChange.bind(this);
    this.deleteFavourite = this.deleteFavourite.bind(this);
  }

  receiveQuery(query) {
    this.setState({
      query: query,
      currentPage: 1,
      renderInfo: false,
      loading: true
    }, this.fetchMovies)

  }

  receiveMovie(imdbId) {
    this.fetchInfo(imdbId);
    if (this.state.favourites.find(favourite => favourite.imdbID === imdbId)) {
      this.setState({ movieIsFav: true, renderInfo: true })
    } else {
      this.setState({ movieIsFav: false, renderInfo: true })
    }

  }

  toggleFavourite(info) {

    if (this.state.movieIsFav === false) {
      const newFavourites = this.state.favourites.concat(info);
      this.setState({ favourites: newFavourites, movieIsFav: true });
      localStorage.favourites = (JSON.stringify(newFavourites));
    } else {
      const newFavourites = this.state.favourites.filter(favourite => info.imdbID !== favourite.imdbID)
      this.setState({ favourites: newFavourites, movieIsFav: false });
      localStorage.favourites = (JSON.stringify(newFavourites));
    }
  }

  deleteFavourite(imdbId) {
    const newFavourites = this.state.favourites.filter(favourite => imdbId.imdbID !== favourite.imdbID)
    this.setState({ favourites: newFavourites, movieIsFav: false });
    localStorage.favourites = (JSON.stringify(newFavourites));
  }

  receivePageNumber(pageNum) {
    this.setState({
      currentPage: pageNum
    }, () => this.fetchMovies())

  }

  fetchMovies(query) {
    return fetch(`http://www.omdbapi.com/?s=${this.state.query}&page=${this.state.currentPage}&apiKey=f155c772`)
      .then(data => data.json())
      .then(response => {
        this.setState({
          movies: response.Search,
          totalResults: response.totalResults,
          totalPages: Math.ceil(response.totalResults / 10),
          loading: false
        })
      })
      .catch(error => {
        console.log(error);
      });
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
    if (window.localStorage.favourites) {
      this.setState({ favourites: JSON.parse(window.localStorage.favourites) });
    }
  }


  render() {
    // console.log("render")


    return (

      <main>

        <header className="header">
          <div className="nav-bar">
            <div className="nav-bar__logo"></div>
            <h1 className="nav-bar__title">Movie Search</h1>

            <div className="nav-dropdown">
              <div className="nav-dropdown__fav" onClick={this.handleFavMenuClick} onMouseOver={this.handleFavMenuChange}>
                <img className="nav-dropdown-icon" src="src/images/favouritesFolder.png" />
              </div>
              <div className="fav_menu">
                <h3 className="fav-menu__title">My Favourites</h3>
                {this.state.favourites.map(favourite => <Favourites key={favourite.imdbID} id={favourite.imdbID} favourite={favourite} deleteFavourite={this.deleteFavourite} />)}
              </div>
            </div>

          </div>
          <Search receiveQuery={this.receiveQuery} />
        </header>

        {!this.state.renderInfo ? null : <Info toggleFavourite={this.toggleFavourite} info={this.state.info} favourites={this.state.favourites} movieIsFav={this.state.movieIsFav} />}
        {/* {this.state.loading ? (console.log("still loading")) : <Movies receiveMovie={this.receiveMovie} moviesArray={this.state.movies} />} */}
        {this.state.loading === undefined ? console.log("movies is loading") : <Movies receiveMovie={this.receiveMovie} moviesArray={this.state.movies} />}
        {/* {console.log("loadingStatus" + this.state.loading)} */}
        <Pagination receivePageNumber={this.receivePageNumber} currentPage={this.state.currentPage} totalResults={this.state.totalResults} totalPages={this.state.totalPages} />

      </main>

    )
  }

}
export default App;
