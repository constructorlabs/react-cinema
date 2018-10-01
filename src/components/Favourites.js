import React from 'react';
import Favourite from './Favourite';

function Favourites(props) {

  return (
    <div className={props.classes}>
      {props.favourites.map(favourite => <Favourite key={favourite.imdbID} favData={favourite} moveFavUp={props.moveFavUp} moveFavDown={props.moveFavDown} receiveMovie={props.receiveMovie}/>)}       
    </div>);
}

export default Favourites;