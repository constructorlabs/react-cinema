import React from 'react';

class Info extends React.Component {
    constructor() {
        super();
        this.state = {
            isFav: false,
            favImage: ''
        };
        this.handleClickFavourite = this.handleClickFavourite.bind(this);
    }

    componentDidMount() {
        console.log("Info componentDidMount")
        if (this.props.movieIsfav === true) {
            document.querySelector(".fav-btn").src = "src/images/fav.png";
        }
    }

    componentWillMount() {
        console.log("info componentWillMount")
    }

    componentDidUpdate() {
        console.log("info componentDidUpdate");

    }

    componentWillReceiveProps() {
    }

    handleClickFavourite() {
        this.props.toggleFavourite(this.props.info);
    }


    render() {
        let favImage;
        this.props.movieIsFav ? favImage = "src/images/favourited.png" : favImage = "src/images/favourite.png";

        return (
            <div className="movie-info" id={this.props.info.imdbID}>
                <div className="background-image">
                    <img className="background-image__image" src={this.props.info.Poster} />
                </div>
                <img className="fav-btn" src={favImage} onClick={this.handleClickFavourite} />
                <div className="movie-info__poster">
                    <img className="movie-info__poster__image" src={this.props.info.Poster} />
                </div>
                <h2 className="movie-info__title">{this.props.info.Title}</h2>
                <h3 className="movie-info__year">{this.props.info.Year}&nbsp;&nbsp;&nbsp;{this.props.info.Runtime}</h3>
                <p>{this.props.info.Plot}</p>
            </div>
        )
    }
}

export default Info;
