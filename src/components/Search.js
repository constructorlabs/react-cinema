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
        return <form onSubmit={this.handleSubmit}>
            <label>
                <input type="search" name="search" id="search" onChange={this.handleChange}/>
            </label>
        </form>
    }

}
export default Search;