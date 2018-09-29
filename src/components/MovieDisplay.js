import React from 'react'; // npm run dev -- --watch
import cx from "classnames"; // npm install classnames

class MovieDisplay extends React.Component {
    constructor () {
        super()
        this.toggleTextDisplay = this.toggleTextDisplay.bind(this)
        this.state = {
            prevMovieID: null,
            textDisplay: false
        }
    }

    toggleTextDisplay () {
        // if (this.state.prevMovieID !== this.props.currentMovie.imdbID) {
        //     this.setState ({
        //         prevMovieID: this.props.currentMovie.imdbID,
        //         textDisplay: false
        //     })
        // } 
        this.setState ({
            textDisplay: !this.state.textDisplay
        })
    }

    render () {
        console.log(this.state)

        const movie = this.props.currentMovie;
        const ignore = ["Website", "Poster", "Title", "Plot", "Response", "Ratings"]
        const imdbURL = `https://www.imdb.com/title/${movie.imdbID}`;
        const imgURL = movie.Poster === "N/A" ? "assets/no-image.png" : movie.Poster

        const classes = cx({
            "article__text-full": this.state.textDisplay,
            "article__text-none": !this.state.textDisplay
          })
          
        return (

            <div className="article__main">
                <div className="article__image-mobile">
                    <img src={imgURL} className="article__image__src"></img>
                </div>
                <div>
                    <span className="article__header">
                        <div><strong>{movie.Title}</strong></div>
                    </span>
                </div>
                <div className="article__image-ipad">
                    <img src={imgURL} className="article__image__src"></img>
                </div>
                <div className="article__text">
                    <h3>Plot</h3>
                    {movie.Plot}
                    <div><a onClick={this.toggleTextDisplay}>More details below...</a></div>
                    <div className={classes}>
                        <ul>
                            {
                                Object.keys(movie)
                                .filter(n => ignore.indexOf(n) < 0)
                                .reduce((acc, item) => {
                                    if (movie[item] && movie[item] !== "N/A") {
                                        acc.push(<li key={item}><strong>{item}:</strong> {movie[item]}</li>)
                                    }
                                    return acc;
                                }, [])
                            }

                            {
                                (movie.Website && movie.Website !== "N/A") ? <li><a href={movie.Website} target="_blank">Visit website</a></li> : ""
                            } 
                            <li><a href={imdbURL} target="_blank">View details on IMDB</a></li>
                        </ul>
                    </div>   
                </div>
            </div>
        )
    }
}

export default MovieDisplay