import React from "react"

class Header extends React.Component {
  render(props) {
    return (
      <header className="header-container">
        <h1 className="header-logo">Paperspace Changelog</h1>
        <div className="avatar">Avatar</div>
      </header>
    );
  }
}

export default Header