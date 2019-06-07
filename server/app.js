const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, '/../public/dist')));

module.exports = app;