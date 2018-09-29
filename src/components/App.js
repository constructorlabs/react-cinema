import React from 'react';
import Films from './Films';
import Search from './Search';

class App extends React.Component {
  constructor(){
    super();

    this.state = {films: [], pageNum: 1};
    this.handleNext=this.handleNext.bind(this);

    this.fetchIMDB = this.fetchIMDB.bind(this);
    // this.filmSearch = this.filmSearch.bind(this);
    // this.IMDBData= this.IMDBData.bind(this);
    this.notFound= this.notFound.bind(this);
    // this.searchText = this.searchText.bind(this);
    this.receiveSearch = this.receiveSearch.bind(this);
  }

  componentDidMount(){
    this.receiveSearch('Interstellar');
  }

  notFound(){
    console.log("notFound");
  }

  handleNext(){
    event.preventDefault();
    this.setState({pageNum: this.state.pageNum + 1});
    this.receiveSearch();
  }
  

  receiveSearch(filmSearchQuery){
    const searchURL = `https://www.omdbapi.com/?s=${filmSearchQuery}&page=${this.state.pageNum}&apikey=73071eff`;
    this.fetchIMDB(searchURL);
  }


  
  // Initial Search Fetch
  fetchIMDB(searchURL){
    fetch(searchURL) 
    .then(function(response) {
        
        return response.json();
    })
    .then(films=> {
      if(films.Response === "False") {
        this.notFound()
        console.log("WHOOPS!");
      } else {
        console.log(films)
        this.setState({films: films.Search})}
    }
    );
  }

// searchText(){
//   console.log("SearchQuery")
// }
  
  

  render(){
    return (
      <div>
        <Search receiveSearch={this.receiveSearch}/>
        <Films films={this.state.films}/>
        <button onClick={this.handleNext}>Next</button>
      </div>
    );
  }




}

export default App;


