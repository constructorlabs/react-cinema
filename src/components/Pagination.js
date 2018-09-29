import React from "react";

class Pagination extends React.Component {
    constructor() {
        super();

        this.state = {
            currentPage: 1
        }

        this.handleClick = this.handleClick.bind(this);
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

    render() {

        const totalPages = Math.ceil(this.props.totalFilms / this.props.filmsPerPage)

        return (
            <nav id="page-nav" onClick={this.handleClick}>
                <button className="btn btn__prev">&larr;</button>
                <p className="page-num">Page <span className="page-current">{this.props.currentPage}</span> of <span className="page-total">{totalPages}</span></p>
                <button className="btn btn__next">&rarr;</button>
            </nav>
        )
    }
}

export default Pagination;