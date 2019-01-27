import React from 'react';

class SetInnerHTML extends React.Component {

    render () {
        return (
            <div dangerouslySetInnerHTML={{__html: this.props.children}}>
            </div>
        )
    }
}

export default SetInnerHTML;
