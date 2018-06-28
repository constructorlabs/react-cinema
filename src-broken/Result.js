import React from "react";

class Result extends React.Component {
  constructor() {
    super();

    this.state = { infoHidden: true }

    this.toggleInfo = this.toggleInfo.bind(this);
    this.makeStars = this.makeStars.bind(this);

  }

  toggleInfo() {
    this.setState({ infoHidden: !this.state.infoHidden })
  }

  makeStars() {
    const starString = '<span className="fa fa-star checked"></span>'
    const properString = starString.repeat(this.props.movie.imdbRating)
    return (properString)
  }

  render() {
    this.makeStars()
    // console.log("current movie", this.props.currentMovie)

    const movieLinkUrl = `https://imdb.com/title/${this.props.movie.imdbID}`;
    // const article__text = this.state.infoHidden ? 'hide' : '';
    const infoText = this.state.infoHidden ? '' : `${this.props.movie.Plot} `;

    const ratingText = this.state.infoHidden ? '' : `${this.props.movie.Rated}`;
    const runText = this.state.infoHidden ? '' : `${this.props.movie.Runtime}`;
    const textString = this.state.infoHidden ? '' : `\nRated:${ratingText} Runtime: ${runText}`

    const test = (this.props.movie.imdbRating === "N/A") ? "" : { styleString }
    return (
      <article>
        <div className="article__picture">
          <div className="article__text" id="article__main">
            {/* <div className={article__text} id="article__main"> */}
            <a href="#/">
              {this.props.movie.Poster === "N/A" ? <img
                src="MRNmissing.png" alt={`Missing ${this.props.movie.Title} poster`}
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

            <a id={this.props.movie.imdbID} href={movieLinkUrl} target="_blank">
              <p> {this.props.movie.Title} ({this.props.movie.Year})<br />
                {this.props.movie.imdbRating === "N/A" ? "" : `${this.props.movie.imdbRating}  ★ out of 10`}

              </p>

            </a>

            <div className="hidden__text">
              <p> {infoText}
                <br />
                {textString}
              </p>
            </div>

          </div>
        </div>
      </article >
    );
  }
}
export default Result;
