import React from 'react';

class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.movieFetch = this.movieFetch.bind(this);
    };
    movieFetch(e) {
        const evtTarget = e.target;
        const movieParentNode = evtTarget.parentNode;
        const OMBbAPIKey = "aba7af8e";
        fetch('http://www.omdbapi.com/?t=' + this.props.title + '&apikey=' + OMBbAPIKey)
          .then(response => {
            return response.json();
          })
          .then(data => {
            // Show/hide the list
            if (movieParentNode.parentNode.querySelector(".movie-info__moreinfo-details")) {
              // Remove list
              movieParentNode.parentNode.querySelector(".movie-info__moreinfo-details").remove();
              // Update button text
              evtTarget.textContent = "Info";
            } else {
              // Create list with desired movie details
              const infoToDisplay = [
                "Genre",
                "Plot",
                "Runtime",
                "Awards",
                "Language"
              ];
              const html = Object.keys(data)
                .map(function(key) {
                  if (infoToDisplay.indexOf(key) !== -1) {
                    return `<li><strong>${key}</strong>: ${data[key]}</li>`;
                  }
                })
                .join("");
      
              // Update button text
              evtTarget.textContent = "Close";
      
              // Append list
              const moreInfoList = document.createElement("ul");
              moreInfoList.setAttribute("class", "movie-info__moreinfo-details");
              moreInfoList.innerHTML = html;
              movieParentNode.parentNode.append(moreInfoList);
            }
          })
          .catch(error => {
            console.error(error);
          });
      }
      render(){
        return (
            <div id="movie-details" className="movie-details">
                <div className='movie-poster'>
                    <img src={this.props.poster === 'N/A'? (this.props.poster ='http://via.placeholder.com/150x220?text=Image'): this.props.poster} alt={this.props.title} className='movie-poster__image' />
                    </div>
                    <div className='movie-info'>
                    <h2 className='movie-info__title'>{this.props.title}</h2>
                    <div className='movie-info__year'><strong>Year:</strong> {
                        this.props.year
                    }</div>
                    <a className='movie-info__imdb-link' target='_blank' href={'https://www.imdb.com/title/' + this.props.imdbID} >IMDb &#8599;</a>
                    <button onClick={(e) => this.movieFetch(e)} id='movie-info__moreinfo' className='movie-info__moreinfo' data-title='{
                        movie.Title
                    }'>Info</button>
                </div>
            </div>
        );
    };
}

export default Movie;