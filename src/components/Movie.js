import React from 'react';

class Movie extends React.Component {
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("clicked" + this.props.id);
        this.props.receiveMovie(this.props.id);
    }

    render() {
        return (
            // TODO - create movie card with image container
            <div className="movie" id={this.props.id} onClick={this.handleClick}>
                <div className="movie__poster-container">
                    <img className="movie__poster-container__poster" src={this.props.source} />
                </div>
                <div className="movie__info-container">
                    <p className="movie__info-container__title">{this.props.title}</p>
                    <p className="movie__info-container__year">{this.props.year}</p>
                </div>
            </div>
        )
    }
}

export default Movie;