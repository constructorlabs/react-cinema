import React from "react";

class SearchHint extends React.Component {
    render() {
        return (
            <li className="search__hint">{this.props.film.Title}</li>
        );
    }
}

export default SearchHint;