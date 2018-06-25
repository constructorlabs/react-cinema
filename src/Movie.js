import React from "react";

function Movie(props) {
    return (
        <div>

            <h2>{props.data.Title}</h2>
            <img src={props.data.Poster} />
            <h2>{props.data.Year}</h2>

        </div>
    );
}

export default Movie;