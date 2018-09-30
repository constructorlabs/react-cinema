import React from "react"
import Favourite from "./Favourite.js"

class HomePage extends React.Component{
  constructor(){
    super()
  }


  render(){
    return (
      <div className="landing-page">
        <i className="fas fa-film landing-icon"></i>
        <h3 className="landing-text">WELCOME TO PROJECT CINEMA</h3>
        <div className="favourites-container">
          {this.props.favourites.map(fave => {
            return  <Favourite key={fave.imdbID} retrieveFilmId={this.props.retrieveFilmId} toggleDisplay={this.props.toggleDisplay} faveDetails={fave}/>
          })}

        </div>
      </div>
    )
  }


}


export default HomePage
