const express = require("express");
const { Event } = require("../../models/Event");
const router = express.Router();

// @route  Get api/getEvents
// @desc   Pulls all data from database
// @access Public

router.get("/getEvents", (req, res, next) => {
  Event.find({}).then((riv) => res.json(riv));
});

router.get("/getEventByRegion/:region", (req, res, next) => {
  Event.find({ region: req.params.region }).then((riv) => res.json(riv));
});

module.exports = router;
