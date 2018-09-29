import React from 'react';
import Film from './Film';



class Films extends React.Component {
  constructor(){
    super();
    
  }

  
  render(){
      console.log(this.props.films)
    return (
        <div className="films" id="films">
       {this.props.films.map((film, index) => {
           return <Film key={index} film={film} />;
       })}
       
      </div>
    )
  }
}



export default Films;