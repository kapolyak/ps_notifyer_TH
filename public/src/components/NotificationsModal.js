import React from "react"
import NotificationsList from "./NotificationsList"

class NotificationsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Latest Changes",
      selectedNotificationIndex: -1
    }
    this.selectNotification = this.selectNotification.bind(this);
  }

  selectNotification(notificationId) {
    let notificationsArray = this.props.notifications;
    let index;

    for (let i = 0; i < notificationsArray.length; i++) {
      if (Number(notificationsArray[i].id) === Number(notificationId)) {
        this.setState({selectedNotificationIndex: i})
        break;
      }
    }
  }

  render() {
    if (this.state.selectedNotificationIndex === -1) {
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
    } else {
      return (
        <div className="notifications-modal">
          <div className="notifications-content">
            <div className="header">
              <svg className="arrow" viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false">
                <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd"></path>
              </svg>
              <h2>{this.props.notifications[this.state.selectedNotificationIndex].title}</h2>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default NotificationsModal