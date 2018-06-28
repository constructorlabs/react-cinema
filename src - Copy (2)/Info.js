import React from "react";


class Info extends React.Component {

  constructor() {
    super();

  }

  render() {

    return (
      
        <p>
          {/* {alert (this.props.currentInfo)} */}
          {this.props.currentMovie}
          <br />
          {this.props.currentInfo}
          {/* <strong>Age Rating: </strong>{this.props.movie.Rated} <strong>Runtime: </strong>{this.props.movie.Runtime} <br />
          <strong>IMDB Rating: </strong>{this.props.movie.imdbRating}/10 */}
          </p>

     
    )
  };
}
export default Info;