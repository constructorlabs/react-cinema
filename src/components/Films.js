import React from "react";
import FilmImage from "./FilmImage";

class Films extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="films" id="films">
        {this.props.films.map(film => {
          return (
            <FilmImage
              film={film}
              filmID={film.imdbID}
              key={film.imdbID}
              favourites={this.props.handleClick}
            />
          );
        })}
      </div>
    );
  }
}

export default Films;
