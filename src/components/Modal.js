import React from 'react';

class Modal extends React.Component{
  constructor(){
    super();


  this.handleClick = this.handleClick.bind(this);

  }

  handleClick(event){
    this.props.receiveModalCloseBtn()
  }


render(){


  return(
    <div id="simpleModal" className={this.props.className}>
    <div className="modal-content">
      <div className="modal-header">
          <span className="closeBtn" onClick={this.handleClick}>&times;</span>
          <h2>Details</h2>
      </div>
      <div className="modal-body">
        <ul>
          <li>Director: {this.props.modalDetails.Director}</li>
          <li>Runtime: {this.props.modalDetails.Runtime}</li>
          <li>IMDB Rating: {this.props.modalDetails.imdbRating}</li>
          <li>IMDB Votes: {this.props.modalDetails.imdbVotes}</li>
          <li>Rating: {this.props.modalDetails.Rated}</li>
          <li>Awards: {this.props.modalDetails.Awards}</li>
          <li>Actors: {this.props.modalDetails.Actors}</li>
        </ul>
      </div>
    </div>
  </div>
  )
}

}

export default Modal
