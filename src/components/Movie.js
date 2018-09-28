import React from 'react';
class Movie extends React.Component {

    constructor() {
        super()
        this.state = {
            movie:''
        }

        this.fetchResults = this.fetchResults.bind(this);
    }

    fetchResults(imdbID) {
        fetch(`http://www.omdbapi.com/?apikey=95869d44&i=${imdbID}&page=1&type=movie`).
          then(response => response.json()).
          then(body => {
            this.setState({
              movie: body
            })
            console.log(body);
          })
      }

      componentDidMount() {
        this.fetchResults(this.props.imdbID);
      }

    render() {
        return (
            <ul>
                <li>{this.props.movie.Title}</li>
                <li>{this.props.movie.Title}</li>
                <li>{this.props.movie.Title}</li>
            </ul>
        )
    }

}

export default Movie