import React from 'react';

class Pagination extends React.Component {
    constructor () {
        super()
        this.handleClick = this.handleClick.bind(this)
        this.getClass = this.getClass.bind(this)
        this.state = { activePage: 1 }
    }

    handleClick(pageNumber, event) {
        this.props.receivePageNumber(event.target.id)
        this.setState({ activePage: pageNumber });
    }

    getClass(pageNumber) {
        return (pageNumber === this.state.activePage) ? "page__button-selected" : "page__button-none"
    }

    render () {

        const totalPages = this.props.pages || 1;
        const totalButtons = Math.ceil(totalPages / 10);
        const totalArray = (max, n=1) => new Array(max).fill().map(e => e = n++);
        return (
            <div>
                {
                // (totalButtons > 1) && (<div>Page currentPage of {totalButtons}</div>)
                }
                <div className="pagination">
                { 
                    totalArray(totalButtons).map(item => {
                        return  <div 
                                    key={item} 
                                    id={item} 
                                    className={this.getClass(item)} 
                                    onClick={(event) => this.handleClick(item, event)}>
                                {item}
                                </div>
                    })
                }

                </div>
            </div>
        )
    }
}

export default Pagination
