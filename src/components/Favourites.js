import React from 'react';
import Favourite from './Favourite';

class Favourites extends React.Component {

  render() {
    return (
      <div className={this.props.classes}>
        {this.props.favourites.map(favourite => <Favourite key={favourite.imdbID} favData={favourite} moveFavUp={this.props.moveFavUp} moveFavDown={this.props.moveFavDown} receiveMovie={this.props.receiveMovie}/>)}       
      </div>
    );
  }
}

export default Favourites;