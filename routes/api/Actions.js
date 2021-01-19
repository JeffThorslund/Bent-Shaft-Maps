const express = require('express');

const router = express.Router();

// River Model
const { River, SectionSchema } = require('../../models/River');

// @route  Get api/getData
// @desc   Pulls all data from database
// @access Public

router.get('/getRivers', (req, res, next) => {
  River.find({}).then((riv) => res.json(riv));
});

// Get schema in front end

router.get('/getRiverSchema', (req, res, next) => {
  const obj = River.schema.paths;
  res.json(Object.entries(obj));
});

module.exports = router;
