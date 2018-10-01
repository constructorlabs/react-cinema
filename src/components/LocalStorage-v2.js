// http://www.omdbapi.com/?s=batman&apikey=2cda7206
// http://www.competa.com/blog/storing-javascript-object-localstorage/

import React from 'react';

class App extends React.Component {
  constructor(){
    super();

    this.handleClick = this.handleClick.bind(this);
    
    this.state = {
      baseURL: 'http://www.omdbapi.com/?apikey=2454706d',
      currentMovieID: "tt0119217",
      favs: []
    }
  }

  componentDidMount() {
      localStorage.setItem('favourites', JSON.stringify(this.state))
  }

  handleClick (event) {
    const id = event.target.id
    if (this.state.favs.indexOf(id) < 0) { // add to favs
      this.setState({ favs: this.state.favs.concat(id) })
    } else { // remove from favs
      this.setState({ favs: this.state.favs.filter(item => item !== id) })
    }
    const colour = (this.state.favs.indexOf(id) < 0) ? "#00ff00" : "#fff"
    event.target.style.backgroundColor = colour
    this.fetchData()
  }


  fetchData () {
    fetch(`${this.state.baseURL}&i=${this.state.currentMovieID}`)
    .then(response => response.json())
    .then(body => {
      this.setState({
        currentMovie: body
      })
      return body;
    })
  }

  render(){

    localStorage.setItem('favourites', JSON.stringify(this.state))
    const getObject = JSON.parse(localStorage.getItem('favourites'))

    console.log(getObject.favs)

    const movies = ["tt0119217", "tt0060196", "tt0211915", "tt1985970", "tt1694505"];

    return (
      <div>
        {
          movies.map(movie => {
            return <button 
              key={movie} 
              id={movie} 
              onClick={this.handleClick}> {movie} </button>
          })
        }
      </div>
    )
  }
}

export default App;



// https://hackernoon.com/how-to-take-advantage-of-local-storage-in-your-react-projects-a895f2b2d3f2

// load all favourites from localStorage on `componentDidMount` in App. 
// write favourites to localStorage when favourites change
// store favourites as an object in `localStorage` using a known key, 
// which you can also later use to retrieve all favourites


