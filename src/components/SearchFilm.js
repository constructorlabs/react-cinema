import React from "react"

class SearchFilm extends React.Component{
  constructor(){
    super()

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event){
    event.preventDefault()
    this.props.retrieveFilmId(this.props.film.imdbID)
    this.props.toggleDisplay("film")
  }


  render(){
    return (
      <div onClick={this.handleClick} className="search__result" data-id={this.props.film.imdbID}>
        <img className="result__poster" src={this.props.film.Poster} data-id={this.props.film.imdbID}/>
        <div className="result__title" data-id={this.props.film.imdbID}>
          <p data-id={this.props.film.imdbID}>{this.props.film.Title}</p>
        </div>
        <h5 className="result__year" data-id={this.props.film.imdbID}>({this.props.film.Year})</h5>
      </div>
    )
  }
}

export default SearchFilm
