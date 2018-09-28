import React from "react"
import cx from "classnames"
import SearchFilm from "./SearchFilm.js"


class SearchDisplay extends React.Component{
  constructor(){
    super()
    
    this.state = {
      displayOff: false
    }

    this.isFilmSelected = this.isFilmSelected.bind(this)
  }

  isFilmSelected(){
    this.setState({
      displayOff: !this.state.displayOff
    })
  }

  render(){
    const classes=cx("search__display", {
      "search__display--hidden" : this.state.displayOff
    })
    return(
      <div className={classes}>
        {this.props.searchResults.map(result => {
          return <SearchFilm key={result.imdbID} retrieveFilmId={this.props.retrieveFilmId} isFilmSelected={this.isFilmSelected} film={result}/>
        })}
      </div>
    )
  }


}

export default SearchDisplay
