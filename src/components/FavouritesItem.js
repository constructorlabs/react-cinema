import React from "react";

class FavouritesItem extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
      this.props.receiveFavouritesInfo(event.target.id, this.props.favourite)
  }

  render() {
    return (
      <div>
        <li>{this.props.favourite.Title}</li>
        <button onClick={this.handleClick} id="favourites__delete__favourite">X</button>
      </div>
    );
  }
}

export default FavouritesItem;
