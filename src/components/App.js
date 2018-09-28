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
                  displayMode: '' };
    this.receiveSearch = this.receiveSearch.bind(this);
    this.getDetails = this.getDetails.bind(this);
    this.closeDetails = this.closeDetails.bind(this);
  }

  receiveSearch(query) {
    const APIQuery = `http://www.omdbapi.com/?apikey=eee5954b&s=${query}&type=movie`;
    this.setState({query});
    this.setState({displayMode: 'results'})
    this.fetchData(APIQuery,'results');
  }

  fetchData(APIQuery,type) {
    fetch(APIQuery)
    .then(response => response.json())
    .then(body => {
      if (type === 'results') {
        this.setState({results: body.Search}); }
      else if (type === 'detail') {
        this.setState({detail: body});
      }
    });
  }

  getDetails(imdbID) {
    const APIQuery = `http://www.omdbapi.com/?apikey=eee5954b&i=${imdbID}`;
    this.fetchData(APIQuery, 'detail');
    this.setState({displayMode: 'detail'});
  }

  closeDetails() {
    this.setState({displayMode: 'results'});
  }
  
  render() {

    return (
      <div>
        <Search receiveSearch={this.receiveSearch}/>
        {this.state.displayMode === 'results' && <Results results={this.state.results} getDetails={this.getDetails}/>}
        {this.state.displayMode === 'detail' && this.state.detail && <Detail detail={this.state.detail} close={this.closeDetails}/>}
      </div>  
    );
  }
}

export default App;
