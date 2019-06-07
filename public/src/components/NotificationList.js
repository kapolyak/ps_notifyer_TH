import React from "react";
import Notification from "./Notification";

class NotificationList extends React.Component {
  render() {
    return (
      <div>
        <h3>Notification List</h3>
        <Notification />
        <Notification />
        <Notification />
      </div>
    );
  }
}

export default NotificationList