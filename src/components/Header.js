import React from 'react';

class Header extends React.Component {

    render() {
        return (
            <header>
                <h1 id="title">The Reel Thing</h1>
                <button className="btn btn__account"><i className="fas fa-heart"></i></button>
            </header>
        )
    }
}

export default Header;