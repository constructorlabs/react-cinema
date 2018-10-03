import React from "react";

class Favourite extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event){
    event.preventDefault()
    this.props.retrieveFilmId(this.props.faveDetails.imdbID)
    this.props.toggleDisplay("film")
  }

  render() {
    return (
      <div onClick={this.handleClick} className="favourite-element" >
        <h4 className="result__title" >{this.props.faveDetails.Title}</h4>
        <h5 className="result__year">({this.props.faveDetails.Year})</h5>
        <div className="favourite-element__arrows">
          <i className="arrow up"></i>
          <i className="arrow down"></i>
        </div>
      </div>
    )
  }
}

export default Favourite;
