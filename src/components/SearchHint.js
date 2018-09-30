import React from "react";

class SearchHint extends React.Component {
    render() {
        return (
            <li onClick={this.props.onClick} className="search__hint">{this.props.film.Title}</li>
        );
    }
}

export default SearchHint;