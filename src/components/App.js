import React from 'react';
import Header from './Header';
import Search from './Search';
import SearchResults from './SearchResults';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            films: [],
            totalFilms: 0
        }
    }

    searchByTitle() {
        fetch("http://www.omdbapi.com/?apikey=507b4100&type=movie&s=Titanic")
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

    componentWillMount() {
        this.searchByTitle();
    }




    render() {
        return (
            <div>
                <Header />
                <Search />
                <SearchResults films={this.state.films} />
            </div>
        )
    }
}

export default App;
