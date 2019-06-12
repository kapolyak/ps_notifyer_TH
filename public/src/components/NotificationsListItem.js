import React from "react";

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
    return (
      <div className="notifications-list-item-container">
        <span className="tag-container">
            <span className="tag category-1">New</span>
        </span>
        <span className="body"><b id={this.props.id} onClick={this.handleClick}>{this.props.title}</b> {this.props.body}</span>
      </div>
    );
  }
}

export default NotificationsListItem