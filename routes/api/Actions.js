const express = require('express');

const router = express.Router();

// River Model
const { River } = require('../../models/River');

// @route  Get api/getData
// @desc   Pulls all data from database
// @access Public

router.get('/getRivers', (req, res, next) => {
  River.find({}).then((riv) => res.json(riv));
});





module.exports = router;
