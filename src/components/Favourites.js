import React from 'react';

class Favourites extends React.Component {
    constructor() {
        super()

        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleFavClick = this.handleFavClick.bind(this);
    }

    handleDeleteClick() {
        console.log(this.props.favourite.imdbID); 
        this.props.deleteFavourite(this.props.favourite)
    }

    handleFavClick() {
        this.props.clickFavouriteItem(this.props.favourite);
    }

    render() {
        return (
            <div className="fav-menu__row">
                <img className="fav-delete" src="src/images/favDelete.png" onClick={this.handleDeleteClick}/>
                <a href="#" onClick={this.handleFavClick}>{this.props.favourite.Title}</a>
            </div>
        )
    }
}

export default Favourites;

