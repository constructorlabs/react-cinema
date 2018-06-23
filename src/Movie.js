import React from 'react';

function Movie(props){
    return(
        <div className='content__movie'>
            <p> {props.title}</p>
            <p> Release Year: {props.year}</p>
            <img src={props.poster}/>
            <button type="button" class="btn-more" d> More details </button>
        </div>
    );

};

export default Movie;