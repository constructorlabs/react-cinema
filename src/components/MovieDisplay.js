import React from 'react'; 
import SetInnerHTML from './SetInnerHTML.js';
import cx from "classnames"; 

class MovieDisplay extends React.Component {
    constructor () {
        super()
        this.toggleTextDisplay = this.toggleTextDisplay.bind(this)
        this.state = { textDisplay: false }
    }

    toggleTextDisplay () {
        this.setState ({ textDisplay: !this.state.textDisplay })
    }

    render () {
        // ignore these properties when looping through all the keys so they don't display in the content 
        const ignore = ["Website", "Poster", "Title", "Plot", "Response", "Ratings"];
        const movie = this.props.currentMovie;
        const imdbURL = `https://www.imdb.com/title/${movie.imdbID}`;
        const imgURL = (!movie.Poster || movie.Poster === "N/A") ? "./assets/no-image.png" : movie.Poster;
        const noPlot = !movie.Plot || movie.Plot === "N/A";
        
        // toggle the visibility of the search results display
        const classes = cx({
            "article__text-full": this.state.textDisplay,
            "article__text-none": !this.state.textDisplay
          })
          
        return (

            <div className="article__main">
                <div className="article__image-mobile">
                { movie && <img src={imgURL} className="article__image__src"></img>}
                </div>
                <div>
                    <span className="article__header">
                        <div><strong>{movie.Title}</strong></div>
                    </span>
                </div>
                <div className="article__image-ipad">
                    { movie && <img src={imgURL} className="article__image__src"></img>}
                </div>
                <div className="article__text">
                    { (noPlot) || <SetInnerHTML>{"<h3>Plot</h3>"}</SetInnerHTML>}
                    { (noPlot) || movie.Plot}
                    { movie && <div><a onClick={this.toggleTextDisplay}>More details below...</a></div>}
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
                                (!movie.Website || movie.Website === "N/A") || <li><a href={movie.Website} target="_blank">Visit website</a></li>
                            } 
                            {
                                movie && <li><a href={imdbURL} target="_blank">View details on IMDB</a></li>
                            }
                        </ul>
                    </div>   
                </div>
            </div>
        )
    }
}

export default MovieDisplay