import React from 'react';

class Search extends React.Component {

    constructor() {
        super();

        this.state= {
            query: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            query: event.target.value
        })
        console.log(this.state.query);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.receiveQuery(this.state.query)
    }

    render(){
        return( 
            <form className="search__form" onSubmit={this.handleSubmit}>
                <input className="search__input" type="search" name="search" id="search" onChange={this.handleChange}/>
                <button className="search__button" type="submit">Submit</button>
            </form>
        )
    }

}
export default Search;