//`http://www.omdbapi.com/?s=${keyWord}&apikey=d2807699&page=${page}`

import React from 'react';
import cx from 'classnames'
import Search from './Search';
import Movies from './Movies';
import Movie from './Movie';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      movies:[],
      keyWord:""
    }
    this.fetchMovies = this.fetchMovies.bind(this);
    this.receiveSearchInput = this.receiveSearchInput.bind(this);
  }



  receiveSearchInput(input){
    this.setState({
      keyWord:input
    })
  }

  fetchMovies(){
    //console.log(this.state.keyWord)
    let moviesUrl=`http://www.omdbapi.com/?s=${this.state.keyWord}&apikey=d2807699`
    fetch(moviesUrl)
    .then(response => response.json())
    .then(body => {

      this.setState({
        movies:body.Search
      })

    })

  }

  render(){
    //console.log(this.state)
    return (
      <div>
        <Search receiveSearchInput={this.receiveSearchInput} keyWord={this.state.keyWord} fetchMovies={this.fetchMovies}/>
        <Movies movies={this.state.movies}/>
      </div>
    )
  }
}

export default App;
