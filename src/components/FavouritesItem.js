import React from 'react';

class FavouritesItem extends React.Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div>
                <li>{this.props.favourite.Title}</li>
            </div>
        )
    }
}

export default FavouritesItem;