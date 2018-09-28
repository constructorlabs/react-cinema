import React from 'react';

class Header extends React.Component {

    render() {
        return (
            <header>
                <h1 className="logo">The Reel Thing</h1>
                <button className="btn btn__account">Account</button>
            </header>
        )
    }
}

export default Header;