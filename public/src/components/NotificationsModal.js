import React from "react"
import NotificationsList from "./NotificationsList"
import NotificationView from "./NotificationView"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 

class NotificationsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Latest Changes",
      selectedNotificationIndex: 0,
      displayNotification: false
    }
    this.selectNotification = this.selectNotification.bind(this);
    this.renderLatestChanges = this.renderLatestChanges.bind(this);
  }

  renderLatestChanges() {
    this.setState({selectedNotificationIndex: 0, tite: "Latest Changes", displayNotification: false})
  }

  selectNotification(notificationId) {
    let notificationsArray = this.props.notifications;

    for (let i = 0; i < notificationsArray.length; i++) {
      if (Number(notificationsArray[i].id) === Number(notificationId)) {
        this.setState({selectedNotificationIndex: i, displayNotification: true})
        break;
      }
    }
  }

  render() {
    let currentNotification = this.props.notifications[this.state.selectedNotificationIndex];
      return (
        <div className="notifications-modal">
          <div className="notifications-content">
            <ReactCSSTransitionGroup
              transitionName="card"
              transitionEnterTimeout={0}
              transitionLeaveTimeout={0}
            >
              {this.state.displayNotification === false ? 
                <div key={"list"} className="card">
                  <div className="header">
                    <h2>{this.state.title}</h2>
                  </div>
                  <NotificationsList selectNotification={this.selectNotification} notifications={this.props.notifications}/>
                </div>
              :
                <div className="card" key={"view"}>
                  <div className="header">
                    <div onClick={this.renderLatestChanges} className="arrow-container">
                      <img width="100%" src="https://img.icons8.com/windows/32/000000/back.png" />
                    </div>
                    <h2>{this.props.notifications[this.state.selectedNotificationIndex].title}</h2>
                    <div className="header-balance-invisible"></div>
                  </div>
                  <NotificationView notification={currentNotification} />
                </div>
              } 
            </ReactCSSTransitionGroup>
          </div>
        </div>
      );
  }
}

export default NotificationsModal