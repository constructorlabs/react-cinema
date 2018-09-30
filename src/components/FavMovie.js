import React from "react";

class FavMovie extends React.Component {
  constructor() {
    super();
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleDeleteClick(){
    this.props.receiveDeleteClick(this.props.id)
  }


  render() {
    return (
      <div>
        <li className="favMovie">
        {this.props.title} {this.props.year}
        </li>
        <i className="material-icons" onClick={this.handleDeleteClick}>clear</i>
      </div>
    );
  }
}

export default FavMovie;
