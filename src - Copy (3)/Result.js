import React from "react";

class Result extends React.Component {
  constructor() {
    super();

    this.state = { infoHidden: true }

    this.handleClick = this.handleClick.bind(this);
    this.toggleInfo = this.toggleInfo.bind(this);
    this.makeStars = this.makeStars.bind(this);

  }

  handleClick() {
    // console.log(this.props.movie.imdbID);
    // this.props.receiveMovie(this.props.movie.imdbID,this.props.movie.Plot)
    // if (this.props.currentMovie !=="") {
    //   display = <{this.props.movie.Plot}<br />
    //   <strong>Age Rating: </strong>{this.props.movie.Rated} <strong>Runtime: </strong>{this.props.movie.Runtime} <br />
    //   <strong>IMDB Rating: </strong>{this.props.movie.imdbRating}/10>
    // }
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
    const percentage = this.props.movie.imdbRating * 10

    // <strong>Age Rating: </strong>${this.props.movie.Rated} <strong> Runtime: </strong>${this.props.movie.Runtime} <br />
    //            <strong>IMDB Rating: </strong>${this.props.movie.imdbRating}/10`;

    // const styleString = ("fa fa-star checked").repeat(this.props.movie.imdbRating)
    // console.log(styleString)
    const styleString2 = <span className="fa fa-star checked"></span>

    // <strong>Age Rating: </strong>${this.props.movie.Rated} <strong> Runtime: </strong>${this.props.movie.Runtime} <br />
    //            <strong>IMDB Rating: </strong>${this.props.movie.imdbRating}/10`;

    const test = (this.props.movie.imdbRating === "N/A") ? "" : this.makeStars()
    return (
      <article>
        <div className="article__picture">
          <a id={this.props.movie.imdbID} href={movieLinkUrl} target="_blank">
            <h2> {this.props.movie.Title} ({this.props.movie.Year})</h2>
            {/* {this.props.movie.imdbRating === "N/A" ? "" : { styleString }} */}



            {/* {test} */}

            {styleString2}*{this.props.movie.imdbRating}
            {/* <span className="fa fa-star checked"></span> */}
            <span className="fa fa-star unchecked"></span>


          </a>
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
            <div className="hidden__text">
              {infoText}
              <br />
              {textString}
              {/* <strong>Rated: </strong> {ratingText} <strong>Runtime: </strong>{runText} */}
            </div>

          </div>
        </div>
      </article>
    );
  }
}
export default Result;
