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
                   resultsDisplayed: false,
                   detailDisplayed: false,
                   favsDisplayed: false };

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
    if (type === 'results') {
      this.setState({submittedQuery: query});
    }
    else if (type === 'preview') {
      this.setState({previewQuery: query}); 
    }

    const apiQuery = `http://www.omdbapi.com/?apikey=eee5954b&s=${query}&type=movie`;
    this.fetchData(apiQuery, type);
  }

  receiveMovie(movie) {
    const apiQuery = `http://www.omdbapi.com/?apikey=eee5954b&i=${movie.imdbID}`;
    this.fetchData(apiQuery, 'detail');
  }

  fetchData(apiQuery,type) {
    fetch(apiQuery)
    .then(response => response.json())
    .then(body => {
      if (type === 'results') {
        if (body.Response === 'True') { 
          this.setState({ results: body.Search,
                          resultsDisplayed: true,
                          detailDisplayed: false }); }
        else {

        }            
      }
      else if (type === 'detail') {
        if (body.Response === 'True') { 
          this.setState({ detail: body,
                          resultsDisplayed: false,
                          detailDisplayed: true }); }
        else {
          
        }
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
        <Results submittedQuery={this.state.submittedQuery} classes={resultsClasses} results={this.state.results} getDetail={this.getDetail}/>
        {this.state.detail !== '' && <Detail classes={detailClasses} favourites={this.state.favourites} detail={this.state.detail} close={this.closeDetail} addFav={this.addFav} removeFav={this.removeFav}/>}
      </div>  
    );
  }
}

export default App;
