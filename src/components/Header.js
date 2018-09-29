import React from 'react';

class Header extends React.Component {
    constructor(){
        super();
    }

    render(){
        return(
            <header className="header">
                <h1 className="header__title">Now Playing</h1>
                <h2 className="header__subtitle">An "Internet Movie Database"</h2>
                <img className="header__image" src="/Users/madodaveo/workspace/react-cinema/images/kilyan-sockalingum-478724-unsplash.jpg"/>
            </header>
        )
    }
}



export default Header;