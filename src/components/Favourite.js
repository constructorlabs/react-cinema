import React from 'react';

class Favourite extends React.Component {

  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.handleFavUp = this.handleFavUp.bind(this);
    this.handleFavDown = this.handleFavDown.bind(this);
  }

  handleClick(event) {
    this.props.receiveMovie(this.props.favData);
  }

  handleFavUp(event) {
    this.props.moveFavUp(this.props.favData);
  }

  handleFavDown(event) {
    this.props.moveFavDown(this.props.favData);
  }

  render() {
    return (
      <div className='fav'>
        <i className="fas fa-sort-up" onClick={this.handleFavUp}></i>
        <i className="fas fa-sort-down" onClick={this.handleFavDown}></i>
        <a className='fav__title' onClick={this.handleClick}>{this.props.favData.Title}</a>
      </div>
    );  
  }
}

export default Favourite;