import React from "react";
import ChangelogListItem from "./ChangelogListItem";

class ChangelogList extends React.Component {
  render() {
    return (
      <div className="changelog-list-container">
        {this.props.changelogs.map((changelog, i) => {
          return (
            <ChangelogListItem 
              key={i}
              title={changelog.title}
              date={changelog.date}
              body={changelog.body}
              tag={changelog.tag}
            />
          )
        })}
      </div>
    );
  }
}

export default ChangelogList