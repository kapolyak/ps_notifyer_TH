import React from "react"

class Header extends React.Component {
  render(props) {
    return (
      <div className="header-container">
        <h1>Paperspace Changelog</h1>
        <div className="avatar">Avatar</div>
      </div>
    );
  }
}

export default Header