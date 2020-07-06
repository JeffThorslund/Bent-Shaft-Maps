const express = require("express");
const router = express.Router();

const readRiverDataFiles = require("../../modules/readRiverDataFiles");
const getMapList = require("../../modules/getMapList");
const sendMail = require("../../modules/sendMail");

// @route  POST api/getData
// @desc   Pulls all data from database
// @access Public

router.post("/getData", (req, res, next) => {
  let data = readRiverDataFiles(req.body.path);
  res.send(data);
});

// @route  POST api/sendMail
// @desc   Sends an email
// @access Public

router.post("/sendMail", (req, res, next) => {
  const { img, desc, email, river, rapid } = req.body;
  sendMail(img, desc, email, river, rapid);
  res.send("Submitted!");
});

// @route  POST api/getMapList
// @desc   Gets list of maps
// @access Public

router.post("/getMapList", (req, res, next) => {
  console.log(req.body.path);
  let data = getMapList(req.body.path);
  res.send(JSON.stringify(data));
});

module.exports = router;