import React from "react";

class Film extends React.Component {

    render() {

        const poster = this.props.poster == "N/A" ? "./assets/placeholder.jpg" : this.props.poster

        return (
            <article className="film" data-id={this.props.id}>
                <h2 className="film__title">{this.props.title} <span className="film__year">{this.props.year}</span></h2>
                <img src={poster} alt="" className="film__poster" />
            </article>
        )
    }
}

export default Film;