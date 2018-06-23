import React from 'react';

import Header from './Header';
import Search from './Search';
import Movies from './Movies';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      search: [],
      searchTerm: "",
      page: 2
    }
    this.receiver = this.receiver.bind(this);
    this.handleInfiniteScroll = this.handleInfiniteScroll.bind(this);
  }

  handleInfiniteScroll() {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;

    const loading = document.querySelector('#search-results__loading');
    const OMBbAPIKey = "aba7af8e";
    const query = 'http://www.omdbapi.com/?s=' + this.state.searchTerm + '&apikey=' + OMBbAPIKey + '&page=' + this.state.page;

    if (windowBottom >= docHeight) {
      fetch(query)
        .then(response => {
          loading.textContent = "Loading...";
          loading.classList.add('show');
          return response.json();
        }
        )
        .then(movies => {
          if (movies.Search) {
            const self = this;
            setTimeout(function () {
              self.setState({
                search: [...self.state.search, ...movies.Search],
                page: self.state.page += 1
              });
              loading.classList.remove('show');
            }, 500)
          } else {
            loading.textContent = "No more results";
            loading.classList.add('show');
          }
        })
        .catch(error => {
          console.log(error);
          loading.textContent = "There's been a problem fetching the results. Try again later..";
          loading.classList.add('show');
        });

    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleInfiniteScroll);
  }

  receiver(movies, searchTerm) {
    this.setState({
      search: movies,
      searchTerm: searchTerm
    })
  }

  render() {
    // const Movies = this.state.search !== undefined ? <Movies movies={this.state.search} /> : null;
    return (
      <div className="container">
        <Header title="OMDb Movie search" />
        <Search receiver={this.receiver} />
        {/* {Movies} */}
        <Movies movies={this.state.search} />

        <div id="search-results__loading" className="search-results__loading">Loading...</div>
      </div>
    )
  }
}

export default App;
