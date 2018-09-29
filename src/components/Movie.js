import React from 'react';
import Detail from './Detail';
import cx from 'classnames';

class Movie extends React.Component {
  constructor(){
    super();
    

    this.state = {clicked: false, movieresult: {} };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event){
    
    this.setState({
     clicked: !this.state.clicked
    });
  }

  componentDidMount() {
      const movieUrl = `http://www.omdbapi.com/?i=${this.props.movie.imdbID}&apikey=eabbbb71`
      fetch(movieUrl)
      .then(response => response.json())
      .then(content => {
        this.setState({movieresult: content})
      })
  }
  
  render(){
    const articleclasses = cx('moviesfeed__article', {
      'active': this.state.clicked,
      '': !this.state.clicked
    });

    const moviesfull = cx('moviesfeed__full', {
      'details--open': this.state.clicked,
      'details--closed': !this.state.clicked
    });

    const posterurl = this.props.movie.Poster !== "N/A" ? this.props.movie.Poster : "";

    return (
      
        <article className={articleclasses}>
          <section className={moviesfull} style={{
            backgroundImage: `url(${posterurl})`
          }}>
    
              <div className="moviesfeed__content">
                  <header className="movie__header">
                  <h3 className="movie__title"><span>{this.props.movie.Title}<em>{this.props.movie.Year}</em></span></h3>
                  </header>
                  
                  <a onClick={this.handleClick} href="#" className="btn moviesfeed__btn">
                  {!this.state.clicked ? "Show details" : "Hide Details"}</a>

              </div>

              {this.state.clicked ? <Detail movie={this.state.movieresult}/> : null}
 
          </section>
        </article>

    )
  }
}

export default Movie;