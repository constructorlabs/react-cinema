import React from 'react';
import Header from './Header';
import Search from './Search';
import SearchResults from './SearchResults';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            query: "",
            films: [],
            totalFilms: 0
        }

        this.receiveTitleQuery = this.receiveTitleQuery.bind(this);
        this.searchByTitle = this.searchByTitle.bind(this);
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

    receiveTitleQuery(query) {
        this.setState({
            query: query
        });
        this.searchByTitle(query);
    }


    render() {
        return (
            <div>
                <Header />
                <Search receiveTitleQuery={this.receiveTitleQuery} />
                <SearchResults films={this.state.films} />
            </div>
        )
    }
}

export default App;
