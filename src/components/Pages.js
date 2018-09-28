import React from "react";
import cx from "classnames";

class Pages extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.className === "previousPage") {
      this.props.receiveCurrentPage(this.props.currentPage - 1);
    } else if (event.target.className === "nextPage") {
      this.props.receiveCurrentPage(this.props.currentPage + 1);
    }
  }

  render() {
    let totalPages = Math.ceil(
      this.props.pagesObject.totalResults / this.props.movieArray.length
    );
    return (
      <div className="pages">
        <button onClick={this.handleClick} className="previousPage">
          &larr;
        </button>
        <p>
          {" "}
          {this.props.currentPage} of {isNaN(totalPages) ? 0 : totalPages} pages
        </p>
        <button onClick={this.handleClick} className="nextPage">
          &rarr;
        </button>
      </div>
    );
  }
}

export default Pages;
