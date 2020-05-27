const readRiverDataFiles = require("./modules/readRiverDataFiles");
const getMapList = require("./modules/getMapList");
const sendMail = require("./modules/sendMail");
const handleSubmit = require("./modules/handleSubmit");
const handleClickAddRapid = require("./modules/handleClickAddRapid");
const handleClickAddFeature = require("./modules/handleClickAddFeature");

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

app.post("/api/getMapList", (req, res, next) => {
  console.log(req.body.path);
  data = getMapList(req.body.path);
  res.send(JSON.stringify(data));
});

app.post("/api/handleSubmit", (req, res, next) => {
  handleSubmit(req.body.riverName, req.body.river);
  res.send("Submission Received!");
});

app.post("/api/handleClickAddRapid", (req, res, next) => {
  let river = handleClickAddRapid(req.body);
  handleSubmit(req.body.riverName, river);
  res.send("Rapid Added!");
});

app.post("/api/handleClickAddFeature", (req, res, next) => {
  let river = handleClickAddFeature(req.body);
  handleSubmit(req.body.riverName, river);
  res.send("Feature Added!");
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Server is started baby!`);
