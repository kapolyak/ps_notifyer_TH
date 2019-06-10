import React from "react"
import NotificationsList from "./NotificationsList"

class NotificationsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    }
  }

  render(props) {
    return (
      <div className="notifications-modal">
        <div className="notifications-content">
          <div className="header">
            <h2>Latest Changes</h2>
          </div>
          <NotificationsList notifications={this.props.notifications}/>
        </div>
      </div>
    );
  }
}

export default NotificationsModal