import React from 'react';

class Pagination extends React.Component {
    constructor () {
        super()
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick (event) {
        this.props.receivePageNumber(event.target.id)
    }

    render () {
        const totalPages = this.props.pages || 1;
        const totalButtons = Math.floor(totalPages / 10) + 1;
        const totalArray = (max, n = 1) => new Array(max).fill().map(e => e = n++);
        return (
            <div>
                {
                // (totalButtons > 1) && (<div>Page currentPage of {totalButtons}</div>)
                }
                <div className="pagination">
                { 
                    totalArray(totalButtons).map(item => {
                        return <div key={item} id={item} className="page-button" onClick={this.handleClick}>{item}</div>
                    })
                }
                </div>
            </div>
        )
    }
}

export default Pagination;
