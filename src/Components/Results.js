import React from "react";

function Results({
  films,
  imdbLink,
  recieveMoreInfo,
  recieveFavourite,
  errorPic
}) {
  return (
    <div>
      <ul>
        {films.map(film => {
          return (
            <li key={film.imdbID} className="result_sections">
              <div className="title">
                <h2 className="movie_title" id="movie_title">
                  {film.Title}
                </h2>
                <p className="movie_year">{film.Year}</p>
              </div>
              <div className="poster">
                <a href={`${imdbLink}${film.imdbID}`} target="._blank">
                  <img
                    src={film.Poster}
                    onError={() => <img src={errorPic} />}
                  />
                </a>
              </div>
              )}
              <div className="more_info">
                <button onClick={() => recieveMoreInfo(film.imdbID)}>
                  More Info
                </button>
                <button className="amazon_link">
                  <a
                    className="amazon_link"
                    href={`https://www.amazon.co.uk/s/ref=nb_sb_noss_1?url=search-alias%3Ddvd&field-keywords=${
                      film.Title
                    }`}
                    target="_blank"
                  >
                    Buy Now
                  </a>
                </button>
                <button
                  onClick={() => recieveFavourite(film.Title)}
                  className="favourites"
                >
                  Add to Favourites
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Results;

// {film.Poster.value != "N/A" ? (
//   <div className="poster">
//     <a href={`${imdbLink}${film.imdbID}`} target="_blank">
//       <img src={film.Poster} />
//     </a>
//   </div>
// ) : (
//   <div className="poster__error">
//     <a href="#">
//       <img src={ />
//     </a>
