import React from 'react';

class Detail extends React.Component {

  constructor() {
    super();
    this.state = {isFavourite: false};
    this.handleClick = this.handleClick.bind(this);
    this.handleButtons = this.handleButtons.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  componentDidMount() {
    if (this.props.favourites.map(item => item.imdbID).includes(this.props.detail.imdbID)) {
      this.setState({isFavourite: true});
    }  
    else {
      this.setState({isFavourite: false});
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.favourites.map(item => item.imdbID).includes(newProps.detail.imdbID)) {
      this.setState({isFavourite: true});
    }  
    else {
      this.setState({isFavourite: false});
    }
  }

  handleClick(event) {
    this.props.close();
  }

  handleButtons(event) {
    event.stopPropagation();
  }

  handleCheckbox(event) {
    const wasFavourite = this.state.isFavourite;
    this.setState({isFavourite: !wasFavourite});
    if (wasFavourite) { 
        this.props.removeFav(this.props.detail); 
    }
    else { 
        this.props.addFav(this.props.detail); 
    }
  }

  render() {
    
    return (
      <div className={this.props.classes} onClick={this.handleClick}>
        <div className='detail__header'><h1 className='detail__title'>{this.props.detail.Title} ({this.props.detail.Year})</h1><div className='detail__logos' onClick={this.handleButtons}><input id='check' className='detail__checkbox' type='checkbox' checked={this.state.isFavourite} onChange={this.handleCheckbox}></input><label className='fa' htmlFor='check'></label><a href={`https://www.imdb.com/title/${this.props.detail.imdbID}/`}><i className="fab fa-imdb"></i></a></div></div>
        <h2 className='detail__plot'>{this.props.detail.Plot}</h2> 
        <img className='detail__poster' src={this.props.detail.Poster}></img>
        <p className='detail__info'>{this.props.detail.Genre}  |  Runtime: {this.props.detail.Runtime}  |  Rated {this.props.detail.Rated}  |  IMDB Score: {this.props.detail.imdbRating}</p>
        <p className='detail__director'>Directed by: {this.props.detail.Director}</p>
        <p className='detail__actors'>Actors: {this.props.detail.Actors}</p>
        <p className='detail__awards'>Awards: {this.props.detail.Awards}</p>
      </div>
    );
  }
}

export default Detail;