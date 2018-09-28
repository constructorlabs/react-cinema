
//url = `http://www.omdbapi.com/?i=${id}&plot=full&apikey=d2807699`

import React from 'react';


class Movie extends React.Component{
  constructor(){
    super();
    this.state ={
      movieDetails:{},
      showDetails:false
    }

    this.handleClick = this.handleClick.bind(this);
    this.fetchMovieDetails = this.fetchMovieDetails.bind(this);

  }

  handleClick(){
    this.fetchMovieDetails();
    this.setState({
      showDetails:!this.state.showDetails
    })
  }

  fetchMovieDetails(){
    //console.log(this.state.keyWord)
    let detailsUrl=`http://www.omdbapi.com/?i=${this.props.id}&plot=full&apikey=d2807699`
    fetch(detailsUrl)
    .then(response => response.json())
    .then(body => {
      //console.log(body)
      this.setState({
        movieDetails:body
      })

    })

  }

  render(){
    return(
      <div className='movie' onClick={this.handleClick} id={this.props.id}>
        <h2>{this.props.title}</h2>
        <h3>{this.props.year}</h3>
        <img src={this.props.image}/>
        {this.state.showDetails?
          <ul>
          <li>{this.state.movieDetails.Director}</li>
          <li>{this.state.movieDetails.Actors}</li>
          {this.state.movieDetails.Ratings == undefined?"":
          <li>{this.state.movieDetails.Ratings.map(rating => {
                return <p>{rating.Source}: {rating.Value}</p>
                }
              )}
          </li>}

          <li>{this.state.movieDetails.Plot}</li>
        </ul> : ""}
      </div>
    )
  }
}

export default Movie;
