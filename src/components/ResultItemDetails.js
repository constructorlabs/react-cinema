import React from "react";

class ResultItemDetails extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={this.props.classes}>
        <p>Year: {this.props.filmDetails.Year}</p>
        <p>Cast: {this.props.filmDetails.Actors}</p>
        <p>Synopsis: {this.props.filmDetails.Plot}</p>
        <p>Directed by: {this.props.filmDetails.Director}</p>
        <p>IMDB Rating: {this.props.filmDetails.imdbRating}</p>
      </div>
    );
  }
}

export default ResultItemDetails;
