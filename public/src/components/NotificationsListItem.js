import React from "react";

class NotificationsListItem extends React.Component {
  render(props) {
    return (
      <div className="notifications-list-item-container">
        <div>{this.props.title}</div>
        <div>{this.props.body}</div>
      </div>
    );
  }
}

export default NotificationsListItem