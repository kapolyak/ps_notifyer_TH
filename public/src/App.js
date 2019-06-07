import React from "react";
import NotificationList from "./components/NotificationList";
import { hot } from "react-hot-loader";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      notifications: []
    };
    this.fetchNotifications = this.fetchNotifications.bind(this);
  }

  async fetchNotifications() {
    axios.get('/notifications')
      .then(({data}) => {
        console.log(data)
      })
      .catch((e) => {
        console.log('Error fetching notifications', e)
      })
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