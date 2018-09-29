import React from 'react';

class FavList extends React.Component {
  constructor(){
    super();
    // this.state={
    //   favorites:[]
    // }
  }



render(){
  return (
    <li>{this.props.title} {this.props.year}</li>
  )
}

}

export default FavList;
