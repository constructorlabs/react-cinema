import React from 'react';


class Displayresults extends React.Component {
  constructor(){
    super()
    this.fetchFilmInfo = this.fetchFilmInfo.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.state ={
        info: {},
        MovieInfoHeading: ''
        
    }
  }

  handleClick(){

  }

  fetchFilmInfo(){
    fetch(`http://www.omdbapi.com/?apikey=8d5ab09&i=${this.props.movie.imdbID}`)
    .then(response => response.json())
    .then(body => 
      this.setState({
      info: body,
      MovieInfoHeading: 'Movie Information:',
      Plot: `Plot: ${body.Plot}`,
      imdbRating: `Rating: ${body.imdbRating}`,
      Director: `Director: ${body.Director}`,
      Genre: `Genre: ${body.Genre}`,
      Runtime: `Runtime: ${body.Runtime}`,
      star: <i className='star-icon' class="fas fa-star"></i>
    }))
  }
  
  render(){
         

    return (
         
        <div className='results' >
            <h1 className='scroll-heading'>{this.props.movie.Title} ({this.props.movie.Year})</h1>
            <span>Click For Movie Info</span>
         <img onClick={this.fetchFilmInfo} className='posters' src={this.props.movie.Poster} /> 
            <p className='movie-info'>{this.state.Plot} </p>
            <p className='movie-info'>{this.state.imdbRating}{this.state.star}</p>
            <p className='movie-info'>{this.state.Director}</p>
            <p className='movie-info'>{this.state.Genre}</p>
            <p className='movie-info'>{this.state.Runtime}</p>
            
              
            <a onClick={this.handleClick}><i class="fas fa-heart heart-icon"><span className='add-to'>Add To Favourites</span></i></a>
            
        </div>
    );
  }
}

export default Displayresults;


               