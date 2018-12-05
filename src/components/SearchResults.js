import React from 'react';
import cx from "classnames";

// show a list of 10 search results from user input

class SearchResults extends React.Component {

    constructor (props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    // send the selected ID to App
    handleClick (event) {
        this.props.receiveMovieID(event.target.id)
    }

    render () {
        // toggle search results display with classNames
        const classes = cx({
          "search-results": this.props.searchDisplay,
          "search-results-hidden": !this.props.searchDisplay
        })

        return (
        <div className={classes}>
            {
            // render 10 results as clickable buttons
            this.props.resultsArray.map(movie => {
                return  <div 
                            className="search-item" 
                            key={movie.imdbID} 
                            onMouseDown={this.handleClick}
                            id={movie.imdbID}
                        >
                        {movie.Title}
                        </div>
                })
            }
        </div>
        )
    }
}

export default SearchResults