import React from "react";

class NotificationsListItem extends React.Component {
  render(props) {
    return (
      <div>
        <div>{this.props.title}</div>
        <div>{this.props.body}</div>
      </div>
    );
  }
}

export default NotificationsListItem