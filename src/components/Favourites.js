import React from "react";
import FavouritesItem from "./FavouritesItem";

class Favourites extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.receiveFavouritesInfo(event.target.id);
  }

  render() {
    return (
      <div className="favourites" tabIndex="0">
        <ul className="favourites__list">
          {" "}
          Favourites
          {this.props.favouritesArray.map(favourite => (
            <FavouritesItem
              key={favourite.imdbID}
              receiveFavouritesInfo={this.props.receiveFavouritesInfo}
              favourite={favourite}
              favouritesArray={this.props.favouritesArray}
            />
          ))}
          <button onClick={this.handleClick} id="favourites__clear__favourites">
            Clear Favourites
          </button>
        </ul>
      </div>
    );
  }
}

export default Favourites;
