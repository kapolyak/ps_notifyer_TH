import React from "react";

const tagLookup = {
  1: 'New',
  2: 'Bug fix',
  3: 'Improvement'
}

class NotificationView extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let tagClass = `tag category-${this.props.notification.tag}`
    return (
      <div className="notificationView-container">
        <div className="notification-tag-container">
          <div className={tagClass}>{tagLookup[this.props.notification.tag]}</div>
        </div>
        <div className="body">{this.props.notification.body}</div>
        <br />
        <div className="read-more"><a><b>Read the whole post</b></a></div>
      </div>
    );
  }
}

export default NotificationView