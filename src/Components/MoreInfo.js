import React from "react";

function MoreInfo({ details, closeDetails }) {
  console.log(details);
  return (
    <div className="more__info">
      <ul>
        <li key={details.imdbID} className="details__section">
          <div className="details__mainInfo">
            <h5>Title: {details.Title}</h5>
            <p>Released: {details.Released}</p>
            <p>Year: {details.Year}</p>
            <p>Rating: {details.Rated}</p>
            <p>
              Voted {details.imdbRating} from {details.imdbVotes} votes
            </p>
          </div>
          <div className="details__actorInfo">
            <h4>Directed by {details.Director}</h4>
            <p>
              Starring: <br />
              {details.Actors}
            </p>
            <p>Written by {details.Writer}</p>
          </div>
          <div className="details__plot">
            <h4>
              Synopsis: <br />
              {details.Plot}
            </h4>
          </div>
          <button className="button__close" onClick={closeDetails}>
            Close me
          </button>
        </li>
      </ul>
    </div>
  );
}

export default MoreInfo;
