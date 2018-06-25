import React from "react";
import Search from "./Search";
import Results from "./Results";
import MoreInfo from "./MoreInfo";

const config = {
  apiKey: "77c3b516",
  url: "http://www.omdbapi.com/?i="
};

class App extends React.Component {
  constructor(props) {
    super();

    this.state = {
      films: [],
      showDetailedInfo: false,
      imdbLink: "https://www.imdb.com/title/",
      imdbID: "",
      details: {},
      errorPic: "./assets/woops.jpg"
    };

    this.recieveFilmInfo = this.recieveFilmInfo.bind(this);
    this.recieveMoreInfo = this.recieveMoreInfo.bind(this);
    this.closeDetails = this.closeDetails.bind(this);
  }

  recieveFilmInfo(results) {
    this.setState({
      films: results.Search,
      imdbID: results.Search.imdbID
    });
  }

  recieveMoreInfo(imdbID) {
    this.setState({
      imdbID,
      showDetailedInfo: true
    });
    this.fetchDetails(imdbID);
  }

  closeDetails(showDetailedInfo) {
    this.setState({
      showDetailedInfo: false
    });
  }

  fetchDetails(imdbID) {
    fetch(`${config.url}${imdbID}&plot=small&apikey=${config.apiKey}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          details: data
        });
      });
  }

  render() {
    return (
      <div>
        <header>
          <h1 className="header">Hamzah's Online Movie Search Engine</h1>
        </header>

        <Search recieveFilmInfo={this.recieveFilmInfo} />
        <div className="results_container" id="show_results">
          <Results
            recieveMoreInfo={this.recieveMoreInfo}
            recieveFavourite={this.recieveFavourite}
            fetchDetails={this.fetchDetails}
            imdbLink={this.state.imdbLink}
            films={this.state.films}
            imdbID={this.state.imdbID}
            errorPic={this.errorPic}
            favourites={this.state.favourites}
          />
        </div>
        {this.state.showDetailedInfo ? (
          <MoreInfo
            closeDetails={this.closeDetails}
            details={this.state.details}
          />
        ) : null}
        <div className="footer">
          <footer>
            <a
              className="a__links"
              href="http://www.omdbapi.com/"
              target="_blank"
            >
              Powered by OMDB
            </a>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
