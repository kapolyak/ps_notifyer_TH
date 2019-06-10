import React from "react";
import NotificationsModal from "./NotificationsModal";

class Avatar extends React.Component {
  
  render(props) {
    return (
        <div onClick={this.props.toggleModal} className="avatar">
          <img height="100%" src="https://avatars1.githubusercontent.com/u/1403017?s=400&u=65796d3ba2964756629a8bec2bb1b6a46a091b61&v=4" alt="avatar"></img>
          {this.props.modalVisible ? 
          <NotificationsModal notifications={this.props.notifications} /> :
          null
        }
        </div>
    );
  }
}

export default Avatar