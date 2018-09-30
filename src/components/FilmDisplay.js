import React from "react"
import cx from "classnames"
import { v4 } from "uuid"
import NewsItem from "./NewsItem.js"


class FilmDisplay extends React.Component{
  constructor(){
    super()

    this.state = {
      filmNews: []
    }


    this.addToFaves = this.addToFaves.bind(this)
  }


  componentWillReceiveProps(nextProps){
      fetch(`https://newsapi.org/v2/everything?q="${nextProps.filmDetails.Title}"&sortBy=relevancy&pageSize=6&apiKey=9ed005ef4eb94baf913fce701c69972f`)
      .then(response => response.json())
      .then(body => {
        this.setState({
          filmNews: body.articles
        })
      })

  }

  addToFaves(event){
    event.preventDefault()
    this.props.retrieveFave(this.props.filmDetails.imdbID)
  }



  render(){
    return(
      <div className="film-display">
        <div className="film-display__header">
          <h2>{this.props.filmDetails.Title} <small>{this.props.filmDetails.Year}</small></h2>
          <a onClick={this.addToFaves} className="add-favourite-button" href=""><i className="far fa-star add-favourite-button"></i></a>
        </div>
        <div className="film-display__info">
          <img className="film-display__poster" src={this.props.filmDetails.Poster}/>
          <div className="film-display__key-facts">
            <span>{this.props.filmDetails.Genre} | {this.props.filmDetails.Runtime} | {this.props.filmDetails.Rated}</span>
            <span> Director: {this.props.filmDetails.Director}</span>
            <span> Written By: {this.props.filmDetails.Writer}</span>
          </div>
        </div>
        <span className="film-display__cast"><strong>Cast:</strong> {this.props.filmDetails.Actors}</span>
        <p>{this.props.filmDetails.Plot}</p>
        <div className="film-display__ratings">
          <h5>Ratings & Awards</h5>
          <span>{this.props.filmDetails.Awards}</span>
          {/* <span>{this.props.filmDetails.Ratings[0].Source}: {this.props.filmDetails.Ratings[0].Value}</span>
          <span>{this.props.filmDetails.Ratings[1].Source}: {this.props.filmDetails.Ratings[1].Value}</span> */}
        </div>
        <div className="film-display__misc">
          <h5>Miscellaneous</h5>
          <span>Released: {this.props.filmDetails.Released}, Box Office: {this.props.filmDetails.BoxOffice}. DVD: {this.props.filmDetails.DVD}</span>
          <span>{this.props.filmDetails.Country} | {this.props.filmDetails.Language} | {this.props.filmDetails.Production} </span>
          <span><a href="{this.props.filmDetails.Website}">Website</a></span>
          </div>
        <div className="film-display__news">
          
          <h4>Recent News</h4>
          {this.state.filmNews.map(story => {
            return <NewsItem key={v4()} story={story} />
          })}

        </div>
    </div>



    )
  }
}


export default FilmDisplay
