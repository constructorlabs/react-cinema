import React from 'react';
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleWatchList = this.handleWatchList.bind(this);
    }
    handleWatchList() {
        this.props.receiver();
    }
    render() {
        return (
            <header className="main-header">
                <h1 className="main-heading">{this.props.title}</h1>
                <button onClick={this.handleWatchList} className="movie-info__moreinfo watch-list__button">Watch List</button>
            </header>
        )
    }
}
export default Header;