import React from "react"

class HeaderSearch extends React.Component{
  constructor(){
    super()

    this.state = {
      textInput: ""
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    }









  handleInput(event){
    this.setState({
      textInput: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.retrieveSearchString(this.state.textInput)
    this.props.toggleDisplay("search")

  }

  render(){
    return (
      <nav>
        <div className="nav__home">
          <h2 className="logo">PROJECT CINEMA</h2>
          <i className="fas fa-search search__display-bar"></i>
        </div>
        <div className="nav__search">
          <form onSubmit={this.handleSubmit} className="search">
            <input type="text" className="search__text" onChange={this.handleInput} placeholder="Search.."/>
            <button type="submit" className="search__submit"><i className="fas fa-search"></i></button>
          </form>
        </div>
      </nav>

    )
  }




}

export default HeaderSearch
