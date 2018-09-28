import React from "react";
import Film from "./Film";

class SearchResults extends React.Component {

    render() {
        return (
            <section id="search-results">
                <div className="search__results__page">
                    {this.props.films.map(film => {
                        return <Film key={film.imdbID} title={film.Title} />
                    })}
                </div>
            </section>
        );
    }
}

export default SearchResults;