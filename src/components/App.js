import React from 'react';
import Header from './Header';
import Search from './Search';
import SearchResults from './SearchResults';
import FilmDetails from './FilmDetails';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            query: "",
            films: [],
            totalFilms: 0,
            filmDetails: {}
        }

        this.receiveTitleQuery = this.receiveTitleQuery.bind(this);
        this.receiveFilmID = this.receiveFilmID.bind(this);
        this.searchByTitle = this.searchByTitle.bind(this);
        this.searchByID = this.searchByID.bind(this);
    }

    searchByTitle(query) {
        fetch(`http://www.omdbapi.com/?apikey=507b4100&type=movie&s=${query}`)
            .then(response => response.json())
            .then(body => {
                this.setState({
                    films: body.Search,
                    totalFilms: body.totalResults
                }, () => console.log(this.state))
            })
            .catch(error => {
                alert(error);
            })
    }

    searchByID(id) {
        fetch(`http://www.omdbapi.com/?apikey=507b4100&type=movie&i=${id}`)
            .then(response => response.json())
            .then(body => {
                this.setState({
                    filmDetails: body
                }, () => console.log(this.state))
            })
            .catch(error => {
                alert(error);
            })
    }

    receiveTitleQuery(query) {
        this.setState({
            query: query
        });
        this.searchByTitle(query);
    }

    receiveFilmID(id) {
        this.searchByID(id);
    }


    render() {
        return (
            <div>
                <Header />
                <Search receiveTitleQuery={this.receiveTitleQuery} />
                <SearchResults films={this.state.films} receiveFilmID={this.receiveFilmID} />
                <FilmDetails />
            </div>
        )
    }
}

export default App;
