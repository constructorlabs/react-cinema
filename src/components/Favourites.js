import React from "react";
import Films from "./Films.js";

class Favourites extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="favourites" id="favourites">
        <ul>
          {this.props.favouritesList.map((film, index) => {
            return (
              <li>
                {film}
                <button
                  onClick={() => {
                    this.props.removeFavouriteByIndex(index);
                  }}
                >
                  Remove
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Favourites;
