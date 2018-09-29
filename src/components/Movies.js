import React from 'react';
import Movie from './Movie';
import FavMovie from './FavMovie';




class Movies extends React.Component{
  constructor(){
    super();
    this.state={
      favList:[],
      displayFav:false
    }
    this.receiveFavClick = this.receiveFavClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  receiveFavClick(id){

    if(this.state.favList.filter(movie => movie.imdbID==id).length == 0){
        const newMovie=this.props.movies.filter(movie => movie.imdbID == id)
        this.state.favList.length==0?this.setState({favList:newMovie}):
        this.setState({
          favList: this.state.favList.concat(newMovie)
        },()=>localStorage.setItem("favList", JSON.stringify(this.state.favList))
        )
    } else {
        this.setState({
          favList: this.state.favList.filter(movie => movie.imdbID !== id)
      }, ()=>localStorage.setItem('favList',JSON.stringify(this.state.favList))
    )}
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
        <button onClick={this.handleClick}>Show my favorites</button>
        {this.state.displayFav?<ul className='favorites'>
          {localFavList.map(fav => {
            return  <FavMovie title={fav.Title}
              year={fav.Year} key={fav.imdbID}/>
            })}
        </ul>:""}
        <div className='movies' >

        {this.props.movies.map(movie => {

          return  <Movie
            title={movie.Title}
            year={movie.Year}
            key={movie.imdbID}
            id={movie.imdbID}
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
