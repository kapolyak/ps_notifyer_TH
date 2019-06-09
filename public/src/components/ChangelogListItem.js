import React from "react"

class ChangelogListItem extends React.Component {
  render(props) {
    return (
      <div className="changelog-list-item-container">
        <h1>{this.props.title}</h1>
        <h2>{this.props.date}</h2>
        <div>{this.props.body}</div>
      </div>
    );
  }
}

export default ChangelogListItem