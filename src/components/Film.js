import React from 'react';
import cx from 'classnames';


class Film extends React.Component{
    constructor(){
        super();
        this.state={moreFilmInfo: [], showSlider: false, trailerYoutubeInfo: [], test: [], placeholder: '/placeholder.jpg', failed: true, sliderClose: true};
        this.fetchMoreInfo = this.fetchMoreInfo.bind(this);
        this.closeSliderFunction = this.closeSliderFunction.bind(this);
        // this.trailerVideo = this.trailerVideo.bind(this);

        // this.fallback = () => {
        //     if (this.props.fallbackSrc) {
        //       this.setState({ failed: true });
        //     }
        //   };
        
    }

  
    
    //async fetch
            fetchMoreInfo(){ 
              Promise.all([
                fetch(`https://www.omdbapi.com/?i=${this.props.film.imdbID}&apikey=73071eff`),
                // fetch(`https://api.themoviedb.org/3/movie/tt0112864/videos?api_key=8aed3c92a5c6ef5e792ffaf51ac22616&language=en-US`),
                fetch(`https://api.themoviedb.org/3/movie/${this.props.film.imdbID}/videos?api_key=8aed3c92a5c6ef5e792ffaf51ac22616&language=en-US`),
                fetch(`https://www.omdbapi.com/?i=${this.props.film.imdbID}&apikey=73071eff`)
             ])
             .then(([res1, res2, res3]) =>  Promise.all([res1.json(), res2.json(), res3.json()]))
            .then(([moreFilmInfo, trailerYoutubeInfo, test]) => this.setState({
                    moreFilmInfo: moreFilmInfo, 
                    trailerYoutubeInfo: `http://www.youtube.com/embed/${trailerYoutubeInfo.results[0].key}?modestbranding=1&showinfo=0&rel=0`,
                    test: test,
                    showSlider: true
                })
                
                );
                
            }
             
    //         // <p>URL:https://www.youtube.com/watch?v=${this.state.trailerYoutubeInfo}</p>

// Multiple fetches ->

    // fetchMoreInfo(){ //default for now
    //     const movieURL = `https://www.omdbapi.com/?i=${this.props.film.imdbID}&apikey=73071eff`; 
    //     fetch(movieURL) 
    //     .then(function(response) {
            
    //         return response.json();
    //     })
    //     .then(moreFilmInfo=> {
    //       this.setState({moreFilmInfo: moreFilmInfo, showSlider: true})
    //         // console.log(find);
    //     }
    //     );
    //     // .catch(function(error) {
    //     //     displayErrorToUser3(`${error} ahhhh server problem`);
    //     // });
    //   }  

    //   trailerVideo(){ //default for now
    //     const ytURL = `https://api.themoviedb.org/3/movie/${this.props.film.imdbID}/videos?api_key=8aed3c92a5c6ef5e792ffaf51ac22616&language=en-US`; 
    //     fetch(ytURL) 
    //     .then(function(response) {
            
    //         return response.json();
    //     })
    //     .then(trailerYoutubeInfo=> {
    //       this.setState({trailerYoutubeInfo: trailerYoutubeInfo})
    //         // console.log(find);
    //     }
    //     );
    //     // .catch(function(error) {
    //     //     displayErrorToUser3(`${error} ahhhh server problem`);
    //     // });
    //   }  

   //end of fetches 

   closeSliderFunction(){
    this.setState({showSlider: false})


    // function to pause trailer video on close
    var iframe = element.querySelector( 'iframe');
    var video = element.querySelector( 'video' );
    console.log(iframe);
	if ( iframe ) {
		var iframeSrc = iframe.src;
		iframe.src = iframeSrc;
	}
	if ( video ) {
		video.pause();
	}

   }

    render() {

        // if (this.state.failed) {
        //     return <img src={this.state.fallbackSrc} />;
        //   } else {
        //     return <img src={this.state.src} onError={this.fallback} />;
        //   }

        //   const url = 'https://media.giphy.com/media/l2JJDrvnFUEboRgSQ/giphy.gif';
        //   const brokenUrl = url.replace('gif','glif');
        //   const fallbackUrl = 'https://media.giphy.com/media/uprwwjptZW4Za/giphy.gif';



        //Slider Toggle
        const sliderView = cx('hidden', {'moreInfo': this.state.showSlider})
        // const sliderClose = cx('moreinfo', {'hidden': this.state.showSlider})
        
        return (
           
            <div className="film" >
                <div className="film_results">
                <div className="film__titles">
                    <h2>{this.props.film.Title}</h2>
                    <h3>{this.props.film.Year}</h3>
                </div>
                    <img onClick={this.fetchMoreInfo} id={this.props.film.imdbID} onError={this.state.placeholder} src={this.props.film.Poster} alt=""/>
                </div>

                 {/* <h2>Broken image:</h2> 
            <img src={brokenUrl} fallbackSrc={fallbackUrl}/>
            <h2>Good image:</h2>
            <img src={url} fallbackSrc={fallbackUrl}/> */}


                 {/* <img onClick={this.fetchMoreInfo} id={this.props.film.imdbID} src={this.props.film.Poster === N/A ? this.state.placeholder : this.props.film.Poster} alt=""/> */}
                {/* <img onClick={this.fetchMoreInfo} id={this.props.film.imdbID} src={this.props.film.Poster} alt="" ref={img => this.img = img} onError={</img> () => this.img.src = '/placeholder.jpg'/> */}
                
                <div className={sliderView}>
                <div>
                    <h4 onClick={this.closeSliderFunction}>X</h4>
                    <p>{this.state.moreFilmInfo.Plot}</p>
                    {/* <p>{this.state.test.Plot}</p> */}
                    {/* <iframe src="http://www.youtube.com/embed/gQ0uSh2Hgcs?modestbranding=1&showinfo=0&rel=0" width="560" height="315" frameborder="0"></iframe> */}
                    <iframe className="trailer" src={this.state.trailerYoutubeInfo} frameborder="0"></iframe>
                    {/* <iframe src=`http://www.youtube.com/embed/${this.state.trailerYoutubeInfo.results[0].key}` width="560" height="315" frameborder="0"></iframe> */}
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