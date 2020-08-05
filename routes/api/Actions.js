const express = require("express");
const router = express.Router();

const sendMail = require("../../modules/sendMail");

//River Model
const Any = require("../../models/River");

// @route  POST api/getData
// @desc   Pulls all data from database
// @access Public

router.get("/getData", (req, res, next) => {
  Any.find().then((riv) => res.json(riv));
});

// @route  POST api/sendMail
// @desc   Sends an email
// @access Public

router.post("/sendMail", (req, res, next) => {
  const { img, desc, email, river, rapid } = req.body;
  sendMail(img, desc, email, river, rapid);
  res.send("Submitted!");
});

module.exports = router;
