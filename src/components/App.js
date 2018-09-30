import React from 'react';
import Search from './Search';
import Results from './Results';
import Hero from './Hero';

class App extends React.Component {
  constructor(){
    super();

    this.handleClick = this.handleClick.bind(this)
    this.handlePrevClick = this.handlePrevClick.bind(this)
    this.receiveSearch = this.receiveSearch.bind(this)
    // this.componentDidMount = this.componentDidMount.bind(this)
   
    this.fetchMovies = this.fetchMovies.bind(this)
    this.state ={
        userSearch: "",
        moviesArray:[],
        page: 1
    }
  }

  // componentDidMount(){
  //   this.fetchMovies("")
  // }

  fetchMovies(userSearch){
    fetch(`http://www.omdbapi.com/?apikey=8d5ab09&s=${userSearch}&page=${this.state.page}`)
    .then(response => response.json())
    .then(body => {
      // console.log(body)
      this.setState({moviesArray: body.Search,
                    
      })
    })
  }


// function receive user input
  receiveSearch(text){
    this.setState({
      userSearch: text
    })
    this.fetchMovies(text)
  }


  handleClick(event){
   
    this.setState({
      page: this.state.page + 1
    })
   this.fetchMovies(this.state.userSearch,this.setState.page)
   window.scrollTo(0,1000)
  }

  handlePrevClick(){
    this.setState({
      page: this.state.page - 1
    })
    this.fetchMovies(this.state.userSearch, this.setState.page)
    window.scrollTo(0,500)
  }




  render(){
    return (
      <div className="container">
        <h1 className='welcome-heading'>The Internet's Biggest Collections Of Movies</h1>
      
       <Search  receiver={this.receiveSearch}/>
       {/* add a ternary to show hero if no movie search and if movie is search, no hero */}
       <Hero />
       <Results moviesArray={this.state.moviesArray}/>
       <button className='load-button' onClick={this.handleClick}>Next 10 Results</button>
       <button className='load-button' onClick={this.handlePrevClick}>Prev Results</button>
      </div>
    )
  }
}

export default App;
