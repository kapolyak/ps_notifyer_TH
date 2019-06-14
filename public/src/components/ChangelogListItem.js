import React from "react"

const tagLookup = {
  1: 'New',
  2: 'Bug fix',
  3: 'Improvement'
}

class ChangelogListItem extends React.Component {
  render() {
    let tagClass = `tag category-${this.props.tag}`
    return (
      <div className="changelog-list-item-container">
        <h2 className="title">{this.props.title}</h2>
        <div className="tag-container">
          <div className={tagClass}>{tagLookup[this.props.tag]}</div>
        </div>
        <div className="time">{this.props.date}</div>
        <div className="body">{this.props.body}</div>
      </div>
    );
  }
}

export default ChangelogListItem