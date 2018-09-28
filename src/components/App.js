import React from 'react';
import Search from './Search'

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      query : '',
      results : [],
      movie : ''
    }

    this.receiveQuery = this.receiveQuery.bind(this);
  }

  receiveQuery(query) {
    this.setState({
      query: query
    })
    console.log(query);
  }

  render(){
    return (
      <div className="app">
        <Search receiveQuery={this.receiveQuery}/>
      </div>
    )
  }
}

export default App;
