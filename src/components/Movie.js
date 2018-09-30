
//url = `http://www.omdbapi.com/?i=${id}&plot=full&apikey=d2807699`

import React from 'react';

import cx from 'classnames';


class Movie extends React.Component{
  constructor(){
    super();
    this.state ={
      movieDetails:{},
      showDetails:false,
      on:false
    }

    this.handleClick = this.handleClick.bind(this);
    this.fetchMovieDetails = this.fetchMovieDetails.bind(this);
    this.handleFavClick = this.handleFavClick.bind(this);

  }

  handleClick(){
    this.fetchMovieDetails();
    this.setState({
      showDetails:!this.state.showDetails
    })
  }

  handleFavClick(){
    this.props.receiveFavClick(this.props.id)
    this.setState({
      on:!this.state.on
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
    const classes=cx('material-icons md-24',{'fav_on':this.state.on&&this.props.favLightOn});

    return(
      <div className='movie' id={this.props.id}>
        <h2>{this.props.title}</h2>
        <h3>{this.props.year}</h3>
        <i onClick={this.handleFavClick} className={classes}>star_border</i>
        <img onClick={this.handleClick} src={this.props.image}/>

        {this.state.showDetails?
          <ul className='movie__details'>
          <li>Director: {this.state.movieDetails.Director}</li>
          <li>Actors: {this.state.movieDetails.Actors}</li>
          {this.state.movieDetails.Ratings == undefined?"":
          <li>Ratings: {this.state.movieDetails.Ratings.map(rating => {
                return <p key={rating.Source}>{rating.Source}: {rating.Value}</p>
                }
              )}
          </li>}

          <li>Description: {this.state.movieDetails.Plot}</li>
        </ul> : ""}
      </div>
    )
  }
}

export default Movie;
