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
        console.log(this.props.isFavourite?'movies__fav-icon fas fa-star fa-2x':'movies__fav-icon far fa-star fa-2x')
        return (
            <div className="result">
                <img className="result__image" src={this.props.result.Poster} id={this.props.result.imdbID} onClick={this.handleClick} />
                <p className="result__tab">
                        <strong className="result__title-year">{this.props.result.Title} ({this.props.result.Year})</strong>
                        <i className={this.props.isFavourite?'result__fav-star fas fa-star fa-2x':'result__fav-star movies__fav-icon far fa-star fa-2x'} onClick={this.handleClickFavourite}></i>
                </p>
                {this.props.showInfo ? <Movie movie={this.props.result} imdbID={this.props.result.imdbID} /> : null}
            </div>
        )
    }
}

export default Result;
