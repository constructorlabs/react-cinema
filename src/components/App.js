import React from 'react';
import Search from './Search';
import Results from './Results';
import Detail from './Detail';
import Favourite from './Favourite';
import Preview from './Preview';
import cx from 'classnames';

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {query: '',
                  results: [],
                  detail: '',
                  displayMode: '',
                  favourites: [] };
    this.receiveSearch = this.receiveSearch.bind(this);
    this.getDetails = this.getDetails.bind(this);
    this.closeDetails = this.closeDetails.bind(this);
    this.addFav = this.addFav.bind(this);
    this.removeFav = this.removeFav.bind(this);
  }

  receiveSearch(query) {
    const APIQuery = `http://www.omdbapi.com/?apikey=eee5954b&s=${query}&type=movie`;
    this.setState({query});
    this.fetchData(APIQuery,'results');
  }

  fetchData(APIQuery,type) {
    fetch(APIQuery)
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
    const APIQuery = `http://www.omdbapi.com/?apikey=eee5954b&i=${imdbID}`;
    this.fetchData(APIQuery, 'detail');
  }

  closeDetails() {
    this.setState({displayMode: 'results',
                   detail: ''});
  }

  addFav(detail) {
    this.setState({favourites: this.state.favourites.concat([detail])},()=>console.log(this.state.favourites));
  }

  removeFav(detail) {
    this.setState({favourites: this.state.favourites.filter(item => item.imdbID !== detail.imdbID)},()=>console.log(this.state.favourites));
  }
  
  render() {

    const resultsClasses = cx('results__wrapper', {'results__wrapper--hidden': this.state.displayMode !== 'results'});
    const detailClasses = cx('details', {'details--hidden': this.state.displayMode !== 'detail'});

    return (
      <div>
        <Search receiveSearch={this.receiveSearch}/>
        <Results classes={resultsClasses} results={this.state.results} getDetails={this.getDetails}/>
        {this.state.detail !== '' && <Detail classes={detailClasses} favourites={this.state.favourites} detail={this.state.detail} close={this.closeDetails} addFav={this.addFav} removeFav={this.removeFav}/>}
      </div>  
    );
  }
}

export default App;
