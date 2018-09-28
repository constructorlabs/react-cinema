import React from "react";
import Film from "./Film";

class SearchResults extends React.Component {

    render() {
        return (
            <section id="search__results">
                <div className="search__results__page">
                    {this.props.films.map(film => {
                        return <Film key={film.imdbID} title={film.Title} year={film.Year} poster={film.Poster} />
                    })}
                </div>
            </section>
        );
    }
}

export default SearchResults;