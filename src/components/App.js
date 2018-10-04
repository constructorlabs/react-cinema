import React from 'react';
import Search from './Search.js'
import Movies from './Movies.js'

class App extends React.Component {
  constructor(){
    super();

    this.state ={
      pageNumber: 1,
      searchQuery: "",
      movies: [],
      videoClass: "video"
    }

    this.apiCall = this.apiCall.bind(this);
    this.submittedSearchQuery = this.submittedSearchQuery.bind(this);
    this.receivePaginationQuery = this.receivePaginationQuery.bind(this);
    this.receiveVideoBlock = this.receiveVideoBlock.bind(this);
  }

componentDidMount(){

}

apiCall(){
var url = `http://www.omdbapi.com/?apikey=77164d83&s=${this.state.searchQuery}&page=${[this.state.pageNumber]}`
fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(body => {
      console.log(body.Search)
      this.setState({
          movies: body.Search
      })
    })
}

submittedSearchQuery(search){
  console.log(search)
  this.setState({
    pageNumber: 1,
    searchQuery: search
  },() => this.apiCall()
)
}

receivePaginationQuery(){
  this.setState({
    pageNumber: ++this.state.pageNumber
  },() => this.apiCall()
)
}

receiveVideoBlock(){
        this.setState({
            videoClass: "video2"
        })
      }


  render(){
    return (
      <div>
        <header><h1>Screen Search</h1></header>
        <Search submittedSearchQuery={this.submittedSearchQuery} receivePaginationQuery={this.receivePaginationQuery} receiveVideoBlock={this.receiveVideoBlock}/>
        <Movies movies={this.state.movies} />
        <div className="main">
          <video className={this.state.videoClass} src="007.mp4" autoPlay loop muted></video>
        </div>
      </div>
    )
  }
}

export default App;
