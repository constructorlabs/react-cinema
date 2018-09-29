import React from "react";

class Pagination extends React.Component {
    constructor() {
        super();

        this.state = {
            currentPage: 1
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(e) {
        const totalPages = Math.ceil(this.props.totalFilms / this.props.filmsPerPage)

        if (e.target.className.includes("btn__next") && this.state.currentPage < totalPages) {
            this.setState({
                currentPage: this.state.currentPage + 1
            }, () => this.props.receivePageNum(this.state.currentPage));
        } else if (e.target.className.includes("btn__prev") && this.state.currentPage > 1) {
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
            <nav id="page-nav" onClick={this.handleClick}>
                <button className="btn btn__prev">&larr;</button>
                <p className="page-num">Page <input onChange={this.handleChange} type="text" className="page-current" value={this.props.currentPage} /> of <span className="page-total">{totalPages}</span></p>
                <button className="btn btn__next">&rarr;</button>
            </nav>
        )
    }
}

export default Pagination;