import React from "react";

class Pagination extends React.Component {
    constructor() {
        super();

        this.state = {
            currentPage: 1
        }
    }

    render() {

        return (
            <div>
                <p>Pagination will go here</p>
            </div>
        )
    }
}

export default Pagination;