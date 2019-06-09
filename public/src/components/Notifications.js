import React from "react"

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    }
  }

  render(props) {
    return (
      <div className="notifications-modal">
        <div className="notifications-content">
          <div className="header">
            <h2>Latest Changes</h2>
          </div>
          <div className="body">
            The changelog itself should be a markdown file that lives on 
            GitHub as a Gist (the format should look something like this: 
            https://gist.github.com/dte/701da5c596c0df267500bedffb66d5f8
            This file will be consumed by the sample app through whatever 
            method you choose (cURL, API, other standard library). 
            The file is then displayed to the user as a modal when the user 
            clicks the notification icon on their avatar.
          </div>
        </div>
      </div>
    );
  }
}

export default Notifications