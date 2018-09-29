//`http://www.omdbapi.com/?s=${keyWord}&apikey=d2807699&page=${page}`

import React from "react";
import cx from "classnames";
import Search from "./Search";
import Movies from "./Movies";
import Movie from "./Movie";
import Pagination from "./Pagination";
import FavList from "./FavList";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

library.add(faStar);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      keyWord: "",
      page: 1,
      totalPages: ""
      // favList:[]
    };
    this.fetchMovies = this.fetchMovies.bind(this);
    this.receiveSearchInput = this.receiveSearchInput.bind(this);
    this.receivePageChange = this.receivePageChange.bind(this);

  }

  receivePageChange(value) {
    const newPage = this.state.page + parseInt(value);

    this.setState(
      {
        page: newPage
      },
      () => this.fetchMovies()
    );
  }

  receiveSearchInput(input) {
    this.setState({
      keyWord: input
    });
  }

  // receiveFavClick(id) {
  //   this.setState({
  //
  //   })

  
  fetchMovies(){
    //console.log(this.state.keyWord)
    let moviesUrl = `http://www.omdbapi.com/?s=${this.state.keyWord}&page=${
      this.state.page
    }&apikey=d2807699`;
    fetch(moviesUrl)
      .then(response => response.json())
      .then(body => {
        this.setState({
          movies: body.Search,
          totalPages: Math.ceil(body.totalResults / 10)
        });
      });
  }

  render() {
    //console.log(this.state)
    return (
      <div>
        <Search
          receiveSearchInput={this.receiveSearchInput}
          keyWord={this.state.keyWord}
          fetchMovies={this.fetchMovies}
        />
        <Pagination
          receivePageChange={this.receivePageChange}
          page={this.state.page}
          totalPages={this.state.totalPages}
        />
        {/* <FavList
          movies={this.state.movies}
          // receiveFavClick={this.receiveFavClick}
        /> */}
        <Movies movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
