import React from "react"
import cx from "classnames"
import SearchFilm from "./SearchFilm.js"


class SearchDisplay extends React.Component{
  constructor(){
    super()

    this.handlePagination = this.handlePagination.bind(this)
  }

  handlePagination(event){
    event.preventDefault()
    this.props.fetchSearchResults(this.props.searchString, this.props.searchPage + 1)

  }


  render(){
    return(
      <div className="search__display">
        {this.props.searchResults.map(result => {
          return <SearchFilm key={result.imdbID} retrieveFilmId={this.props.retrieveFilmId} toggleDisplay={this.props.toggleDisplay} film={result}/>
        })}
        <button onClick={this.handlePagination}>Next</button>
      </div>
    )
  }


}

export default SearchDisplay
