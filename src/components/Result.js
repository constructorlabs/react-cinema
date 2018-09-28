import React from 'react';
import Movie from './Movie';

class Result extends React.Component{

    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (event) {
        this.props.receiveMovie(this.props.result.imdbID)
    }

    render() {
        return (
            <li className="results__item">
                <img className="results__image" src={this.props.result.Poster} id={this.props.result.imbdID} onClick={this.handleClick} />
                {this.props.showInfo ? <Movie movie={this.props.result} imdbID={this.props.result.imdbID} /> : null}
            </li>
        )
    }
}

export default Result;
