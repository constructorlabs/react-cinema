import React from 'react';
import Search from './Search';
import Movies from './Movies';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      searchQuery: '',
      page: 1,
      movies: [],
      favourites: []
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.addFavourites = this.addFavourites.bind(this);
    this.removeFromFavourites = this.removeFromFavourites.bind(this);
  }

  componentDidMount(){
    const favourites = window.localStorage.getItem('favourites');
    const favouritesArray = favourites ? JSON.parse(favourites) : [];

    this.setState({
      favourites: favouritesArray
    });
  }

  addFavourites(movie){
    this.setState({
      favourites: this.state.favourites.concat(movie)
    }, () => window.localStorage.setItem('favourites', JSON.stringify(this.state.favourites)));
  }

  removeFromFavourites(movie){

    const filteredFavourites = this.state.favourites.filter( currentFavourite => {
      return currentFavourite.imdbID !== movie.imdbID;
    });

    this.setState({
      favourites: filteredFavourites
    }, () => window.localStorage.setItem('favourites', JSON.stringify(this.state.favourites)));
  }

  handleSearchChange(searchQuery){
    this.setState({
      searchQuery: searchQuery
    })
  }

  handleSearchSubmit(){
    console.log('Search submitted', this.state.searchQuery);

    fetch(`http://www.omdbapi.com/?s=${this.state.searchQuery}&apikey=2cda7206`)
      .then(response => response.json())
      .then( body => {
        console.log('Search submitted', body);
        this.setState({
          movies: body.Search
        });
      })
  }

  render(){
    return (
      <div>
        <h1>Movie Search</h1>
        <Search
          handleSearchChange={this.handleSearchChange}
          handleSearchSubmit={this.handleSearchSubmit}
          searchQuery={this.state.searchQuery}
        />
        <Movies
          movies={this.state.movies}
          favourites={this.state.favourites}
          addFavourites={this.addFavourites}
          removeFromFavourites={this.removeFromFavourites}
        />
      </div>
    )
  }
}

export default App;
