import React from "react";

class FavMovie extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <li>
        {this.props.title} {this.props.year}
      </li>
    );
  }
}

export default FavMovie;
