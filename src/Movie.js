import React from 'react';

function Movie({ poster, title, year, imdbID }) {
    console.log('asd');
    return (
        <div className="movie-details">
            <div className='movie-poster'>
                <img src={poster === 'N/A'? (poster ='http://via.placeholder.com/150x220?text=image'): poster} alt='' className='movie-poster__image' />
                </div>
                <div className='movie-info'>
                <h2 className='movie-info__title'>{title}</h2>
                <div className='movie-info__year'><strong>Year:</strong> {
                    year
                }</div>
                <a className='movie-info__imdb-link' target='_blank' href=''>IMDb &#8599;</a>
                <button id='movie-info__moreinfo' className='movie-info__moreinfo' data-title='{
                    movie.Title
                }'>More Info</button>
            </div>
        </div>
    );
}

export default Movie;