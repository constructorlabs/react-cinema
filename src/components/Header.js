import React from 'react';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            showFavs: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({
            showFavs: !this.state.showFavs
        }, () => this.props.receiveFavListState(this.state.showFavs))
    }

    render() {
        return (
            <header>
                <h1 id="title">The Reel Thing</h1>
                <button onClick={this.handleClick} className={this.props.accountState}><i className="fas fa-heart"></i></button>
            </header>
        )
    }
}

export default Header;