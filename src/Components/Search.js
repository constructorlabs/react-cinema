import React from "react";

const config = {
  apiKey: "77c3b516",
  url: "http://www.omdbapi.com/?s="
};

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      film: "Gladiator",
      favourites: [],
      page: 1
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reducePage = this.reducePage.bind(this);
    this.addPage = this.addPage.bind(this);
  }

  handleChange(event) {
    this.setState({
      film: event.target.value
    });
  }

  fetchFilm() {
    fetch(`${config.url}${this.state.film}&page=1&apikey=${config.apiKey}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.props.recieveFilmInfo(data);
      });
  }

  // fetchFav(fav) {
  //   fetch(`${config.url}${fav}&page=1&apikey=${config.apiKey}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       this.props.recieveFavourite(data);
  //     });
  // }

  // still need to get pagination working

  // paginationFetch() {
  //   fetch(
  //     `${config.url}${this.state.film}&${this.state.page}&apikey=${
  //       config.apiKey
  //     }`
  //   )
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       this.props.recieveFilmInfo(data);
  //     });
  // }

  handleSubmit(event) {
    event.preventDefault();
    this.fetchFilm();
    // this.setState({
    //   favourites: [...favourites, event.target.value]
    // });
  }

  // still need to get favourites working

  handleFav(event) {
    event.preventDefault();
    this.fetchFav(event.target.value);
  }

  // still not working

  addPage(event) {
    event.preventDefault();
    this.setState({
      page: page + 1
    });
    this.paginationFetch();
  }

  reducePage(event) {
    event.preventDefault();
    if (this.state.page > 0) {
      this.setState({
        page: page--
      });
      this.paginationFetch();
    } else {
      this.setState({
        page
      });
    }
  }

  // componentDidMount() {
  //   this.fetchFilm();
  // }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="form"
        id="movie_form"
        action=""
      >
        <input
          onChange={this.handleChange}
          className="input"
          type="text"
          name="movie_input"
          id="movie_input"
          placeholder="Search for movie here..."
          value={this.state.city}
        />
        <button id="movie_submit" className="submit">
          Search
        </button>
        <select>
          <option onClick={this.handleFav} value={this.state.favourites}>
            {this.state.favourites}
          </option>
        </select>
        <div className="pagination">
          <button onClick={this.addPage}>Next Page</button>
          <button onClick={this.reducePage}>Previous Page</button>
        </div>
      </form>
    );
  }
}

export default Search;
