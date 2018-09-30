import React from 'react';

class Detail extends React.Component {
  constructor(){
    super();
  }

   render(){
    return (

        <div className="moviesfeed__details">
            <div className="moviesfeed__details--wrap">
                <ul className="moviesfeed__details-list menu--settings">
                    <li>Director <strong>{this.props.movie.Director}</strong></li>
                    <li>{this.props.movie.Plot}</li>
                    <li>Actors: <strong>{this.props.movie.Actors}</strong></li>
                    <li>Language: <strong>{this.props.movie.Language}</strong></li>
                </ul>
            </div>
        </div>
    )
  }
}

export default Detail;