import React from 'react';

class MovieDisplay extends React.Component {
    constructor () {
        super()
    }

    render () {

        const movie = this.props.currentMovie;
        const ignore = ["Website", "Poster", "Title", "Plot", "Response", "Ratings"]
        const imdbURL = `https://www.imdb.com/title/${movie.imdbID}`;

        return (

        <div className="article__main">
            <div className="article__image">
                <img src={movie.Poster} className="article__image__src"></img>
            </div>
            <div>
                <span className="article__header">
                    <div><strong>{movie.Title}</strong></div>
                </span>
            </div>
            <div className="article__text">
                <h3>Plot</h3>{movie.Plot}
                <div><a href={imdbURL} target="_blank">More details on IMDB</a></div>
                <div>
                    <ul>
                        {
                        Object.keys(movie).filter(item => ignore.indexOf(item) < 0).reduce((acc, item) => {
                            if (movie[item] && movie[item] !== "N/A") {
                                acc.push(<li><strong>{item}:</strong> {movie[item]}</li>)
                            }
                            return acc;
                        }, [])
                        }
                        {movie.Website && movie.Website !== "N/A" ? <li><a href={movie.Website} target="_blank">Visit website</a></li> : ""}
                    </ul>
                </div>   
            </div>
        </div>
        )
    }
}

export default MovieDisplay