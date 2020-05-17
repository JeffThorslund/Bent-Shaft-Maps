const readRiverDataFiles = require("./modules/readRiverDataFiles");
const sendMail = require("./modules/sendMail");
const compression = require("compression");
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
require("dotenv").config();
const app = express();
app.use(compression());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});
app.post("/api/data", (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  data = readRiverDataFiles(req.body.path);
  res.send(data);
});

app.post("/api/mailer", (req, res, next) => {
  sendMail(req.body);
  res.send("Submitted!");
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Server is started baby!`);

//committing to update password