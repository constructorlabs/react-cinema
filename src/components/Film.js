import React from 'react';
import cx from 'classnames';


class Film extends React.Component{
    constructor(){
        super();
        this.state={moreFilmInfo: [], showSlider: false, trailerYoutubeInfo: [], test: [], placeholder: '/placeholder.jpg'};
        this.fetchMoreInfo= this.fetchMoreInfo.bind(this);
        this.trailerVideo = this.trailerVideo.bind(this);
        
    }

  
    
    // //async fetch
    //         fetchMoreInfo(){ 
    //           Promise.all([
    //             fetch(`https://www.omdbapi.com/?i=${this.props.film.imdbID}&apikey=73071eff`),
    //             fetch(`https://api.themoviedb.org/3/movie/157336/videos?api_key=8aed3c92a5c6ef5e792ffaf51ac22616&language=en-US`),
    //             // fetch(`https://api.themoviedb.org/3/movie/${this.props.film.imdbID}/videos?api_key=8aed3c92a5c6ef5e792ffaf51ac22616&language=en-US`)
    //             fetch(`https://www.omdbapi.com/?i=${this.props.film.imdbID}&apikey=73071eff`)
    //          ])
    //          .then(([res1, res2]) =>  Promise.all([res1.json(), res2.json()]))
    //         .then(([moreFilmInfo, trailerYoutubeInfo, test]) => this.setState({
    //                 moreFilmInfo: moreFilmInfo, 
    //                 trailerYoutubeInfo: trailerYoutubeInfo,
    //                 showSlider: true,
    //                 test: test
    //             })
                
    //             );
                
    //         }
             
    //         // <p>URL:https://www.youtube.com/watch?v=${this.state.trailerYoutubeInfo}</p>

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

      trailerVideo(){ //default for now
        const ytURL = `https://api.themoviedb.org/3/movie/${this.props.film.imdbID}/videos?api_key=8aed3c92a5c6ef5e792ffaf51ac22616&language=en-US`; 
        fetch(ytURL) 
        .then(function(response) {
            
            return response.json();
        })
        .then(trailerYoutubeInfo=> {
          this.setState({trailerYoutubeInfo: trailerYoutubeInfo})
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
                
                <img onClick={this.fetchMoreInfo} id={this.props.film.imdbID} onError={this.state.placeholder} src={this.props.film.Poster} alt=""/>
                
                 {/* <img onClick={this.fetchMoreInfo} id={this.props.film.imdbID} src={this.props.film.Poster === N/A ? this.state.placeholder : this.props.film.Poster} alt=""/> */}
                {/* <img onClick={this.fetchMoreInfo} id={this.props.film.imdbID} src={this.props.film.Poster} alt="" ref={img => this.img = img} onError={</img> () => this.img.src = '/placeholder.jpg'/> */}
                
                <div className={sliderView}>
                <div>
                    <h4 className={sliderClose}>X</h4>
                    <p>{this.state.moreFilmInfo.Plot}</p>
                    {/* <p>{this.state.test.Plot}</p> */}
                    <p>{this.state.trailerYoutubeInfo.id}</p>
                  
                    </div>
                </div>
            </div>
            
        );
        // console.log(this.state.moreFilmInfo.Plot);
        // console.log(this.state.trailerYoutubeInfo);
        // console.log(this.state.test);
    }
    
}

export default Film;