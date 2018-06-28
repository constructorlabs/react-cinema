import React from "react";

class Result extends React.Component {
  constructor() {
    super();

    this.state = { infoHidden: true }

    this.toggleInfo = this.toggleInfo.bind(this);
  }

  toggleInfo() {
    this.setState({ infoHidden: !this.state.infoHidden })
  }

  render() {

    const movieLinkUrl = `https://imdb.com/title/${this.props.movie.imdbID}`;
    const infoText = this.state.infoHidden ? '' : `${this.props.movie.Plot} `;
    const ratingText = this.state.infoHidden ? '' : `${this.props.movie.Rated}`;
    const textString = this.state.infoHidden ? '' : `\nRated:${ratingText} Runtime: ${this.props.movie.Runtime}`

    return (
      <article class="brighten">
        <div className="article__picture">
          <div id="article__main" className="grow">
            <a href="#/">
              {this.props.movie.Poster === "N/A" ? <img
                src="MRNmissing2.png" alt={`Missing ${this.props.movie.Title} poster`}
                width="auto"
                height="200"
                onClick={this.toggleInfo} id={this.props.movie.imdbID} /> : <img
                  src={this.props.movie.Poster}
                  alt="Movie poster"
                  width="auto"
                  height="200"
                  onClick={this.toggleInfo} id={this.props.movie.imdbID}
                />}
            </a>
            <div className="article__text">
              <a id={this.props.movie.imdbID} href={movieLinkUrl} target="_blank">
                <h3> {this.props.movie.Title} ({this.props.movie.Year})</h3>
                {this.props.movie.imdbRating === "N/A" ? "" : <h3>{this.props.movie.imdbRating}⭐out of 10</h3>}

              </a>

              <div className="hidden__text">
                <p> {infoText}
                  <br />
                  {textString}
                </p>
              </div>
            </div>
          </div>
        </div>
      </article >
    );
  }
}
export default Result;
