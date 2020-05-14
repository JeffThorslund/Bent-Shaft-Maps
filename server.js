const nameReader = require("./modules/nameReader");
const compression = require("compression");
var bodyParser = require('body-parser')
const express = require("express");
const path = require("path");
const app = express();

app.use(compression());

app.use(express.static(path.join(__dirname, "client/build")));

app.use(bodyParser.json())

app.post("/api/data", (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  data = nameReader(req.body.path)
  res.send(data);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Server is started baby!`);
