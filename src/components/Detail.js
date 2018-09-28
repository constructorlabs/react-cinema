import React from 'react';

class Detail extends React.Component {
  constructor(){
    super();
  }


   render(){
    return (

        // need director, plot, actors, language, genre, guidance, ratings
        <div className="moviesfeed__details">
            <div className="moviesfeed__details--wrap">
                <ul className="moviesfeed__details-list menu--settings">
                
                    <li>{this.props.movie.Director}</li>
                    <li>{this.props.movie.Plot}</li>
                    <li>{this.props.movie.Actors}</li>
                    <li>{this.props.movie.Language}</li>
                </ul>
            </div>
        </div>
    )
  }
}

export default Detail;