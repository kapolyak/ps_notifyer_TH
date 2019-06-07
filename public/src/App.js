import React from "react"
import NotificationList from "./components/NotificationList"
import { hot } from "react-hot-loader"

class App extends React.Component {
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