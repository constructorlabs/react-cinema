import React from "react";

class Favourite extends React.Component {
    render() {
        return (
            <li className="favourites__list__film" >
                {/* <img src={this.props.details.Poster} alt="" /> */}
                <span onClick={this.props.onClick} className={this.props.titleClass}>{this.props.details.Title}</span>
                <button onClick={this.props.onClick} className={this.props.moveFavClass}><i className="fas fa-chevron-circle-up"></i></button>
                <button onClick={this.props.onClick} className={this.props.delFavClass}><i className="fas fa-minus-circle"></i></button>
            </li>
        )
    }
}

export default Favourite;