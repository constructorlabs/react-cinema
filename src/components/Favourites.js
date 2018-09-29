import React from "react";
import FavouritesItem from "./FavouritesItem";

class Favourites extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event){
      this.props.receiveFavouritesInfo(event.target.id)
  }


  render() {
    return (
      <div className="favourites">
        <button onClick={this.handleClick} id="favourites__clear__favourites">Clear Favourites</button>
        <ul>
          {this.props.favouritesArray.map(favourite => (
            <FavouritesItem key={favourite.imdbID} receiveFavouritesInfo={this.props.receiveFavouritesInfo} favourite={favourite} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Favourites;
