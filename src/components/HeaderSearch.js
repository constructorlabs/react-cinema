import React from "react"

class HeaderSearch extends React.Component{
  constructor(){
    super()

    this.state = {
      textInput: "",
      displaySearch: false
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleNav = this.toggleNav.bind(this)
    this.returnHome = this.returnHome.bind(this)
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
    this.toggleNav(event)

  }

  toggleNav(event){
    event.preventDefault()
    this.setState({
      displaySearch: !this.state.displaySearch
    })
  }

  returnHome(event){
    event.preventDefault()
    this.props.toggleDisplay("home")
  }

  render(){
    return (
      <nav className="navbar">

        //display logo until search icon is clicked
        {!this.state.displaySearch

          ? <div className="nav__home">
              <h2 onClick={this.returnHome}className="logo">PROJECT CINEMA</h2>
              <i onClick={this.toggleNav} className="fas fa-search search__display-bar"></i>
            </div>

          : null}

        //display search bar
        {this.state.displaySearch

          ? <div className="nav__search">
              <form onSubmit={this.handleSubmit} className="search">
                <input type="text" className="search__text" onChange={this.handleInput} placeholder="Search.."/>
                <button type="submit" className="search__submit"><i className="fas fa-search"></i></button>
              </form>
            </div>

          : null}

      </nav>

    )
  }




}

export default HeaderSearch
