import React from "react";
import Notification from "./Notification";

class NotificationList extends React.Component {
  render(props) {
    return (
      <div className="notification-list-container">
        {this.props.notifications.map(notification => {
          return (
            <Notification 
              title={notification.title}
              date={notification.date}
              body={notification.body}
            />
          )
        })}
      </div>
    );
  }
}

export default NotificationList