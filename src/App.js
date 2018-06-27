import React from 'react';

import Header from './Header';
import Search from './Search';
import Movies from './Movies';
import Loading from './elements/Loading';
import BackToTop from './elements/BackToTop';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      search: [],
      searchTerm: "",
      page: 2,
      watchList: localStorage.getItem("watchList") ? localStorage.getItem("watchList") : [],
      watchListSection: false
    }
    this.receiverSearch = this.receiverSearch.bind(this);
    this.receiverWatchList = this.receiverWatchList.bind(this);
    this.receiverDisplayWatchlist = this.receiverDisplayWatchlist.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    const backToTop = body.querySelector("#back-to-top");

    const loading = document.querySelector('#search-results__loading');
    const OMBbAPIKey = "aba7af8e";
    const query = 'http://www.omdbapi.com/?s=' + this.state.searchTerm + '&apikey=' + OMBbAPIKey + '&page=' + this.state.page;

    // Back to top button
    if (body.scrollTop > 300 || html.scrollTop > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }

    // Infinite scroll
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
    window.addEventListener("scroll", this.handleScroll);
  }

  receiverSearch(movies, searchTerm) {
    this.setState({
      search: movies,
      searchTerm: searchTerm,
      watchListSection: false
    })
  }

  receiverDisplayWatchlist() {
    this.setState({
      watchListSection: true
    })
  }

  receiverWatchList(articleTitle, action) {
    if (action === "addToWatchList") {
      this.state.search.forEach(articleObj => {
        return Object.keys(articleObj).find(articleKey => {
          if (articleObj[articleKey] === articleTitle) {
            this.setState({
              watchList: [...this.state.watchList, articleObj]
            })

            localStorage.getItem("watchList")
              ? localStorage.setItem("watchList", JSON.stringify([articleObj, ...JSON.parse(localStorage.getItem("watchList"))]))
              : localStorage.setItem("watchList", JSON.stringify([...this.state.watchList, articleObj]));
          }
        });
      });
    } else {
      const index = JSON.parse(this.state.watchList).forEach((item, index) => {
        if (item.Title === articleTitle) {
          // console.log("Aquis", this.state.watchList);
          this.setState({
            watchList: JSON.parse(this.state.watchList).splice(index, 1)
          })
          localStorage.setItem("watchList", this.state.watchList);
          // console.log("Aquis", localStorage.getItem("watchList"));
        }
      });
    }
  }

  render() {
    const watchList = this.state.watchListSection;
    let MoviesList;
    if (watchList) {
      MoviesList = <Movies movies={localStorage.getItem("watchList") ? JSON.parse(localStorage.getItem("watchList")) : this.state.watchList} receiver={this.receiverWatchList} watchlistbutton={false} />;
    } else {
      MoviesList = <Movies movies={this.state.search} receiver={this.receiverWatchList} watchlistbutton={true} />;
    }
    return (
      <div className="container">
        <Header title="OMDb Movie search" receiver={this.receiverDisplayWatchlist} />
        <Search receiver={this.receiverSearch} />
        {MoviesList}
        <Loading />
        <BackToTop />
      </div>
    )
  }
}

export default App;
