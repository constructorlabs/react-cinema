import React from 'react';

class Result extends React.Component{

    render() {
        return (
            <li>
                <img src={this.props.result.Poster}  />
            </li>
        )
    }
}

export default Result;

