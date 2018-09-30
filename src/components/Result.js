import React from 'react';
import Movie from './Movie';

class Result extends React.Component{

    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this);
        this.handleClickFavourite = this.handleClickFavourite.bind(this);
        // this.handleClickFavourite = this.handleClickFavourite.bind(this);
    }

    handleClick () {
        this.props.receiveMovie(this.props.showInfo ? null : this.props.result.imdbID)
    }

    handleClickFavourite() {
        this.props.receiveFavourite(this.props.result)
    }

    render() {
        return (
            <div className="result">
                <img className="result__image" src={this.props.result.Poster} id={this.props.result.imbdID} onClick={this.handleClick} />
                <p><strong>{this.props.result.Title} ({this.props.result.Year})</strong> <i className="movies__fav-icon far fa-star fa-2x" onClick={this.handleClickFavourite}></i></p>
                {this.props.showInfo ? <Movie movie={this.props.result} imdbID={this.props.result.imdbID} /> : null}
            </div>
        )
    }
}

export default Result;
