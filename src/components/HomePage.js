import React from "react"

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
        </div>
      </div>
    )
  }


}


export default HomePage
