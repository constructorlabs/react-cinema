import React from 'react';

class Search extends React.Component {
    constructor () {
        super()
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange (event) {
        this.props.receiveInput(event.target.value)
    }

    handleSubmit (event) {
        event.preventDefault()
        this.props.receiveSubmit(event.target.search.value)
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    id="search" 
                    onChange={this.handleChange} 
                    className="search" 
                    placeholder="&#128269; Enter movie search term" 
                    autoComplete="off" 
                />
            </form>
        )
    }
}

export default Search;
