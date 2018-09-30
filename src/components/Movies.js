import React from 'react';
import Movie from './movie';

class Movies extends React.Component {
    constructor() {
        super();

        this.state = ({
            loading: true
        })

    }

    render() {
        if (this.props.moviesArray === undefined) {
            return (null)
        } else {
            return (
                <div className="movies-container">
                    {this.props.moviesArray.map(movie => <Movie key={movie.imdbID} id={movie.imdbID} source={movie.Poster} title={movie.Title} year={movie.Year} receiveMovie={this.props.receiveMovie} />)}
                </div>

            )
        }
    }
}

export default Movies;