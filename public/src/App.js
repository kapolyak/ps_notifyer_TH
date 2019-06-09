import React from "react";
import NotificationList from "./components/NotificationList";
import Header from "./components/Header"
import { hot } from "react-hot-loader";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      notifications: [
        {title: 'Event 1', body: "Things about this", date: "05/01/19"},
        {title: 'Event 2', body: "Things about this, there is more. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum.", date: "05/02/19"},
        {title: 'Event 3', body: "Things, not much", date: "05/03/19"}
      ]
    };
    this.fetchNotifications = this.fetchNotifications.bind(this);
  }

  async fetchNotifications() {
    axios.get('/notifications')
      .then(({data}) => {
        this.setState({notifications: data})
      })
      .catch((e) => {
        console.log('Error fetching notifications', e)
      })
  }

  async fetchToday() {
    axios.get('/today')
      .then(({data}) => {
        this.setState({today: data})
      })
      .catch((e) => {
        console.log('Error fetching today', e)
      })
  }

  componentDidMount() {
    // this.fetchNotifications();
    this.fetchToday();
  }

  render() {
    const state = this.state;
    return (
      <div className="app">
        <Header />
        <NotificationList notifications={state.notifications}/>
      </div>
    );
  }
}

export default hot(module)(App) 