import React from 'react';

class Pagination extends React.Component{
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){

    this.props.receivePageChange(event.target.name)

  }

  render(){
    return (
      <div onClick={this.handleClick}>
        {this.props.page>1?<button name="-1">Previous page</button>:""}
        {this.props.page<this.props.totalPages?<button name="1">Next page</button>:""}
      </div>
    )
  }
}


export default Pagination;
