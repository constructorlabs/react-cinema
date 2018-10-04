import React from 'react';
import Modal from './Modal.js'

class Movie extends React.Component{
  constructor(){
  super();

  this.state = {
    details: null
  }

this.handleClick = this.handleClick.bind(this);
}

handleClick(event) {
  this.props.receiveModal(this.props.movie.imdbID);
}




render(){
  return(
    <div onClick={this.handleClick}>
        <img id="posterImage" src={this.props.movie.Poster} onError={(e)=>{e.target.onerror = null; e.target.src="imagefound.png"}}/>
        <h2>{this.props.movie.Title} ({this.props.movie.Year})</h2>
    </div>
  )
}

}


export default Movie
