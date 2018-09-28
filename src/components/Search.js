import React from 'react';

class Search extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <form id="search">
                <label htmlFor="search__input" className="search__label">What are you looking for?</label>
                <input type="text" name="query" id="search__input" className="search__input" placeholder="Search for a film title..." autoFocus="autofocus" />
                <button className="btn btn__search">Search</button>
            </form>
        )
    }
}

export default Search;