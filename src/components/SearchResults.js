import React from "react";
import Film from "./Film";

class SearchResults extends React.Component {
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.receiveFilmID(e.target.parentNode.dataset.id);
    }

    render() {
        return (
            <section id="search__results">
                <div onClick={this.handleClick} className="search__results__page">
                    {this.props.films.map(film => {
                        return <Film key={film.imdbID} id={film.imdbID} title={film.Title} year={film.Year} poster={film.Poster} />
                    })}
                </div>
            </section>
        );
    }
}

export default SearchResults;