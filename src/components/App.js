import React from 'react';
import Search from './Search';
import Results from './Results';
import Hero from './Hero';
class App extends React.Component {
  constructor(){
    super();

    this.receiveSearch = this.receiveSearch.bind(this)
    // this.componentDidMount = this.componentDidMount.bind(this)
   
    this.fetchMovies = this.fetchMovies.bind(this)
    this.state ={
        userSearch: "",
        moviesArray:[]

    }
  }

  // componentDidMount(){
  //   this.fetchMovies("")
  // }

  fetchMovies(userSearch){
    fetch(`http://www.omdbapi.com/?apikey=8d5ab09&s=${userSearch}`)
    .then(response => response.json())
    .then(body => {
      // console.log(body)
      this.setState({moviesArray: body.Search})
    })
  }


// function receive user input
  receiveSearch(text){
    this.setState({
      userSearch: text
    })
    this.fetchMovies(text)
  }


  




  render(){
    return (
      <div className="container">
        <h1 className='welcome-heading'>The Internet's Biggest Collections Of Movies</h1>
      
       <Search  receiver={this.receiveSearch}/>

       {/* add a ternary to show hero if no movie search and if movie is search, no hero */}
       <Results  moviesArray={this.state.moviesArray}/>
       <Hero />
      </div>
    )
  }
}

export default App;
