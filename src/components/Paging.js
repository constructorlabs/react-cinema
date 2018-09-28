import React from 'react';

class Paging extends React.Component {
  constructor(){
    super();
    this.handleClickNext = this.handleClickNext.bind(this)
    this.handleClickPrevious = this.handleClickPrevious.bind(this)
  }

    handleClickNext(event) {
        this.props.receivePages(this.props.currentPage+1)
    }
    handleClickPrevious(event) {
        if (this.props.currentPage >1) {
        this.props.receivePages(this.props.currentPage-1)
        }
    }   
 
  render(){
    return (
    <nav className="paging">
        
        <a onClick={this.handleClickPrevious} className="paging__previous">&larr; <span>Page: {this.props.currentPage}</span></a>    
        
        <a onClick={this.handleClickNext} className="paging__next">&rarr;</a>
    </nav>
    )
  }
}

export default Paging;