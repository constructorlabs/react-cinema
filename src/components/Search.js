import React from 'react';

class Search extends React.Component {
    constructor() {
        super();

        this.state = {
            search: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.setSearchHint = this.setSearchHint.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.receiveTitleQuery(this.state.search);

    }

    handleChange(e) {
        this.setState({
            search: e.target.value
        }, () => this.setSearchHint(this.state.search));
    }

    setSearchHint(string) {
        if (string.length > 3) {
            this.props.receiveSearchHint(string);
        }
    }

    render() {
        return (
            <form id="search" onSubmit={this.handleSubmit}>
                <label htmlFor="search__input" className="search__label">What are you looking for?</label>
                <input onChange={this.handleChange} type="text" name="query" id="search__input" className="search__input" placeholder="Search for a film title..." autoFocus="autofocus" />
                <button className="btn btn__search"><i className="fas fa-search"></i></button>
            </form>
        )
    }
}

export default Search;