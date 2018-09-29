import React from 'react';
import cx from 'classnames';


class Film extends React.Component{
    constructor(){
        super();
        this.state={moreFilmInfo: [], showSlider: false};
        this.fetchMoreInfo= this.fetchMoreInfo.bind(this);
    }
  
            fetchMoreInfo(){ //default for now
              const movieURL = `https://www.omdbapi.com/?i=${this.props.film.imdbID}&apikey=73071eff`; 
              fetch(movieURL) 
              .then(function(response) {
                  
                  return response.json();
              })
              .then(moreFilmInfo=> {
                this.setState({moreFilmInfo: moreFilmInfo, showSlider: true})
                  // console.log(find);
              }
              );
              // .catch(function(error) {
              //     displayErrorToUser3(`${error} ahhhh server problem`);
              // });
            }   

    
    


    render() {
        //Slider Toggle
        const sliderView = cx('hidden', {'moreInfo': this.state.showSlider})
        const sliderClose = cx('moreinfo', {'hidden': this.state.showSlider})
        
        return (
            <div className="film" >
                <h2>{this.props.film.Title}</h2>
                <img onClick={this.fetchMoreInfo} id={this.props.film.imdbID} src={this.props.film.Poster} alt=""/>
                
                <div className={sliderView}>
                <div>
                    <h4 className={sliderClose}>X</h4>
                    {this.state.moreFilmInfo.Plot}
                    </div>
                </div>
            </div>
        );
    }
}

export default Film;