import React from "react"

class NewsItem extends React.Component{
  constructor(){
    super()
  }

  render(){

    return (
        <span className="film-display__news-item">
          <a href={this.props.story.url}>{this.props.story.title}</a>
          <small>
            <span>{this.props.story.publishedAt} |</span>
            <span>{this.props.story.source.name}</span>
          </small>
        </span>
    )

  }


}

export default NewsItem
