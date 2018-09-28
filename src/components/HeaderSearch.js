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

  }

  render(){
    return (
      <header onSubmit={this.handleSubmit}>
        <form>
          <input onChange={this.handleInput} type="text" />
          <input type="submit" />
        </form>
      </header>
    )
  }




}

export default HeaderSearch
