import React from 'react';

class Preview extends React.Component {

  constructor() {
      super();

      this.handleClick = this.handleClick.bind(this);
  }  

  handleClick(event) {
    this.props.receiveMovie(this.props.movieData);
    this.props.hidePreview();
  }

  render() {
    return (
        <div className='preview' onClick={this.handleClick}>{this.props.movieData.Title}</div>       
    );
  }
}

export default Preview;