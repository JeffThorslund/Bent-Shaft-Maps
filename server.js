const readRiverDataFiles = require("./modules/readRiverDataFiles");
const getMapList = require("./modules/getMapList");
const sendMail = require("./modules/sendMail");
const handleSubmit = require("./modules/handleSubmit");
const handleClickAddRapid = require("./modules/handleClickAddRapid");
const handleClickAddFeature = require("./modules/handleClickAddFeature");
const handleClickAddRiver = require("./modules/handleClickAddRiver");

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
  let data = readRiverDataFiles(req.body.path);
  res.send(data);
});

app.post("/api/mailer", (req, res, next) => {
  sendMail(req.body);
  res.send("Submitted!");
});

app.post("/api/getMapList", (req, res, next) => {
  console.log(req.body.path);
  let data = getMapList(req.body.path);
  res.send(JSON.stringify(data));
});

app.post("/api/handleSubmit", (req, res, next) => {
  let riverName = req.body.rivers[req.body.riverIndex].name;
  handleSubmit(riverName, req.body.river);
  res.send("Submission Received!");
});

app.post("/api/handleClickAddRiver", (req, res, next) => {
  handleClickAddRiver(req.body.riverName);
  res.send("River Added!");
});

app.post("/api/handleClickAddRapid", (req, res, next) => {
  const { rivers, riverIndex } = req.body;
  let river = handleClickAddRapid(rivers, riverIndex);
  let riverName = rivers[riverIndex].name;
  handleSubmit(riverName, river);
  res.send("Rapid Added!");
});

app.post("/api/handleClickAddFeature", (req, res, next) => {
  const { rivers, riverIndex, rapidIndex, newFeatureType } = req.body;
  let river = handleClickAddFeature(
    rivers,
    riverIndex,
    rapidIndex,
    newFeatureType
  );
  let riverName = rivers[riverIndex].name;
  handleSubmit(riverName, river);
  res.send("Feature Added!");
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Server is started baby!`);
