import React from 'react';

class Detail extends React.Component {
  constructor(){
    super();
  }



   render(){
    // Lemon rating - create array from IMDB rating
    const rating =  Array.from(Array(Math.round(this.props.movie.imdbRating)).keys())
    // there is an issue with key duplication 

    return (

        <div className="moviesfeed__details">
            <div className="moviesfeed__details--wrap">
                <ul className="moviesfeed__details-list menu--settings">
                    <li>Director <strong>{this.props.movie.Director}</strong></li>
                    <li>{this.props.movie.Plot}</li>
                    <li>Actors: <strong>{this.props.movie.Actors}</strong></li>
                    <li>Language: <strong>{this.props.movie.Language}</strong></li>
                    <li>Genre:<strong>{this.props.movie.Genre}</strong></li>
                    <li>Runtime: <strong>{this.props.movie.Runtime}</strong></li>
                </ul>
                
                <p className="moviesfeed__rating">Lemon rating: {rating.map(item => {
          return <i key={this.props.movie.imdbID} className="fas fa-lemon"></i>})
        }</p>
            </div>
        </div>
    )
  }
}

export default Detail;