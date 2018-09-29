import React from 'react';
import Header from './Header';
import Search from './Search';
import SearchResults from './SearchResults';
import FilmDetails from './FilmDetails';
import FavouritesList from './FavouritesList';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            query: "",
            currentPage: 1,
            films: [],
            totalFilms: 0,
            filmDetails: {},
            favourites: []
        }

        this.receiveTitleQuery = this.receiveTitleQuery.bind(this);
        this.receiveFilmID = this.receiveFilmID.bind(this);
        this.receivePageNum = this.receivePageNum.bind(this);
        this.receiveFav = this.receiveFav.bind(this);
        this.searchByTitle = this.searchByTitle.bind(this);
        this.searchByID = this.searchByID.bind(this);
    }

    searchByTitle(query, pageNum = 1) {
        fetch(`http://www.omdbapi.com/?apikey=507b4100&type=movie&s=${query}&page=${pageNum}`)
            .then(response => response.json())
            .then(body => {
                this.setState({
                    films: body.Search,
                    totalFilms: body.totalResults
                })
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
                })
            })
            .catch(error => {
                alert(error);
            })
    }

    receiveTitleQuery(query) {
        this.setState({
            query: query,
            currentPage: 1,
            filmDetails: {}
        }, () => this.searchByTitle(query, this.state.currentPage));
    }

    receiveFilmID(id) {
        this.searchByID(id);
    }

    receivePageNum(num) {
        this.setState({
            currentPage: num
        }, () => this.searchByTitle(this.state.query, this.state.currentPage));
    }

    receiveFav(obj) {
        let favourites = this.state.favourites;
        const isFav = film => {
            return film.imdbID == obj.imdbID
        }
        if (!favourites.find(isFav)) {
            favourites.push(obj);
            this.setState({
                favourites: favourites
            });
        } else {
            const fav = favourites.find(isFav);
            const index = favourites.indexOf(fav);
            favourites.splice(index, 1);
            this.setState({
                favourites: favourites
            });
        }
    }


    render() {

        const favList = this.state.favourites.map(fav => {
            return fav.imdbID;
        });

        return (
            <div>
                <Header />
                <FavouritesList favouritesList={this.state.favourites} />
                <Search receiveTitleQuery={this.receiveTitleQuery} />

                {this.state.films.length > 0 &&
                    <SearchResults films={this.state.films} totalFilms={this.state.totalFilms} receiveFilmID={this.receiveFilmID} receivePageNum={this.receivePageNum} currentPage={this.state.currentPage} />}

                {Object.keys(this.state.filmDetails).length != 0 &&
                    <FilmDetails filmDetails={this.state.filmDetails} receiveFav={this.receiveFav} favList={favList} />}

            </div>
        )
    }
}

export default App;
