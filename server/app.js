const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
const helpers = require("./api/helpers.js")

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, '/../public/dist')));

app.get('/notifications', (req, res) => {
  helpers.getNotifications((response) => {
    let result = helpers.processData(response);
    res.send(result);
  });
})

app.get('/today', (req, res) => {
  res.send(today());
})

function today() {
  return new Date().toLocaleDateString();
}

module.exports = app;