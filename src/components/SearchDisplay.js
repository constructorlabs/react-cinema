import React from "react"
import cx from "classnames"
import SearchFilm from "./SearchFilm.js"


class SearchDisplay extends React.Component{
  constructor(){
    super()
  }


  render(){
    return(
      <div className="search__display">
        {this.props.searchResults.map(result => {
          return <SearchFilm key={result.imdbID} retrieveFilmId={this.props.retrieveFilmId} toggleDisplay={this.props.toggleDisplay} film={result}/>
        })}
      </div>
    )
  }


}

export default SearchDisplay
