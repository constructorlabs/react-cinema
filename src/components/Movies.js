import React from 'react';
import Movie from './Movie';
import FavMovie from './FavMovie';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';





class Movies extends React.Component{
  constructor(){
    super();
    this.state={
      favList:[],
      displayFav:false,


    }
    this.receiveFavClick = this.receiveFavClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.receiveDeleteClick = this.receiveDeleteClick.bind(this);
  }

  componentDidMount(){
    const storageString = window.localStorage.getItem('favList');
    const localFavList = !storageString ? []: JSON.parse(storageString)
    this.setState({
      favList: localFavList,
    })
  }

  receiveFavClick(id){

    if(this.state.favList.filter(movie => movie.imdbID==id).length == 0){
        const newMovie=this.props.movies.filter(movie => movie.imdbID == id);
        this.setState({
          favList: this.state.favList.concat(newMovie),
        },()=>localStorage.setItem("favList", JSON.stringify(this.state.favList))
      )
    } else {
        this.setState({
          favList: this.state.favList.filter(movie => movie.imdbID !== id),
      }, ()=>localStorage.setItem('favList',JSON.stringify(this.state.favList))
    )}
  }

  receiveDeleteClick(id){
    this.setState({
      favList: this.state.favList.filter(movie => movie.imdbID !== id),

  }, ()=>localStorage.setItem('favList',JSON.stringify(this.state.favList))
);
  }


  handleClick(event){
    this.setState({
      displayFav:!this.state.displayFav
    })
  }

  render(){
    const storageString=localStorage.getItem('favList')
    let localFavList=!storageString ? []: JSON.parse(storageString)

    return(
      <div>
        <Button variant="outlined" color="secondary" className="favorite__button" onClick={this.handleClick}>Show my favorites</Button>
        {this.state.displayFav?<ul className='favorite__list'>
          {localFavList.map(fav => {
            return  <FavMovie title={fav.Title}
              year={fav.Year} id={fav.imdbID} key={fav.imdbID} receiveDeleteClick={this.receiveDeleteClick}/>
            })}
        </ul>:""}
        <div className='movies' >

        {this.props.movies==undefined? <img src="https://media.giphy.com/media/2LbsnnLhaHUnC/giphy.gif"/>
        : this.props.movies.map(movie => {

          return  <Movie
            title={movie.Title}
            year={movie.Year}
            key={movie.imdbID}
            id={movie.imdbID}
            favList={this.state.favList}
            image={movie.Poster}

            receiveFavClick={this.receiveFavClick}
            />
        })}
        </div>
      </div>
    )
  }
}

export default Movies;
