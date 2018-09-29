import React from "react";

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <header className="header">
        <div className="header__text">
          <h1 className="header__title">Now Playing</h1>
          <h2 className="header__subtitle">An "Internet Movie Database"</h2>
        </div>
        <img
          className="header__image"
          src="/images/kilyan-sockalingum-478724-unsplash.jpg"
        />
      </header>
    );
  }
}

export default Header;
