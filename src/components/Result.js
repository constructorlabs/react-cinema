import React from 'react';
import Movie from './Movie';

class Result extends React.Component{

    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {

        this.props.receiveMovie(this.props.showInfo ? null : this.props.result.imdbID)
    }

    render() {
        return (
            <div className="result">
                <img className="result__image" src={this.props.result.Poster} id={this.props.result.imbdID} onClick={this.handleClick} />
                <p><strong>{this.props.result.Title} ({this.props.result.Year})</strong></p>
                {this.props.showInfo ? <Movie movie={this.props.result} imdbID={this.props.result.imdbID} /> : null}
            </div>
        )
    }
}

export default Result;
