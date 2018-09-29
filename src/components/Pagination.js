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
        console.log(e.target.value);
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
                <p className="page-num">Page</p> <form className="page-current" onSubmit={this.handleSubmit}><input onChange={this.handleChange} type="text" value={this.state.currentPage} /></form> <p>of <span className="page-total">{totalPages}</span></p>
                <button className="btn btn__next">&rarr;</button>
            </nav>
        )
    }
}

export default Pagination;