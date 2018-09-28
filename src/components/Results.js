import React from 'react';
import Result from './Result'

class Results extends React.Component {
    render() {
        return (
            <ul className="results">
                {this.props.results.map(result => {
                    return <Result showInfo={result.imdbID === this.props.selectedMovie} result={result} receiveMovie={this.props.receiveMovie} key={result.imdbID} />
                })}
            </ul>
        )
    }
}

export default Results;