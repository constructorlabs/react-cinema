import React from "react";
import Search from "./components/Search";
import Header from "./components/Header";
import Display from "./components/Display";
import Footer from "./components/Footer";

class App extends React.Component {
  constructor() {
    super();
    this.state = { movie: [], query: "", page: 1 };

    this.receiveQuery = this.receiveQuery.bind(this);
    this.search = this.search.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }

  receiveQuery(query) {
    this.setState({
      query
    });
  }

  search() {
    const inputString = this.state.query;
    console.log(inputString);
    fetch(
      `http://www.omdbapi.com/?s=${inputString}&page=${
        this.state.page
      }&apikey=7a98d1bb`
    )
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        this.setState({
          movie: data.Search
        });
      });
  }

  nextPage() {
    this.setState({
      page: this.state.page + 1
    }, ()=>this.search());
  }

  render() {
    return (
      <div className='app'>
        <Header />
        <Search
          receiveQuery={this.receiveQuery}
          search={this.search}
          query={this.state.query}
        />
        <Display movies={this.state.movie} nextPage={this.nextPage} />
        <Footer />
      </div>
    );
  }
}

export default App;