//`http://www.omdbapi.com/?s=${keyWord}&apikey=d2807699&page=${page}`

import React from "react";
import cx from "classnames";
import Search from "./Search";
import Movies from "./Movies";
import Pagination from "./Pagination";

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
      totalPages: "",
      preview:[]
      // favList:[]
    };
    this.fetchMovies = this.fetchMovies.bind(this);
    this.receiveSearchInput = this.receiveSearchInput.bind(this);
    this.receivePageChange = this.receivePageChange.bind(this);
    this.fetchPreview = this.fetchPreview.bind(this);
    this.cleanPreview = this.cleanPreview.bind(this);

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

  fetchPreview(input){
    let moviesUrl = `http://www.omdbapi.com/?s=${input}&apikey=d2807699`;
    this.setState({preview:[]})
    fetch(moviesUrl)
      .then(response => response.json())
      .then(body => {
        const previewTitles=body.Search.map(movie => movie.Title);
        this.setState({
          preview: previewTitles
        });

      });
  }

  cleanPreview(){
    this.setState({
      preview:[]
    })
  }

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
          totalPages: Math.ceil(body.totalResults / 10),
          preview:[]
        },()=>console.log(this.state.movies))

      });
  }

  render() {
    //console.log(this.state)
    return (
      <div>
        <Search
          fetchPreview={this.fetchPreview}
          receiveSearchInput={this.receiveSearchInput}
          keyWord={this.state.keyWord}
          fetchMovies={this.fetchMovies}
          preview={this.state.preview}
          cleanPreview={this.cleanPreview}
        />
        <Pagination
          receivePageChange={this.receivePageChange}
          page={this.state.page}
          totalPages={this.state.totalPages}
        />
        <Movies
          movies={this.state.movies}
        />
      </div>
    );
  }
}

export default App;
