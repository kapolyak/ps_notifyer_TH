import React from "react";
import NotificationsListItem from "./NotificationsListItem";

class NotificationsList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    
  }

  render(props) {
    return (
      <div className="notifications-list-container">
        {this.props.notifications.map((notification, i) => {
          return (
            <NotificationsListItem
              key={i}
              title={notification.title}
              date={notification.date}
              body={notification.body}
              tag={notification.tag}
              handleClick={this.handleClick}
            />
          )
        })}
      </div>
    );
  }
}

export default NotificationsList