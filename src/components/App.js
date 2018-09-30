import React from "react";
import Films from "./Films";
import Search from "./Search";

class App extends React.Component {
  constructor() {
    super();

    this.state = { films: [], pageNum: 1, currentSearchFlim: "love", unFound: {gif: '', p: ''}};
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
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

  notFound(){
   this.setState({unFound:{gif:'/oops.gif', p:"No results found"}});
  }

  handleNext() {
    
    // this.setState(prevState =>Object.assign({}, prevState, { pageNum: prevState.pageNum + 1 }))
    // this.setState(prevState => ({...prevState, pageNum: prevState.pageNum + 1}));
    // this.setState({pageNum: this.state.pageNum + 1})
    // this.setState( prevState => ({pageNum: prevState.pageNum + 1}))
    // this.receiveSearch(this.state.currentSearchFlim)
    this.setState({pageNum:this.state.pageNum + 1}, () => this.receiveSearch(this.state.currentSearchFlim))
    
  }

  handlePrevious() {
    // event.preventDefault();
    // this.setState({pageNum: this.state.pageNum - 1})
    // this.receiveSearch(this.state.currentSearchFlim)
    this.setState({pageNum:this.state.pageNum - 1}, () => this.receiveSearch(this.state.currentSearchFlim))
    
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
          alert("WHOOPS!");
          this.setState({ films:[]});
          // this.setState({unfound:{gif: '', p: ''}})
        } else {
          console.log(films);
          this.setState({ films: films.Search, unfound: {gif: '', p: ''}}); //unforund reset not working
          // this.setState({pageNum:1}); //pagenum reset not working
        }
      })
      // .catch(error => console.log("catch error", error));
  }

  render() {
    return (
      <div>
        <h1>Quelle Film</h1>
        <Search receiveSearch={this.receiveSearch} />
        <div className="oops">
        {this.state.unFound.p}
        <img className="cry" src={this.state.unFound.gif}/> 
        </div>
        <Films films={this.state.films} />
        <div></div>
        <button onClick={this.handleNext}>Next</button>
        <button onClick={this.handlePrevious}>Back</button>
      </div>
    );
  }
}

export default App;