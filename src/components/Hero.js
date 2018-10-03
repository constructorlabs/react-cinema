import React from 'react';


class Hero extends React.Component {
    constructor(){
        super();
        this.fetchHero = this.fetchHero.bind(this)
        this.state ={
            movie: []
        }
    }

    fetchHero(){
    fetch("http://www.omdbapi.com/?apikey=8d5ab09&i=tt1270797")
    .then(response => response.json())
    .then(body => {(console.log(body))
    this.setState({
        movie: body
        })
    })
    }

     componentDidMount(){
    this.fetchHero()
    }

   

  render(){
    return (
        
      <div>
          <h2 className='hero-heading'>Today's Featured Film </h2>
          <p className='scroll-heading'>VENOM</p>
          <p className='scroll-heading'>In Theatres Soon!</p>
          <h3 className='scroll-heading'>Scroll down to watch the trailer</h3>
          <div className='hero-landing'>
      <img  onClick={this.handleClick} className='hero-image' src={this.state.movie.Poster} />
      </div>
       <div className='hero-video'>
            <iframe  width="560" height="315" src="https://www.youtube.com/embed/xLCn88bfW1o?autoplay=1&mute=1&enablejsapi=1"  frameBorder="0" allowFullScreen></iframe>
       </div>
      </div>
    );
  }
}

export default Hero;

