import React from 'react';

class Search extends React.Component {
    constructor() {
        super();

        this.state= {
            query: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            query: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.receiveQuery(this.state.query);
    }

    render() {
        return (
            <form className="search" onSubmit={this.handleSubmit}>
                <input className="seach__input" name="search" placeholder="Search for Movies..." onChange={this.handleChange} />
                <button className="search__btn">Search</button>
            </form>
        )
    }

}

export default Search;