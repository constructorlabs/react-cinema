import React from "react";
import cx from "classnames";
class FavouritesItem extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.receiveFavouritesInfo(event.target.id, this.props.favourite);
  }

  render() {
    const classesUp = cx("favouritesMove", {
      "button--notVisable":
        this.props.favouritesArray.indexOf(this.props.favourite) === 0
    });

    const classesDown = cx("favouritesMove", {
      "button--notVisable":
        this.props.favouritesArray.indexOf(this.props.favourite) ===
        this.props.favouritesArray.length - 1
    });

    return (
      <div>
        <li>{this.props.favourite.Title}</li>
        <button
          onClick={this.handleClick}
          className={classesUp}
          id="favourites__move__up"
        >
          &and;
        </button>
        <button
          onClick={this.handleClick}
          className={classesDown}
          id="favourites__move__down"
        >
          &or;
        </button>
        <button onClick={this.handleClick} id="favourites__delete__favourite">
          X
        </button>
      </div>
    );
  }
}

export default FavouritesItem;
