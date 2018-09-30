import React from "react";
import SearchHint from "./SearchHint";

class Search extends React.Component {
    constructor() {
        super();

        this.state = {
            search: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.setSearchHint = this.setSearchHint.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.receiveTitleQuery(this.state.search);

    }

    handleChange(e) {
        if (e.target.value.length >= 3) {
            console.log(e.target.value.length);
            this.setState({
                search: e.target.value
            }, () => this.setSearchHint(this.state.search));
        } else {
            this.setState({
                search: ""
            }, () => this.setSearchHint(this.state.search));
        }
    }

    handleClick(e, film) {
        console.log(`${film.imdbID} clicked`);
        this.props.receiveFilmID(film.imdbID);
    }

    setSearchHint(string) {
        this.props.receiveSearchHint(string);
    }

    render() {
        return (
            <form id="search" onSubmit={this.handleSubmit}>
                <label htmlFor="search__input" className="search__label">What are you looking for?</label>
                <input onChange={this.handleChange} type="text" name="query" id="search__input" className="search__input" placeholder="Search for a film title..." autoFocus="autofocus" />
                {(this.props.hints != undefined && this.props.hints.length > 0) &&
                    <ul className="search__hints">
                        {this.props.hints.map((hint, i) => {
                            if (i < 5) {
                                return <SearchHint key={hint.imdbID} film={hint} onClick={e => this.handleClick(e, hint)} />
                            }
                        })}
                    </ul>
                }
                <button className="btn btn__search"><i className="fas fa-search"></i></button>
            </form>
        )
    }
}

export default Search;