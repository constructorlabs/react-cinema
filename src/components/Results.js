import React from 'react';
import Result from './Result'

class Results extends React.Component {
    render() {
        return (
            <ul>
                {this.props.results.map(result => {
                    return <Result result={result} receiveMovie={this.props.receiveMovie} key={result.imdbID} />
                })}
            </ul>
        )
    }
}

export default Results;