import React from "react";

class Pagination extends React.Component {
    constructor() {
        super();

        this.state = {
            currentPage: 1
        }
    }

    render() {

        const totalPages = Math.ceil(this.props.totalFilms / this.props.filmsPerPage);

        return (
            <nav id="page-nav">
                <button className="btn btn__prev">&larr;</button>
                <p className="page-num">Page <span className="page-current">{this.state.currentPage}</span> of <span className="page-total">{totalPages}</span></p>
                <button className="btn btn__next">&rarr;</button>
            </nav>
        )
    }
}

export default Pagination;