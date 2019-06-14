import React from "react";

const tagLookup = {
  1: 'New',
  2: 'Bug fix',
  3: 'Improvement'
}

class NotificationsListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(e.target.id)
    this.props.handleClick(e.target.id)
  }
  
  render() {
    let tagClass = `tag category-${this.props.tag}`
    return (
      <div className="notifications-list-item-container">
        <span className="notification-tag-container">
            <span className={tagClass}>{tagLookup[this.props.tag]}</span>
        </span>
        <span className="body"><a><b id={this.props.id} onClick={this.handleClick}>{this.props.title}.</b></a> {this.props.body}</span>
      </div>
    );
  }
}

export default NotificationsListItem