import React from 'react';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            search: "",
            searchTerm: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.fetchMovies = this.fetchMovies.bind(this);
    };

    fetchMovies() {
        const OMBbAPIKey = "aba7af8e";
        const loading = document.querySelector('#search-results__loading');
        fetch('http://www.omdbapi.com/?s=' + this.state.search + '&apikey=' + OMBbAPIKey)
            .then(response => {
                loading.textContent = "Loading..";
                loading.classList.add('show');
                return response.json();
            })
            .then(result => {
                loading.classList.remove('show');
                this.props.receiver(result.Search, this.state.searchTerm);
            })
            .catch(error => {
                loading.textContent = "There's been a problem fetching the results. Try again later...";
                loading.classList.add('show');
                console.log(error);
            });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.fetchMovies(event.target.value);
    }

    handleChange(event) {
        event.preventDefault();

        this.setState({
            search: event.target.value,
            searchTerm: event.target.value
        });
    }

    render() {
        return (
            <section className="search-form">
                <form onSubmit={this.handleSubmit} action="" id="movie-request__form" className="movie-request__form">
                    <input
                        onChange={this.handleChange}
                        placeholder="Type your search here"
                        type="text"
                        name="movie-request__input"
                        id="movie-request__input"
                        value={this.state.search}
                        className="movie-request__input" />
                    {/* <ul id="autocomplete" className="autocomplete">
                    </ul> */}
                    <button className="movie-request__submit" type="submit">Search</button>
                    {/* <button className="movie-request__filters-toggle" id="movie-request__filters-toggle" type="button">Search filters</button>
                    <div id="movie-request__filters-list" className="movie-request__filters-list hidden">
                        <label htmlFor="movie-request__filters-type">Type</label>
                        <select name="movie-request__filters-type" id="movie-request__filters-type">
                            <option value="movie">movie</option>
                            <option value="series">series</option>
                            <option value="episode">episode</option>
                        </select>
                        <label htmlFor="movie-request__filters-year">Year</label>
                        <select name="movie-request__filters-year" id="movie-request__filters-year">
                            <option value="Test 1">Test 1</option>
                            <option value="Test 1">Test 2</option>
                        </select>

                    </div> */}
                </form>
            </section>
        );
    }
}

export default Search; 