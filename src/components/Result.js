import React from 'react';

class Result extends React.Component{

    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (event) {
        this.props.receiveMovie(this.props.result)
    }

    render() {
        return (
            <li className="results__item">
                <img className="results__image" src={this.props.result.Poster} id={this.props.result.imbdID} onClick={this.handleClick} />
            </li>
        )
    }
}

export default Result;

