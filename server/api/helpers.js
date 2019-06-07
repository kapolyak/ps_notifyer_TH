const axios = require("axios");
const { NOTIFICATIONS_URI } = require("./config.js");
const md2json = require("md-2-json");

module.exports = {
  getNotifications: (callback) => {
    axios.get(NOTIFICATIONS_URI)
        .then(({data}) => {
            let notificationsJson = md2json.parse(data);
            callback(notificationsJson);
        })
  },

  processData: (jsonObj) => {
    let notifications = jsonObj['Notifications']
    let resultArray = [];
    for (let key in notifications) {
      console.log('key', key);
      console.log('val', notifications[key]);
      let notificationObj = {};
      notificationObj.title = key;
      notificationObj.date = Object.keys(notifications[key])[0]
      notificationObj.body = Object.values(notifications[key])[0]['raw']
      console.log(notificationObj)
      resultArray.push(notificationObj)
    }
    return resultArray
  }
}