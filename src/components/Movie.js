import React from 'react';

class Movie extends React.Component {
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.receiveMovie(this.props.id);
    }

    render() {
        return (
            // TODO - create movie card with image container
            <div className="movie" id={this.props.id} onClick={this.handleClick}>
                <div className="poster-container">
                    <img className="poster-container__image" src={this.props.source} />
                </div>
                <div className="info-container">
                    <p className="info-container__title">{this.props.title}</p>
                    <p className="info-container__year">{this.props.year}</p>
                </div>
            </div>
        )
    }
}

export default Movie;