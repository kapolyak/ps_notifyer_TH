import React from "react";
import NotificationsListItem from "./NotificationsListItem";

class NotificationsList extends React.Component {
  render(props) {
    return (
      <div className="changelog-list-container">
        {this.props.notifications.map((notification, i) => {
          return (
            <NotificationsListItem
            key={i}
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

export default NotificationsList