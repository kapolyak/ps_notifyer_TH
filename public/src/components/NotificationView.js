import React from "react";

class NotificationView extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="notificationView-container">
        <div className="tag-container">
            <div className="tag category-1">New</div>
        </div>
        <div className="body">{this.props.notification.body}</div>
      </div>
    );
  }
}

export default NotificationView