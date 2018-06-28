import React from "react";

class Result extends React.Component {
  constructor() {
    super();

    this.state = { infoHidden: true }

    this.handleClick = this.handleClick.bind(this);
    this.toggleInfo = this.toggleInfo.bind(this);

  }

  handleClick() {
    // console.log(this.props.movie.imdbID);
    // this.props.receiveMovie(this.props.movie.imdbID,this.props.movie.Plot)
    // if (this.props.currentMovie !=="") {
    //   display = <{this.props.movie.Plot}<br />
    //   <strong>Age Rating: </strong>{this.props.movie.Rated} <strong>Runtime: </strong>{this.props.movie.Runtime} <br />
    //   <strong>IMDB Rating: </strong>{this.props.movie.imdbRating}/10>
    // }

  }

  toggleInfo() { this.setState({ infoHidden: !this.state.infoHidden }) }

  render() {

    // console.log("current movie", this.props.currentMovie)

    const movieLinkUrl = `https://imdb.com/title/${this.props.movies.imdbID}`;
    const article__text = this.state.infoHidden ? 'hide' : '';
    const infoText = this.state.infoHidden ? '' : `${this.props.movie.Plot} `;
    const ratingText = this.state.infoHidden ? '' : `${this.props.movie.Rated}`;
    const runText = this.state.infoHidden ? '' : `${this.props.movie.Runtime}`;
    const textString = this.state.infoHidden ? '' : `\nRated:${ratingText} Runtime: ${runText}`


    // <strong>Age Rating: </strong>${this.props.movie.Rated} <strong> Runtime: </strong>${this.props.movie.Runtime} <br />
    //            <strong>IMDB Rating: </strong>${this.props.movie.imdbRating}/10`;

    return (
      <article>
        <div className="article__picture">
          <a id={this.props.movies.imdbID} href={movieLinkUrl} target="_blank">
            <h2> {this.props.movies.Title} ({this.props.movies.Year})</h2>
          </a>
          <div className={article__text} id="article__main">
            <a href="#/">
              <img
                src={this.props.movies.Poster}
                alt="Movie poster not available"
                max-width="auto"
                height="200"
                onClick={this.toggleInfo} id={this.props.movies.imdbID}
              /> </a>
            <div className="hidden__text">
              {infoText}
              <br />
              {textString}
              {/* <strong>Rated: </strong> {ratingText} <strong>Runtime: </strong>{runText} */}
            </div>

          </div>
        </div>
      </article>
    )
  }
}
export default Result;


// render() {
//   this.click = false;
//   // console.log("inside Result", this.props.movies.imdbID);
//   const movieLinkUrl = `https://imdb.com/title/${this.props.movie.imdbID}`;
//   return (
//     <article>
//       <div className="article__picture">
//         <a id={this.props.movie.imdbID} href={movieLinkUrl} target="_blank">
//           <h2> {this.props.movie.Title} ({this.props.movie.Year})</h2>
//         </a>
//         <div className="article__picture">
//           <a href="#">
//             <img
//               src={this.props.movie.Poster}
//               alt="Movie poster"
//               width="auto"
//               height="200"
//               onClick={this.handleClick}
//             />
//           </a>
//         </div>
//       </div>

//       <div className= "article__text">
//         <p>
//           {this.props.movie.Plot}<br />
//           <strong>Age Rating: </strong>{this.props.movie.Rated} <strong>Runtime: </strong>{this.props.movie.Runtime} <br />
//           <strong>IMDB Rating: </strong>{this.props.movie.imdbRating}/10
//         </p>
//       </div>
//     </article>
//   );
// }
// }
// export default Result;


// render() {
//   // console.log("inside Result", this.props.movies.imdbID);
//   const movieLinkUrl = `https://imdb.com/title/${this.props.movie.imdbID}`;
//   return (
//     <article>
//       <table>
//         <tbody>
//           <tr>
//             <td>
//               <img
//                 src={this.props.movie.Poster}
//                 alt="Movie poster"
//                 width="auto"
//                 height="200"
//               // onClick={this.handleClick}
//               />
//             </td>
//             <a id={this.props.movie.imdbID} href={movieLinkUrl} target="_blank">
//               {this.props.movie.Title} {this.props.movie.Year}
//             </a>
//             <td>
//               dd
//           </td>
//           </tr>
//         </tbody>
//       </table>

//     </article>
//   );
// }
// }
// export default Result;


