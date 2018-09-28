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

    const pagesClasses = cx("pages", {
      "pages--notVisable": this.props.movieArray.length === 0,
      "pages--visable": this.props.movieArray.length > 0
    });

    const previousPageClass = cx("prevousPage", {
      "button--notVisable": this.props.currentPage === 1
    });

    const nextPageClass = cx("nextPage", {
      "button--notVisable": this.props.currentPage === totalPages
    });

    return (
      <div className={pagesClasses}>
        <button onClick={this.handleClick} className={previousPageClass}>
          &larr;
        </button>
        <p>
          {this.props.currentPage} of {isNaN(totalPages) ? 0 : totalPages} pages
        </p>
        <button onClick={this.handleClick} className={nextPageClass}>
          &rarr;
        </button>
      </div>
    );
  }
}

export default Pages;
