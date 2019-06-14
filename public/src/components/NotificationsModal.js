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
              transitionName="example"
              transitionEnterTimeout={0}
              transitionLeaveTimeout={0}
            >
              {this.state.displayNotification === false ? 
                <div key={"list"} className="card">
                  <div className="header">
                    <h2>Latest Changes</h2>
                  </div>
                  <NotificationsList selectNotification={this.selectNotification} notifications={this.props.notifications}/>
                </div>
              :
                <div className="card" key={"view"}>
                  <div className="header">
                    <div onClick={this.renderLatestChanges} className="arrow-container">
                      <svg className="arrow" viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false">
                        <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd"></path>
                      </svg>
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