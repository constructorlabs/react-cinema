import React from "react";

class Film extends React.Component {

    render() {

        return (
            <article className="film">
                <h2 className="film__title">{this.props.title} <span className="film__year">{this.props.year}</span></h2>
                <img src={this.props.poster} alt="" className="film__poster" />
            </article>
        )
    }
}

export default Film;