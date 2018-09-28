import React from 'react';

class SearchResults extends React.Component {

    constructor () {
        super()
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick (event) {
        const url = "https://www.imdb.com/title/" + event.target.id;
        window.open(url, "_blank")
    }

    render () {
        return (
        <div className="search-results">
            {
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