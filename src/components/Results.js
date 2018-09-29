import React from 'react';
import Displayresults from './Displayresults'
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
