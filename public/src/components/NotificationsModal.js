import React from "react"
import NotificationsList from "./NotificationsList"

class NotificationsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Latest Changes",
      selectedNotification: null,
      notifications: this.props.changelogs
    }
    this.selectNotification = this.selectNotification.bind(this);
  }

  selectNotification() {

  }

  render() {
    if (this.state.selectedNotification !== null) {
      headerText = this.state.title
    }

    return (
      <div className="notifications-modal">
        <div className="notifications-content">
          <div className="header">
            <h2>Latest Changes</h2>
          </div>
          <NotificationsList selectNotification={this.selectNotification} notifications={this.props.notifications}/>
        </div>
      </div>
    );
  }
}

export default NotificationsModal