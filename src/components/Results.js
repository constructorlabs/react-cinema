import React from 'react';

class Results extends React.Component {
    render() {
        return (
            <ul>
                {this.props.results.map(result => {
                    {/* <Result result={result} receiveMovie={this.props.receiveMovie} /> */}
                })}
            </ul>)
    }
}

export default Results;