const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
const helpers = require("./api/helpers.js");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, '/../public/dist')));

app.get('/changelogs', (req, res) => {
  helpers.getChangelogs((response) => {
    res.send(response.Notifications);
  });
})

app.get('/today', (req, res) => {
  res.send(today());
})

function today() {
  return new Date().toLocaleDateString();
}

module.exports = app;