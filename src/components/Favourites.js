import React from 'react';
import Favourite from './Favourite';

function Favourites({ classes, favourites, moveFavUp, moveFavDown, receiveMovie }) {

  return (
    <div className={classes}>
      {favourites.map(favourite => <Favourite key={favourite.imdbID} favData={favourite} moveFavUp={moveFavUp} moveFavDown={moveFavDown} receiveMovie={receiveMovie}/>)}       
    </div>);
}

export default Favourites;