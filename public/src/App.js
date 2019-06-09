import React from "react";
import ChangelogList from "./components/ChangelogList";
import Header from "./components/Header";
import { hot } from "react-hot-loader";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: 'kapolyak',
      notifications: [],
      hasNotifications: false,
      modalVisible: false
    };
    this.fetchNotifications = this.fetchNotifications.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
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
    this.fetchNotifications();
    this.fetchToday();
  }

  toggleModal() {
    if (this.state.modalVisible) {
      this.setState({modalVisible: false})
    } else {
      this.setState({modalVisible: true})
    }
  }

  render() {
    const state = this.state;
    return (
      <React.Fragment>
        <Header modalVisible={this.state.modalVisible} toggleModal={this.toggleModal}/>
        <div className="main">
          <ChangelogList notifications={state.notifications}/>
        </div>
      </React.Fragment>
    );
  }
}

export default hot(module)(App) 