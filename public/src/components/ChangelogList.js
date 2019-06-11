import React from "react";
import ChangelogListItem from "./ChangelogListItem";

class ChangelogList extends React.Component {
  render() {
    return (
      <div className="changelog-list-container">
        {this.props.changelogs.map(changelog => {
          return (
            <ChangelogListItem 
              key={changelog.title}
              title={changelog.title}
              date={changelog.date}
              body={changelog.body}
            />
          )
        })}
      </div>
    );
  }
}

export default ChangelogList