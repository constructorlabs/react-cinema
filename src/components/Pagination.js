import React from "react";

class Pagination extends React.Component {
  constructor() {
    super();

    this.state = {
      currentPage: 1
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(e) {
    const totalPages = Math.ceil(this.props.totalFilms / this.props.filmsPerPage);

    if (e.target.parentNode.className.includes("btn__next") && this.state.currentPage < totalPages) {
      this.setState({
        currentPage: this.state.currentPage + 1
      }, () => this.props.receivePageNum(this.state.currentPage));
    } else if (e.target.parentNode.className.includes("btn__prev") && this.state.currentPage > 1) {
      this.setState({
        currentPage: this.state.currentPage - 1
      }, () => this.props.receivePageNum(this.state.currentPage));
    };
  }

  handleChange(e) {
    this.setState({
      currentPage: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.receivePageNum(this.state.currentPage);
  }

  render() {

    const totalPages = Math.ceil(this.props.totalFilms / this.props.filmsPerPage)

    return (
      <nav className="page__nav" onClick={this.handleClick}>
        <button className="btn btn__prev"><i className="fas fa-chevron-circle-left"></i></button>
        <p>Page</p> <form className="page__current" onSubmit={this.handleSubmit}><input onChange={this.handleChange} type="text" value={this.state.currentPage} /></form> <p>of <span className="page__total">{totalPages}</span></p>
        <button className="btn btn__next"><i className="fas fa-chevron-circle-right"></i></button>
      </nav>
    )
  }
}

export default Pagination;