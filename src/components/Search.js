import React from 'react';
import Displayresults from './Displayresults'
class Search extends React.Component {
constructor(){
    super()
    this.state = {
        text: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
}

    handleChange(event){
        this.setState({
            text:event.target.value
        })
    }

    handleSubmit(event){
        //capture user input submit
        event.preventDefault()
        this.props.receiver(this.state.text)
    }
 

  render(){
    return (
        
          <form onSubmit={this.handleSubmit}>
              <input type='text' placeholder='Search For A Movie..' onChange={this.handleChange}/>
              <button  type='submit'>Search..</button>   
          </form>
       
    );
  }
}

export default Search;

