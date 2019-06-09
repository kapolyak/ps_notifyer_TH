import React from "react";
import ChangelogListItem from "./ChangelogListItem";

class ChangelogList extends React.Component {
  render(props) {
    return (
      <div className="changelog-list-container">
        {this.props.notifications.map(notification => {
          return (
            <ChangelogListItem 
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

export default ChangelogList