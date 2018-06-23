import React from 'react';
import Search from './Search';
import MovieList from './MovieList';



class App extends React.Component {
  constructor(props){
    super();

    this.state = {
      movies: [],
    }

    this.receiver=this.receiver.bind(this);

  };


receiver (moviesArr){
  this.setState({movies:moviesArr})

}

  render(){
    return (
      <div>
        <Search moviesReceiver={this.receiver} />
        <MovieList moviesResults={this.state.movies} />
    
      </div>
    )
  }
}

export default App;
