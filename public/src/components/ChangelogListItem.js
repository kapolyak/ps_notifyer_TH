import React from "react"

class ChangelogListItem extends React.Component {
  render(props) {
    return (
      <div className="changelog-list-item-container">
        <h2 className="title">{this.props.title}</h2>
        <div className="time">{this.props.date}</div>
        <div className="body">{this.props.body}</div>
      </div>
    );
  }
}

export default ChangelogListItem