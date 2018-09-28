import React from 'react';

class FilmDetails extends React.Component {


    render() {
        return (
            <div className="film-details__wrapper">
                <h3 className="film-details__title">Batman Begins</h3>
                <button id="fav" className="btn btn__fav" data-id="tt0372784"><i className="fas fa-heart"></i></button>
                <img className="film-details__poster" src="https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg" alt="poster" />
                <h4 className="film-details__director">Dir. Christopher Nolan</h4>
                <p className="film-details__meta">(Released 2005, dur. 140 min, PG-13)</p>
                <div className="film-details__rating">
                    <p className="film-details__ratings__imdb"><strong>Rating:</strong></p>
                    <div className="film-details__rating__bar"></div>
                    <p className="film-details__rating__score">8.3 out of 10</p>
                </div>
                <h4>Starring</h4>
                <p className="film-details__actors">
                    Christian Bale, Michael Caine, Liam Neeson, Katie Holmes </p>
                <h4>Plot summary</h4>
                <p className="film-details__plot">When his parents are killed, billionaire playboy Bruce Wayne relocates to Asia where he is mentored by Henri Ducard and Ra's Al Ghul in how to fight evil. When learning about the plan to wipe out evil in Gotham City by Ducard, Bruce prevents this plan from getting any further and heads back to his home. Back in his original surroundings, Bruce adopts the image of a bat to strike fear into the criminals and the corrupt as the icon known as 'Batman'. But it doesn't stay quiet for long.</p>
            </div>
        )
    }
}

export default FilmDetails;