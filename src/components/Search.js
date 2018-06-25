import React from "react";

const config = {
  omd: {
    apiKey: "2c6457b6&",
    firstSearch: "red",
    url: "http://www.omdbapi.com/"
  }
};

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: config.omd.firstSearch
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  fetchMovies() {
    fetch(`${config.omd.url}?s=${this.state.movie}&apikey=${config.omd.apiKey}`)
      .then(response => response.json())
      .then(result => {
        this.props.getMovies(result.Search);
      })
      .catch(error => console.log(error));
  }

  handleSubmit(event) {
    event.preventDefault();
    this.fetchMovies();
  }

  handleChange(event) {
    this.setState({
      movie: event.target.value
    });
  }

  handleClick(event) {
    this.props.hideInfo();
  }

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    return (
      <div className="header">
        <h1 className="title">OPEN MOVIE DATABASE SEARCH</h1>
        <img
          className="moviereel"
          src="/Users/phoebedg/workspace/react-cinema/moviereel.png"
          alt="Movie Reel"
        />
        <form className="form" onSubmit={this.handleSubmit}>
          <label />
          <input
            onClick={this.handleClick}
            className="input"
            onChange={this.handleChange}
            value={this.state.movie}
          />
          <button className="button">Go</button>
        </form>
      </div>
    );
  }
}

export default Search;
