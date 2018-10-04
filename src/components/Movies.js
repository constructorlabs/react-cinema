import React from 'react';
import Movie from './Movie.js';
import Modal from './Modal.js'

class Movies extends React.Component {
  constructor(){
  super();

  this.state = {
    modalDetails: "",
    modalClass: "modal"
  }

//binding here
this.receiveModal = this.receiveModal.bind(this);
this.receiveModalCloseBtn = this.receiveModalCloseBtn.bind(this);
this.modalOutsideClick = this.modalOutsideClick.bind(this);
  }

receiveModal(modal){
  console.log(modal);
  var url = `http://www.omdbapi.com/?apikey=77164d83&i=${modal}`
  fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(body => {
        console.log(body)
        this.setState({
            modalDetails: body,
            modalClass: "modal2"
        })
      })
  console.log(this.modalDetails)
}

receiveModalCloseBtn(){
        this.setState({
            modalClass: "modal"
        })
      }

modalOutsideClick(event){
        if(event.target.className == "modal2"){
          this.setState({
              modalClass: "modal"
          })
    }
  }





render(){
  return(
    <div onClick={this.modalOutsideClick}>
      <div>
        <Modal receiveModalCloseBtn={this.receiveModalCloseBtn} modalDetails={this.state.modalDetails} className={this.state.modalClass}/>
      </div>
      <div className="main">
      {this.props.movies.map( movie => {
        return (
          <div className="movieItem" key={movie.imdbID}>
            <Movie key={movie.imdbID} movie={movie} receiveModal={this.receiveModal}/>
          </div>
        )
      })}
    </div>
    </div>
  )
}

}

export default Movies
