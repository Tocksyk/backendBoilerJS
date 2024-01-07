const express = require("express");
const app = express();
const port = 5000;
const morgan = require("morgan");
const compression = require("compression");
const helmet = require("helmet");
const cors = require("cors");

app.use(express.json(), cors(), helmet(), compression(), morgan("tiny"));

module.exports = app;
