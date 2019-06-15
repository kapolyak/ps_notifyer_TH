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
      changelogs: [],
      latestChangelogSeenById: 5,
      hasNotifications: false,
      notifications: [],
      modalVisible: false
    };
    this.fetchChangelogs = this.fetchChangelogs.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.checkNotifications = this.checkNotifications.bind(this);
  }

  async fetchChangelogs() {
    axios.get('/changelogs')
      .then(({data}) => {
        this.setState({changelogs: data}, () => {
          this.checkNotifications();
        })
      })
      .catch((e) => {
        console.log('Error fetching changelogs', e)
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
    this.fetchChangelogs();
    this.fetchToday();
  }

  toggleModal() {
    if (this.state.modalVisible) {
      this.setState({modalVisible: false})
    } else {
      this.setState({modalVisible: true})
    }
  }

  checkNotifications() {
    let notifications = this.state.changelogs.slice(this.state.latestChangelogSeenById);
    this.setState({notifications: notifications, hasNotifications: true})
  }

  render() {
    const state = this.state;
    return (
      <React.Fragment>
        <Header notifications={state.notifications} changelogs={state.changelogs} modalVisible={this.state.modalVisible} toggleModal={this.toggleModal}/>
        <div className="main">
          <ChangelogList changelogs={state.changelogs}/>
        </div>
      </React.Fragment>
    );
  }
}

export default App