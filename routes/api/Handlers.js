const express = require("express");
const router = express.Router();

const handleSubmit = require("../../modules/handleSubmit");
const handleDelete = require("../../modules/handleClickDelete");
const handleClickAddRiver = require("../../modules/handleClickAddRiver");
const handleClickAddRapid = require("../../modules/handleClickAddRapid");
const handleClickAddFeature = require("../../modules/handleClickAddFeature");

// @route  POST api/handleSubmit
// @desc   Submit form fields
// @access Public

router.post("/handleSubmit", (req, res, next) => {
  let riverName = req.body.rivers[req.body.riverIndex].name;
  handleSubmit(riverName, req.body.river);
  res.send("Submission Received!");
  io.emit("update");
});

// @route  POST api/handleDelete
// @desc   Delete a feature or rapid
// @access Public

router.post("/handleDelete", (req, res, next) => {
  const {
    rivers,
    riverIndex,
    rapidIndex,
    featureType,
    featureIndex,
  } = req.body;

  let river = handleDelete(
    rivers,
    riverIndex,
    rapidIndex,
    featureType,
    featureIndex
  );

  let riverName = rivers[riverIndex].name;
  handleSubmit(riverName, river);

  res.send("delete submission received");
});

// @route  POST api/handleClickAddRiver
// @desc   Add a new river to db
// @access Public

router.post("/handleClickAddRiver", (req, res, next) => {
  handleClickAddRiver(req.body.riverName);
  res.send("River Added!");
});

// @route  POST api/handleClickAddRapid
// @desc   Add a new rapid to db
// @access Public

router.post("/handleClickAddRapid", (req, res, next) => {
  const { rivers, riverIndex } = req.body;
  let river = handleClickAddRapid(rivers, riverIndex);
  let riverName = rivers[riverIndex].name;
  handleSubmit(riverName, river);
  res.send("Rapid Added!");
});

// @route  POST api/handleClickAddFeature
// @desc   Add a new feature to db
// @access Public

router.post("/handleClickAddFeature", (req, res, next) => {
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

module.exports = router;
