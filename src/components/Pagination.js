import React from "react";

class Pagination extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.renderPreviousButton = this.renderPreviousButton.bind(this);
    this.renderButtons = this.renderButtons.bind(this);
    this.renderNextButton = this.renderNextButton.bind(this);
  }

  handleClick(event) {
    if (event.target.id === "nextButton") {
      this.props.receivePageNumber(this.props.currentPage + 1);
    } else if (event.target.id === "previousButton") {
      this.props.receivePageNumber(this.props.currentPage - 1);
    }
  }

  renderPreviousButton() {
    if (this.props.currentPage > 1) {
      return (
        <button
          className="page-buttons"
          id="previousButton"
          onClick={this.handleClick}
        >

          <i class="fas fa-arrow-left" />
          &nbsp;Previous
        </button>
      );
    }
  }

  renderButtons() {
    //TODO: add buttons with page numbers inbetween previous and next buttons
    return <p> </p>;
  }

  renderNextButton() {
    if (this.props.currentPage != this.props.totalPages) {
      return (
        <button
          className="page-buttons"
          id="nextButton"
          onClick={this.handleClick}
        >
          Next&nbsp;
          <i class="fas fa-arrow-right" />
        </button>
      );
    }
  }

  render() {
    return (
      <div className="pagination">
        <div className="pagination__text">
          Page {this.props.currentPage} of {this.props.totalPages}
        </div>
        <div className="pagination__buttons">
          {this.renderPreviousButton()}
          {this.renderButtons()}
          {this.renderNextButton()}
        </div>
      </div>
    );
  }
}

export default Pagination;
