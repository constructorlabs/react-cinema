import React from 'react';

class MovieInfo extends React.Component {

    render() {

        return (
            <div className="movie-info" id={this.props.movieObject.imdbID}>
                <img className="movie-info__poster" src={this.props.movieObject.Poster} />
                <h2>{this.props.movieObject.Title}</h2>
                <h3>{this.props.movieObject.Year}</h3>
                <p>{this.props.movieObject.Plot}</p>
            </div>
        )
    }
}

export default MovieInfo;
