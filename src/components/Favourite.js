import React from 'react';

class Favourite extends React.Component {

  render() {
    return (
      <div className='fav'>
        <i className="fas fa-sort-up"></i>
        <i className="fas fa-sort-down"></i>
        <a className='fav__title'>{this.props.favData.Title}</a>
      </div>
    );  
  }
}

export default Favourite;