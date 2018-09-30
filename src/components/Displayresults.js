import React from 'react';


class Displayresults extends React.Component {
  constructor(){
    super()
    this.fetchFilmInfo = this.fetchFilmInfo.bind(this)
    
    this.state ={
        info: {},
        MovieInfoHeading: ''
    }
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
      
      

    }))
  }
  
  render(){
         

    return (
         
        <div className='results' >
            <h1 className='scroll-heading'>{this.props.movie.Title} ({this.props.movie.Year})</h1>
            <span>Click For Movie Info</span>
         <img onClick={this.fetchFilmInfo} className='posters' src={this.props.movie.Poster} /> 
            <p>{this.state.Plot} </p>
            <p>{this.state.imdbRating}</p>
            <p>{this.state.Director}</p>
            <p>{this.state.Genre}</p>
            <p>{this.state.Runtime}</p>
        </div>
    );
  }
}

export default Displayresults;


               