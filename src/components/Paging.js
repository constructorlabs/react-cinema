import React from "react";

class Paging extends React.Component {
  constructor() {
    super();
    this.state = { clicked: false, movieresult: {} };
    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleClickPrevious = this.handleClickPrevious.bind(this);
  }

  handleClickNext(event) {
    this.props.receivePages(this.props.currentPage + 1);
    this.setState({
      clicked: !this.state.clicked
    });
  }
  handleClickPrevious(event) {
    if (this.props.currentPage > 1) {
      this.props.receivePages(this.props.currentPage - 1);
    }
  }

  render() {
    const totalpages = this.props.totalresults / 10;

    return (
      <nav className="paging">
        {this.props.currentPage > 1 ? (
          <a onClick={this.handleClickPrevious} className="paging__previous">
            &larr;
          </a>
        ) : null}

        <span className="paging__count">Page: {this.props.currentPage}</span>

        {this.props.currentPage < totalpages ? (
          <a onClick={this.handleClickNext} className="paging__next">
            &rarr;
          </a>
        ) : null}
      </nav>
    );
  }
}

export default Paging;
