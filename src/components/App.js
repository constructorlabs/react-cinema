import React from 'react';
import Search from './Search';
import Results from './Results';
import Detail from './Detail';
import Favourites from './Favourites';
import cx from 'classnames';

class App extends React.Component {
  
  constructor() {
    super();
    this.state = { submittedQuery: '',
                   previewQuery: '',
                   results: [],
                   detail: '',
                   preview: [],
                   favourites: [],
                   page: 1,
                   newSearchInProgress: false,
                   nextPageFetchInProgress: false,
                   resultsDisplayed: false,
                   detailDisplayed: false,
                   favsDisplayed: false, 
                   movieNotFound: false };

    this.receiveSearch = this.receiveSearch.bind(this);
    this.getDetail = this.getDetail.bind(this);
    this.closeDetail = this.closeDetail.bind(this);
    this.addFav = this.addFav.bind(this);
    this.removeFav = this.removeFav.bind(this);
    this.handleFavMenu = this.handleFavMenu.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.receiveMovie = this.receiveMovie.bind(this);
    this.moveFavUp = this.moveFavUp.bind(this);
    this.moveFavDown = this.moveFavDown.bind(this);
  }

  componentDidMount() {
    this.setState({favourites: JSON.parse(window.localStorage.favourites)});
  }

  receiveSearch(query, type) {

    let apiQuery;

    if (type === 'results') {
      this.setState({ submittedQuery: query,
                      page: 1,
                      newSearchInProgress: true });
      apiQuery = `http://www.omdbapi.com/?apikey=eee5954b&s=${query}&type=movie`;
      this.fetchData(apiQuery, type);
    }

    else if (type === 'resultsInfinite') {
      const {nextPageFetchInProgress} = this.state;
      if (!nextPageFetchInProgress) {
        const page = this.state.page + 1;
        this.setState({ page,
                        nextPageFetchInProgress: true });
        apiQuery = `http://www.omdbapi.com/?apikey=eee5954b&s=${query}&page=${page}&type=movie`;
        this.fetchData(apiQuery, type);
      }
    }

    else if (type === 'preview') {
      this.setState({previewQuery: query}); 
      apiQuery = `http://www.omdbapi.com/?apikey=eee5954b&s=${query}&type=movie`;
      this.fetchData(apiQuery, type);
    }
  }

  receiveMovie(movie, source) {
    const apiQuery = `http://www.omdbapi.com/?apikey=eee5954b&i=${movie.imdbID}`;
    this.fetchData(apiQuery, 'detail');
    if (source === 'fromFavs') {
      setTimeout(() => this.setState({ favsDisplayed: false }), 500);
    }
  }

  fetchData(apiQuery,type) {
    fetch(apiQuery)
    .then(response => response.json())
    .then(body => {

      if (type === 'results') {
        if (body.Response === 'True') { 
          this.setState({ results: body.Search.filter(item=>item.Poster !== 'N/A'),
                          resultsDisplayed: true,
                          detailDisplayed: false,
                          newSearchInProgress: false,
                          movieNotFound: false }); }
        else {
          if (body.Error === 'Movie not found!') {
            this.setState({ movieNotFound: true });
          }
        }            
      }

      else if (type === 'resultsInfinite') {
        if (body.Response === 'True') { 
          this.setState({ results: this.state.results.concat(body.Search.filter(item=>item.Poster !== 'N/A')),
                          resultsDisplayed: true,
                          detailDisplayed: false,
                          nextPageFetchInProgress: false }); }
      }

      else if (type === 'detail') {
        if (body.Response === 'True') { 
          this.setState({ detail: body,
                          resultsDisplayed: false,
                          detailDisplayed: true,
                          movieNotFound: false }); }
      }

      else if (type === 'preview') {
        if (body.Response === 'True') {   
          this.setState({ preview: body.Search }); }
        else {
          this.setState({ preview: [] });
        }  
      }
    });
  }

  getDetail(imdbID) {
    const apiQuery = `http://www.omdbapi.com/?apikey=eee5954b&i=${imdbID}`;
    this.fetchData(apiQuery, 'detail');
  }

  closeDetail() {
    this.setState({ detailDisplayed: false,
                    resultsDisplayed: true, 
                    detail: '' });
  }

  addFav(detail) {
    const newFavList = this.state.favourites.concat([detail]);
    this.setState({favourites: newFavList});
    window.localStorage.favourites = JSON.stringify(newFavList);
  }

  removeFav(detail) {
    const newFavList = this.state.favourites.filter(item => item.imdbID !== detail.imdbID);
    this.setState({favourites: newFavList});
    window.localStorage.favourites = JSON.stringify(newFavList);
  }

  handleFavMenu(event) {
    this.setState({favsDisplayed: !this.state.favsDisplayed});
  }

  handleLogout(event) {
    this.setState({ favourites: [],
                    resultsDisplayed: false,
                    detailDisplayed: false });
    window.localStorage.favourites = JSON.stringify([]);
  }

  moveFavUp(movie) {
    const currentFavs = this.state.favourites;
    const rank = currentFavs.indexOf(movie);
    if (rank > 0) {
      currentFavs[rank] = currentFavs[rank-1];
      currentFavs[rank-1] = movie;
      this.setState({favourites: currentFavs});
      window.localStorage.favourites = JSON.stringify(currentFavs);
    }
  }

  moveFavDown(movie) {
    const currentFavs = this.state.favourites;
    const rank = currentFavs.indexOf(movie);
    if (rank < currentFavs.length -1) {
      currentFavs[rank] = currentFavs[rank+1];
      currentFavs[rank+1] = movie;
      this.setState({favourites: currentFavs});
      window.localStorage.favourites = JSON.stringify(currentFavs);
  }
}

  render() {

    const resultsClasses = cx('results__wrapper', {'results__wrapper--hidden': !this.state.resultsDisplayed});
    const detailClasses = cx('details', {'details--hidden': !this.state.detailDisplayed});
    const favsClasses = cx('favs', {'favs--display': this.state.favsDisplayed});

    return (
      <div>
        <div className="top-menu">
          <i className="fas fa-heart" onClick={this.handleFavMenu}></i>
          <h1 className="logo">YETFLIX</h1>
          <i className="fas fa-sign-out-alt" onClick={this.handleLogout}></i>
        </div>
        <Favourites classes={favsClasses} favourites={this.state.favourites} receiveMovie={this.receiveMovie} moveFavUp={this.moveFavUp} moveFavDown={this.moveFavDown}/>
        <Search preview={this.state.preview} receiveSearch={this.receiveSearch} receiveMovie={this.receiveMovie} submittedQuery={this.state.submittedQuery} previewQuery={this.state.previewQuery}/>
        {this.state.movieNotFound && <div className='error'>Movie not found!</div>}
        {!this.state.newSearchInProgress && <Results submittedQuery={this.state.submittedQuery} classes={resultsClasses} receiveSearch={this.receiveSearch} results={this.state.results} getDetail={this.getDetail}/>}
        {this.state.detail !== '' && <Detail classes={detailClasses} favourites={this.state.favourites} detail={this.state.detail} close={this.closeDetail} addFav={this.addFav} removeFav={this.removeFav}/>}
      </div>  
    );
  }
}

export default App;