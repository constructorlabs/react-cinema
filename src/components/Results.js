import React from 'react';
import Displayresults from './Displayresults'
import Button from './Button'
class Results extends React.Component {
  render(){
    return (
      <div>
          {this.props.moviesArray.map(movie => {
              return <Displayresults    key={movie.imdbID}  movie={movie}/>
          })}
      </div>
    );
  }
}

export default Results;
