import React from "react"

class Notification extends React.Component {
  render(props) {
    return (
      <div className="notification-container">
        <h1>{this.props.title}</h1>
        <h2>{this.props.date}</h2>
        <div>{this.props.body}</div>
      </div>
    );
  }
}

export default Notification