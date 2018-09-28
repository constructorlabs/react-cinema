import React from 'react';

class SearchResults extends React.Component {

    render () {
        <div>
            {
            return (
            this.props.resultsArray.map(movie => {
                    return <div key={movie.imdbID} className="search-results">{movie.Title}</div>
                })
            }
            )
        </div>
    }
}

export default SearchResults