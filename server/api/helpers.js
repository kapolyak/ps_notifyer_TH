const axios = require("axios");
const { NOTIFICATIONS_URI } = require("./config.js");
const { CHANGELOGS_URI_JSON } = require("./config.js");
const md2json = require("md-2-json");

module.exports = {
  getNotifications: (callback) => {
    axios.get(NOTIFICATIONS_URI_JSON)
        .then(({data}) => {
            let notificationsJson = md2json.parse(data);
            callback(notificationsJson);
        })
  },

  getChangelogs: (callback) => {
    axios.get(CHANGELOGS_URI_JSON)
      .then(({data}) => {
        callback(data)
      })
  },

  processData: (jsonObj) => {
    let notifications = jsonObj['Notifications']
    let resultArray = [];
    for (let key in notifications) {
      let notificationObj = {};
      notificationObj.title = key;
      notificationObj.date = Object.keys(notifications[key])[0]
      notificationObj.body = Object.values(notifications[key])[0]['raw']
      resultArray.push(notificationObj)
    }
    return resultArray
  }
}