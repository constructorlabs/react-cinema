import React from "react";
import Films from "./Films";
import Search from "./Search";

class App extends React.Component {
  constructor() {
    super();

    this.state = { films: [], pageNum: 1, currentSearchFlim: "love" };
    this.handleNext = this.handleNext.bind(this);

    this.fetchIMDB = this.fetchIMDB.bind(this);
    // this.filmSearch = this.filmSearch.bind(this);
    // this.IMDBData= this.IMDBData.bind(this);
    this.notFound = this.notFound.bind(this);
    // this.searchText = this.searchText.bind(this);
    this.receiveSearch = this.receiveSearch.bind(this);
  }

  componentDidMount() {
    this.receiveSearch(this.state.currentSearchFlim);
  }

  notFound() {
    console.log("notFound");
  }

  handleNext() {
    console.log(this.state.pageNum);
    // this.setState(prevState =>Object.assign({}, prevState, { pageNum: prevState.pageNum + 1 }))
    // this.setState(prevState => ({...prevState, pageNum: prevState.pageNum + 1}));
    this.setState( prevState => ({pageNum: prevState.pageNum + 1}))
    this.receiveSearch(this.state.currentSearchFlim)
  }

  receiveSearch(filmSearchQuery) {
    this.setState( prevState => ({currentSearchFlim: filmSearchQuery}))
    // this.setState(prevState => Object.assign({}, prevState, { currentSearchFlim: filmSearchQuery}))
    const searchURL = `https://www.omdbapi.com/?s=${filmSearchQuery}&page=${this.state.pageNum}&apikey=73071eff`;
    this.fetchIMDB(searchURL);
  }

  // Initial Search Fetch
  fetchIMDB(searchURL) {
    fetch(searchURL)
      .then(
        response => (response.ok ? response.json() : Promise.reject(response))
      )
      .then(films => {
        if (films.Response === "False") {
          this.notFound();
          console.log("WHOOPS!");
          this.setState({ error: films.Search });
        } else {
          console.log(films);
          this.setState({ films: films.Search });
        }
      })
      .catch(error => console.log("catch error", error));
  }

  render() {
    return (
      <div>
        <Search receiveSearch={this.receiveSearch} />
        <Films films={this.state.films} />
        <button onClick={this.handleNext}>Next</button>
      </div>
    );
  }
}

export default App;