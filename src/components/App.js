import React from 'react';
import Search from './Search';
import Movies from './Movies';
import Paging from './Paging';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      movieresults: [], 
      query: "",
      page: 1
    }
    this.receiveQuery = this.receiveQuery.bind(this)
    this.receiveSubmit = this.receiveSubmit.bind(this)
    this.receiveMovies = this.receiveMovies.bind(this)
    this.receivePages = this.receivePages.bind(this)
  }

  fetchMovies() {
    const moviesUrl = `http://www.omdbapi.com/?s=${this.state.query}&page=${this.state.page}&apikey=eabbbb71`
    fetch(moviesUrl)
    .then(response => response.json())
    .then(content => {
      if(content.Response !=="False"  ) {
        this.setState({movieresults: content.Search})
      } 
      else { alert("oops")}
    })
  }
// App component stores the query
  receiveQuery(query) {
    this.setState({query : query})
  }
  receiveSubmit() {
    this.fetchMovies()
  }
  receiveMovies() {
    this.setState({movieresults: moviesresults})
    }   
  receivePages(num) {
    // fetch movies when state is being set - not before
    this.setState({page: num}, () => this.fetchMovies())
    }      

  render(){
    return (
      <main className="maincontent">

      <Search receiveQuery={this.receiveQuery} receiveSubmit={this.receiveSubmit} query={this.state.query}/>

        <section className="movies">
          <Movies movieresults={this.state.movieresults} />
        </section>
        <Paging receivePages={this.receivePages} currentPage={this.state.page}/>
      </main>
    )
  }
}

export default App;
