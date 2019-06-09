import React from "react";
import NotificationsListItem from "./NotificationsListItem";

class NotificationsList extends React.Component {
  render(props) {
    return (
      <div className="changelog-list-container">
        {this.props.notifications.map(notification => {
          return (
            <NotificationsListItem
            />
          )
        })}
      </div>
    );
  }
}

export default NotificationsList