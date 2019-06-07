import React from "react"
import NotificationList from "./components/NotificationList"
import { hot } from "react-hot-loader"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      notifications: []
    };
    this.fetchNotifications = this.fetchNotifications.bind(this);
  }

  async fetchNotifications() {
    try {
      const res = await fetch("http://localhost:4433/availabilities");
      const json = await res.json();
      this.setState({availabilities: json.reverse()});
    } catch (e) {
      console.error("Failed to fetch 'notifications' data", e);
    }
  }

  componentDidMount() {
    this.fetchNotifications();
  }

  render() {
    return (
      <div className="app">
        <h1>Notifier</h1>
        <NotificationList />
      </div>
    );
  }
}

export default hot(module)(App) 