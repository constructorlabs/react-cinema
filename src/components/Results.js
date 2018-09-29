import React from 'react';
import Result from './Result'

class Results extends React.Component {
    render() {
        return (
            <div className="search-results">
                {this.props.results.map(result => {
                    return <Result showInfo={result.imdbID === this.props.selectedMovie} result={result} receiveMovie={this.props.receiveMovie} key={result.imdbID} />
                })}
            </div>
        )
    }
}

export default Results;