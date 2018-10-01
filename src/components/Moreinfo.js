import React from 'react';

class MoreInfo extends React.Component{
  constructor(){
    super();
  }

  
  render(){
     
    return (
        <div className="moreInfo" id="moreInfo">
       <h3>{this.props.allInfo.Title}</h3>
       
      </div>
    )
  }
}



export default MoreInfo;