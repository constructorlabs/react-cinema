import React from 'react';
import Search from './Search';
import Results from './Results';
import Detail from './Detail';
import Favourites from './Favourites';
import Preview from './Preview';
import cx from 'classnames';

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {query: '',
                  results: [],
                  detail: '',
                  displayMode: '',
                  favourites: [],
                  favsDisplayed: false };

    this.receiveSearch = this.receiveSearch.bind(this);
    this.getDetails = this.getDetails.bind(this);
    this.closeDetails = this.closeDetails.bind(this);
    this.addFav = this.addFav.bind(this);
    this.removeFav = this.removeFav.bind(this);
    this.handleFavMenu = this.handleFavMenu.bind(this);
  }

  componentDidMount() {
    this.setState({favourites: JSON.parse(window.localStorage.favourites)});
  }

  receiveSearch(query) {
    const apiQuery = `http://www.omdbapi.com/?apikey=eee5954b&s=${query}&type=movie`;
    this.setState({query});
    this.fetchData(apiQuery,'results');
  }

  fetchData(apiQuery,type) {
    fetch(apiQuery)
    .then(response => response.json())
    .then(body => {
      if (type === 'results') {
        this.setState({ results: body.Search,
                        displayMode: type }); }
      else if (type === 'detail') {
        this.setState({ detail: body,
                        displayMode: type}); }
    });
  }

  getDetails(imdbID) {
    const apiQuery = `http://www.omdbapi.com/?apikey=eee5954b&i=${imdbID}`;
    this.fetchData(apiQuery, 'detail');
  }

  closeDetails() {
    this.setState({displayMode: 'results',
                   detail: ''});
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
  
  render() {

    const resultsClasses = cx('results__wrapper', {'results__wrapper--hidden': this.state.displayMode !== 'results'});
    const detailClasses = cx('details', {'details--hidden': this.state.displayMode !== 'detail'});
    const favsClasses = cx('favs', {'favs--display': this.state.favsDisplayed});

    return (
      <div>
        <div className="top-menu">
          <i className="fas fa-heart" onClick={this.handleFavMenu}></i>
          <h1 className="logo">YETFLIX</h1>
          <i className="fas fa-sign-out-alt"></i>
        </div>
        <Favourites classes={favsClasses} favourites={this.state.favourites}/>
        <Search receiveSearch={this.receiveSearch}/>
        <Results classes={resultsClasses} results={this.state.results} getDetails={this.getDetails}/>
        {this.state.detail !== '' && <Detail classes={detailClasses} favourites={this.state.favourites} detail={this.state.detail} close={this.closeDetails} addFav={this.addFav} removeFav={this.removeFav}/>}
      </div>  
    );
  }
}

export default App;
