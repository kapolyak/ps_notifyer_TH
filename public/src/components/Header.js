import React from "react"
import Avatar from "./Avatar";

class Header extends React.Component {
  render(props) {
    return (
      <header className="header-container">
        <div className="content">
          <h1 className="header-logo">Paperspace Changelog</h1>
          <Avatar />
        </div>
      </header>
    );
  }
}

export default Header