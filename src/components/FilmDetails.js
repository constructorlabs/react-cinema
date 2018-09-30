import React from 'react';
import cx from 'classnames';

class FilmDetails extends React.Component {

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        if (e.target.classList.value == "btn btn__close") {
            this.props.toggleVisible();
        } else {
            this.props.receiveFav(this.props.filmDetails);
        }
    }




    render() {

        const ratingsStyle = {
            backgroundImage: `linear-gradient(to right, orangered, orangered ${this.props.filmDetails.imdbRating * 10}%, rgba(0, 0, 0, 0) ${this.props.filmDetails.imdbRating * 10}%`
        }

        const favClass = cx("btn btn__fav", {
            "btn__fav--active": this.props.favList.includes(this.props.filmDetails.imdbID)
        }
        );

        const wrapperClass = cx("film-details__wrapper", {
            "film-details__wrapper--closed": this.props.isClosed
        });


        return (
            <div className={wrapperClass}>
                <div className="film-details">
                    <h3 className="film-details__title">{this.props.filmDetails.Title}</h3>
                    <button onClick={this.handleClick} className={favClass}><i className="fas fa-heart"></i></button>
                    <button onClick={this.handleClick} className="btn btn__close"><i className="far fa-times-circle"></i></button>
                    <img className="film-details__poster" src={this.props.filmDetails.Poster} alt="poster" />
                    <h4 className="film-details__director">{this.props.filmDetails.Director}</h4>
                    <p className="film-details__meta">(Released {this.props.filmDetails.Year}, dur. {this.props.filmDetails.Runtime}, {this.props.filmDetails.Rated})</p>
                    <div className="film-details__rating">
                        <p className="film-details__ratings__imdb"><strong>Rating:</strong></p>
                        <div className="film-details__rating__bar" style={ratingsStyle}></div>
                        <p className="film-details__rating__score">{this.props.filmDetails.imdbRating} out of 10</p>
                    </div>
                    <h4>Starring</h4>
                    <p className="film-details__actors">
                        {this.props.filmDetails.Actors}</p>
                    <h4>Plot summary</h4>
                    <p className="film-details__plot">{this.props.filmDetails.Plot}</p>
                </div>
            </div>
        )
    }
}

export default FilmDetails;