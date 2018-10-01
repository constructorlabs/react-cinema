import React from 'react';

function Favourite({ moveFavUp, moveFavDown, receiveMovie, favData }) {

  return (
     <div className='fav'>
        <i className="fas fa-sort-up" onClick={event => moveFavUp(favData)}></i>
        <i className="fas fa-sort-down" onClick={event => moveFavDown(favData)}></i>
        <a className='fav__title' onClick={event => receiveMovie(favData, 'fromFavs')}>{favData.Title}</a>
      </div>
  );
}

export default Favourite;