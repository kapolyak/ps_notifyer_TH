import React from "react"
import Avatar from "./Avatar";

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className="header-container">
          <div className="content">
            <h1 className="header-logo"><div>Paperspace</div>Changelog</h1>
            <Avatar notifications={this.props.notifications} modalVisible={this.props.modalVisible} toggleModal={this.props.toggleModal}/>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Header