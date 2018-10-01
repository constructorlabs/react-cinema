import React from 'react';

function Favourite(props) {

  return (
     <div className='fav'>
        <i className="fas fa-sort-up" onClick={event => props.moveFavUp(props.favData)}></i>
        <i className="fas fa-sort-down" onClick={event => props.moveFavDown(props.favData)}></i>
        <a className='fav__title' onClick={event => props.receiveMovie(props.favData, 'fromFavs')}>{props.favData.Title}</a>
      </div>
  );
}

export default Favourite;