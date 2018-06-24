import React from 'react';
import Movie from './Movie';


class Movies extends React.Component {
    constructor() {
        super();
        this.titleReceiver = this.titleReceiver.bind(this);
    }

    titleReceiver(title) {
        this.props.receiver(title);
    }

    render() {
        return (
            this.props.movies.length > 0
                ?
                <section className="search-results" id="search-results">
                    <div className='movie-list-wrapper'>
                        {this.props.movies.map((movie) => {
                            return <Movie
                                watchlistbutton={this.props.watchlistbutton}
                                key={movie.imdbID}
                                poster={movie.Poster}
                                title={movie.Title}
                                year={movie.Year}
                                imdbID={movie.imdbID}
                                receiver={this.titleReceiver} />;
                        })}
                    </div>
                </section>
                :
                ""
        );
    }
}

export default Movies;