import React from 'react';

import Header from './Header';
import Search from './Search';
import Movies from './Movies';
import Movie from './Movie';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      search: []
    }
    this.receiver = this.receiver.bind(this);
  }

  receiver(movies) {
    this.setState({
      search: movies
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
      </div>
    )
  }
}

export default App;
