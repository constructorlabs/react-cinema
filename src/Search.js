import React from 'react';
import './Search.css';

function Search(props) {
    return (
        <div className='App-header'>
            <form onSubmit={event => props.handleSubmit(event)}>
                <input onChange={props.handleChange} type="text" />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Search;