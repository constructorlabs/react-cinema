import React from 'react';
import FavouritesItem from './FavouritesItem';

class Favourites extends React.Component {
    constructor() {
        super();
    }

    render(){
        return (
            <div className="favourites">
                <ul>
                    {this.props.favouritesArray.map(favourite => <FavouritesItem key={favourite.imdbID} favourite={favourite}/>)}
                </ul>
            </div>
        )
    }
}

export default Favourites;