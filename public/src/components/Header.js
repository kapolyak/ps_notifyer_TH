import React from "react"
import Avatar from "./Avatar";
import Notifications from "./Notifications";

class Header extends React.Component {
  render(props) {
    return (
      <React.Fragment>
        <header className="header-container">
          <div className="content">
            <h1 className="header-logo">Paperspace Changelog</h1>
            <Avatar toggleModal={this.props.toggleModal}/>
          </div>
          {this.props.modalVisible ? 
          <Notifications /> :
          null
        }
        </header>
      </React.Fragment>
    );
  }
}

export default Header