import React from "react"

class ChangelogListItem extends React.Component {
  render() {
    return (
      <div className="changelog-list-item-container">
        <h2 className="title">{this.props.title}</h2>
        <div className="tag-container">
          <div className="tag category-1">New</div>
        </div>
        <div className="time">{this.props.date}</div>
        <div className="body">{this.props.body}</div>
      </div>
    );
  }
}

export default ChangelogListItem