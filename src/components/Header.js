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
          src="https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c93960a66ab95463358588dd85dc9d26&auto=format&fit=crop&w=755&q=80"
        />
      </header>
    );
  }
}

export default Header;
