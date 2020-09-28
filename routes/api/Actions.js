const express = require("express");
const router = express.Router();

const sendMail = require("../../modules/sendMail");

//River Model
const { River, SectionSchema } = require("../../models/River");

// @route  Get api/getData
// @desc   Pulls all data from database
// @access Public

router.get("/getRivers", (req, res, next) => {
  River.find({}).then((riv) => res.json(riv));
});

// @route  POST api/sendMail
// @desc   Sends an email
// @access Public

router.post("/sendMail", (req, res, next) => {
  const { img, desc, email, river, rapid } = req.body;
  sendMail(img, desc, email, river, rapid);
  res.send("Submitted!");
});

//Get schema in front end

router.get("/getRiverSchema", (req, res, next) => {
  const obj = River.schema.paths;
  res.json(Object.entries(obj));
});

module.exports = router;
