import React from "react";
import cx from "classnames";
import ResultItemDetails from "./ResultItemDetails";

class ResultItem extends React.Component {
  constructor() {
    super();
    this.state = { detailsShow: false, filmDetails: {} };
    this.handleClick = this.handleClick.bind(this);
    this.fetchMovieDetails = this.fetchMovieDetails.bind(this);
  }

  fetchMovieDetails(movie) {
    fetch(
      `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=${this.props.apiKey}`
    )
      .then(response => response.json())
      .then(body => {
        this.setState({ filmDetails: body });
        console.log(body);
      });
  }

  handleClick(event) {
    if (this.state.detailsShow === true) {
      this.setState({
        detailsShow: !this.state.detailsShow
      });
    } else {
      this.fetchMovieDetails(this.props.movie);
      this.setState({
        detailsShow: !this.state.detailsShow
      });
    }
  }

  render() {
    const classes = cx("result__item__details", {
      "result__item__details--active": this.state.detailsShow,
      "result__item__details--inactive": !this.state.detailsShow
    });

    return (
      <div onClick={this.handleClick} className="result__item">
        <h3>{this.props.movie.Title}</h3>
        <img src={this.props.movie.Poster} />
        <ResultItemDetails
          classes={classes}
          filmDetails={this.state.filmDetails}
        />
      </div>
    );
  }
}

export default ResultItem;
